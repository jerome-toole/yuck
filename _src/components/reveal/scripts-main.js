// https://css-tricks.com/using-css-transitions-auto-dimensions/

class RevealItem {
    constructor(revealContainer) {
        this.revealContainer = revealContainer;
        this.revealButton = this.revealContainer.querySelector('.js-reveal-item');
        this.content = this.revealContainer.querySelector('.reveal__content');

        this.init();
    }

    init() {
        if (this.content && this.revealButton) {
            // ---------------------------------------------------------------------
            // Handle the triggers that will open and close the menu
            // ---------------------------------------------------------------------

            this.revealButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.revealToggle();
            });

            this.revealContainer.addEventListener('reveal-open', this);
            this.revealContainer.addEventListener('reveal-close', this);

            this.revealContainer.classList.add('is-enabled');
            this.revealClose();
        }
    }

    transitionEnded(event) {
        if (event.propertyName !== 'height') return;

        this.content.removeEventListener('transitionend', this);

        const isCollapsed = this.revealButton.getAttribute('aria-expanded') === 'false';

        if (isCollapsed) {
            this.content.hidden = true;
        } else {
            // remove "height" from the element's inline styles, so it can return to its initial value
            this.content.style.height = null;
        }
    }

    revealOpen() {
        const { content } = this;

        content.hidden = false;

        // get the height of the element's inner content, regardless of its actual size
        const contentHeight = content.scrollHeight;

        // have the element transition to the height of its inner content
        content.style.height = `${contentHeight}px`;

        content.addEventListener('transitionend', this);

        // mark the content as "currently not collapsed"
        this.revealButton.setAttribute('aria-expanded', 'true');
        this.revealContainer.classList.add('is-open');
    }

    revealClose() {
        const { content } = this;
        content.addEventListener('transitionend', this);

        // temporarily disable all css transitions
        const elementTransition = content.style.transition;
        content.style.transition = '';

        content.style.height = `${0}px`;

        content.style.transition = elementTransition;

        // mark the content as 'currently collapsed'
        this.revealButton.setAttribute('aria-expanded', 'false');
        this.revealContainer.classList.remove('is-open');
        this.content.hidden = true;
    }

    revealCloseTransition() {
        const { content } = this;

        content.addEventListener('transitionend', this);

        // get the height of the element's inner content, regardless of its actual size
        const contentHeight = content.scrollHeight;

        // temporarily disable all css transitions
        const elementTransition = content.style.transition;
        content.style.transition = '';

        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'
        requestAnimationFrame(() => {
            content.style.height = `${contentHeight}px`;
            content.style.transition = elementTransition;

            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(() => {
                content.style.height = `${0}px`;
            });
        });

        // mark the content as "currently collapsed"
        this.revealButton.setAttribute('aria-expanded', 'false');
        this.revealContainer.classList.remove('is-open');
    }

    revealToggle() {
        const isCollapsed = this.revealButton.getAttribute('aria-expanded') === 'false';

        if (isCollapsed) {
            this.revealOpen();
        } else {
            this.revealCloseTransition(this.content);
        }
    }

    handleEvent(e) {
        switch (e.type) {
            case 'transitionend':
                this.transitionEnded(e);
                break;
            case 'reveal-open':
                this.revealOpen(e);
                break;
            case 'reveal-close':
                this.revealClose(e);
                break;
            default:
            // do nothing
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach((element) => {
        new RevealItem(element);
    });
});
