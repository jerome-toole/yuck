import { debounce } from 'lodash';
import isElementVisible from '../../../scripts/helpers/isElementVisible.js';

const dropdownSelector = '.menu-item-has-children';

// TODO manage focus leaving submenus and overlay mobile menu and close them appropriately.

export default class SiteHeader {
    constructor(element) {
        this.el = element;
        this.headerTop = this.el.querySelector('.site-header__top');
        this.navigation = this.el.querySelector('.site-header__navigation');
        this.menu = this.el.querySelector('.site-header__main-menu');
        this.dropdowns = this.el.querySelectorAll(dropdownSelector);
        this.toggles = this.el.querySelectorAll('.js-site-header-toggle');
        this.currentPageAnchors = this.el.querySelectorAll('.current-menu-item > [href*="#"]');
        this.burger = this.el.querySelector('.site-header__burger');
        this.lastScroll = 0;

        this.init();
        this.setHeight();

        window.addEventListener(
            'resize',
            debounce(() => {
                this.setHeight();
            }, 50)
        );
    }

    init() {
        if (this.isBurgerModeActive()) {
            this.closeHeader(true);
        }

        // ---------------------------------------------------------------------
        // Handle the toggles that will open and close the menu
        // ---------------------------------------------------------------------
        if (this.toggles.length > 0) {
            this.toggles.forEach((toggle) => {
                toggle.addEventListener('click', () => {
                    this.toggleHeader();
                });
            });
        }

        // ---------------------------------------------------------------------
        // Handle anchor links in the same page.
        // ---------------------------------------------------------------------
        if (this.currentPageAnchors.length > 0) {
            this.currentPageAnchors.forEach((link) => {
                link.addEventListener('click', () => {
                    this.closeHeader(true);
                });
            });
        }

        // ---------------------------------------------------------------------
        // If there are dropdowns
        // ---------------------------------------------------------------------
        if (this.dropdowns.length > 0) {
            this.dropdowns.forEach((dropdown) => {
                // ---------------------------------------------------------------------
                // Get the top level link
                // ---------------------------------------------------------------------
                const link = dropdown.querySelector('a');

                // ---------------------------------------------------------------------
                // Initialise the tab indexes
                // ---------------------------------------------------------------------
                SiteHeader.closeDropdown(dropdown);

                // ---------------------------------------------------------------------
                // Handle a click on the link
                // ---------------------------------------------------------------------
                link.addEventListener('click', (event) => {
                    event.preventDefault();

                    this.toggleDropdown(dropdown);
                });
            });

            // ---------------------------------------------------------------------
            // Add an event listener to clicks so we can close the menu if clicked
            // outside of
            // ---------------------------------------------------------------------
            document.addEventListener('click', (event) => {
                this.dropdowns.forEach((dropdown) => {
                    if (!dropdown.contains(event.target)) {
                        SiteHeader.closeDropdown(dropdown);
                    }
                });
            });

            // ---------------------------------------------------------------------
            // Listen for a press of the escape key and check if the we were within
            // a dropdown
            // ---------------------------------------------------------------------
            document.addEventListener('keyup', (event) => {
                if (event.key === 'Escape') {
                    const { activeElement } = document;
                    const activeDropdown = activeElement.closest(dropdownSelector);

                    // ---------------------------------------------------------------------
                    // Check if we actually tried to hit escape when we were in a dropdown
                    // ---------------------------------------------------------------------
                    if (activeDropdown) {
                        const activeLink = activeDropdown.querySelector('a');

                        // Return focus to the parent link
                        activeLink.focus();

                        // close the dropdown
                        SiteHeader.closeDropdown(activeDropdown);
                    }
                }
            });
        }
    }

    getHeight() {
        const headerHeight = this.headerTop.offsetHeight;

        // if (this.announcementBanner) {
        //     headerHeight += this.announcementBanner.offsetHeight;
        // }

        return headerHeight;
    }

    setHeight() {
        this.headerHeight = this.getHeight();

        document.documentElement.style.setProperty(
            '--site-header--bottom',
            `${this.headerHeight}px`
        );
        this.el.classList.add('site-header--positioned');
    }

    toggleHeader() {
        if (this.el.classList.contains('is-open')) {
            this.closeHeader();
        } else {
            this.openHeader();
        }
    }

    openHeader() {
        let first = '';

        if (this.menu) {
            const listItems = Array.from(this.menu.children);

            listItems.forEach((li) => {
                const a = li.querySelector('a');

                SiteHeader.setTabIndex([a], 0);

                if (first === '') {
                    first = a;
                }
            });
        }

        this.el.classList.add('is-open');
        document.documentElement.classList.add('no-scroll');

        this.toggles.forEach((toggle) => {
            toggle.setAttribute('aria-expanded', 'true');
        });

        SiteHeader.setTabIndex(this.toggles, 0);

        if (this.menu) {
            first.focus();
        }
    }

    closeHeader(initial = false) {
        // close the menu
        this.el.classList.remove('is-open');
        document.documentElement.classList.remove('no-scroll');

        if (this.isBurgerModeActive()) {
            this.toggles.forEach((toggle) => {
                toggle.setAttribute('aria-expanded', 'false');
            });

            // make the items not tabbable
            if (this.navigation) {
                const elements = SiteHeader.getTabbableItems(this.navigation);
                SiteHeader.setTabIndex(elements, -1);
            }

            if (initial !== true) {
                // Focus the burger
                this.burger.focus();
            }
        }
    }

    toggleDropdown(dropdown) {
        if (dropdown.classList.contains('is-active')) {
            SiteHeader.closeDropdown(dropdown);
        } else {
            this.openDropdown(dropdown);
        }
    }

    openDropdown(dropdown) {
        const submenu = dropdown.querySelector('.sub-menu');
        const elements = SiteHeader.getTabbableItems(submenu);

        // Close all non-parent dropdowns first
        this.dropdowns.forEach((otherDropdown) => {
            if (!otherDropdown.contains(dropdown)) {
                SiteHeader.closeDropdown(otherDropdown);
            }
        });

        // Make the elements of this dropdown active
        SiteHeader.setTabIndex(elements, 0);

        // Open the dropdown
        dropdown.classList.add('is-active');

        // Set focus to the first element in the dropdown
        if (elements.length > 0) {
            elements[0].focus();
        }
    }

    static closeDropdown(dropdown) {
        const submenu = dropdown.querySelector('.sub-menu');

        const elements = SiteHeader.getTabbableItems(submenu);

        SiteHeader.setTabIndex(elements, -1);
        dropdown.classList.remove('is-active');
    }

    static setTabIndex(elements, index) {
        elements.forEach((element) => {
            element.tabIndex = index;
        });
    }

    static getTabbableItems(parent) {
        return parent.querySelectorAll('a, button');
    }

    isBurgerModeActive() {
        return isElementVisible(this.burger);
    }
}
