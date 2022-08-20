<header class="<?= \Granola\Helpers::buildClasses($args['classes']) ?>">
    <div class="site-header__inner">
        <div class="site-header__top">
            <?= \Granola\Component::get('link', [
                'url' => home_url('/'),
                'classes' => ['site-header__logo', 'img-fit'],
                'content' => \Granola\Image::get('logo.svg', [
                    'alt' => get_bloginfo('name'),
                ]),
                'content_filter' => false,
            ]); ?>

            <?php echo \Granola\Component::get('burger', [
                'classes' => [
                    'site-header__burger',
                    'js-site-header-toggle',
                ],
                'attributes' => [
                    'aria-label' => __('Main menu button', 'granola'),
                    'aria-controls' => 'main-menu',
                    'aria-expanded' => 'false',
                ]
            ]); ?>
        </div>

        <div class="site-header__bottom">
            <?php if (has_nav_menu('header')) : ?>
                <nav class="site-header__navigation">
                    <?php wp_nav_menu([
                        'theme_location' => 'header',
                        'container' => '',
                        'menu_class' => 'site-header__main-menu  site-header__navigation__menu',
                        'menu_id' => 'main-menu', // don't delete it, needed for 'aria-controls' in burger button.
                        'fallback_cb' => false,
                        'walker' => new \Theme\WordPress\MenuWalker(),
                    ]); ?>
                </nav>
            <?php endif; ?>

            <?= \Granola\Component::get('header-search'); ?>

            <?php if (!empty($args['content']['call_to_action_1'])) { ?>
                <div class="site-header__widgets">
                    <?= \Granola\Component::get('link', $args['content']['call_to_action_1']); ?>
                </div>
            <?php } ?>
        </div>
    </div>
</header>
