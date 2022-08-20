<section <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
    <div class="componentname__inner">
        <?php if (!empty($args['heading'])) { ?>
            <?= \Granola\Component::get('heading', [
                'heading' => $args['heading'],
                'classes' => ['componentname__heading'],
            ]); ?>
        <?php } ?>

        <?php if (!empty($args['content'])) { ?>
            <div class="componentname__content">
                <?= wp_kses_post($args['content']); ?>
            </div>
        <?php } ?>

        <?php if (!empty($args['items'])) { ?>
            <div class="componentname__items">
                <?php foreach ($args['items'] as $key => $item) { ?>
                    <div class="componentname__item">
                        <?= esc_html($item['heading']); ?>
                    </div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>
</section>
