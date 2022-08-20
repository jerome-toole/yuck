<footer class="<?= \Granola\Helpers::buildClasses($args['classes']) ?>">
    <div class="site-footer__inner">
        <div class="site-footer__top alignwide">
            <div class="site-footer__logo">
                <?= \Granola\Component::get('link', [
                    'url' => home_url('/'),
                    'content' => \Granola\Image::get('logo-alt.svg', [
                        'alt' => get_bloginfo('name'),
                    ]),
                    'content_filter' => false,
                ]); ?>
            </div>

            <?php if ($top_text = get_field('footer_text_top', 'option')) { ?>
                <div class="site-footer__top-text">
                    <?= wp_kses_post($top_text); ?>
                </div>
            <?php } ?>

            <div class="site-footer__menu site-footer__menu-1">
                <?php if (has_nav_menu('footer-1')) : ?>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'footer-1',
                        'depth' => 1,
                        'menu_class' => 'site-footer__menu__inner',
                    )); ?>
                <?php endif; ?>
            </div>

            <div class="site-footer__menu site-footer__menu-2">
                <?php if (has_nav_menu('footer-2')) : ?>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'footer-2',
                        'depth' => 1,
                        'menu_class' => 'site-footer__menu__inner',
                    )); ?>
                <?php endif; ?>
            </div>

            <div class="site-footer__right">
                <?= \Granola\Component::get('social-icons', [
                    // translators: 1: Social network name.
                    'title' => __('Visit our %s page', 'granola'),
                ]); ?>

                <?php if (!empty($args['content']['images'])) { ?>
                    <div class="site-footer__images flex-grid">
                        <?php foreach ($args['content']['images'] as $image) { ?>
                            <?php if (!empty($image['link'])) { ?>
                                <?= \Granola\Component::get('link', array_merge($image['link'], [
                                    'classes' => ['site-footer__image', 'img-fit'],
                                    'content' => \Granola\Component::get('image', $image['image']),
                                    'content_filter' => false,
                                ])); ?>
                            <?php } else { ?>
                                <div class="site-footer__image img-fit">
                                    <?= \Granola\Component::get('image', $image['image']); ?>
                                </div>
                            <?php } ?>
                        <?php } ?>
                    </div>
                <?php  } ?>
            </div>
        </div>

        <div class="site-footer__bottom">
            <div class="site-footer__bottom__inner alignwide">
                <?php if ($bottom_text = get_field('footer_text_bottom', 'option')) { ?>
                    <div class="site-footer__bottom-text">
                        <?= wp_kses_post($bottom_text); ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</footer>
