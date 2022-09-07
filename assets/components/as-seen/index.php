<div <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
    <div class="media-content__content">
        <?php if (!empty($args['heading'])) { ?>
            <?= \Granola\Component::get('heading', [
                'heading' => $args['heading'],
                'id' => $args['heading_id'] ?? null,
                'classes' => ['media-content__heading'],
            ]); ?>
        <?php } ?>

        <?php if (!empty($args['subheading'])) { ?>
            <?= \Granola\Component::get('heading', [
                'heading' => $args['subheading'],
                'el'      => 'h3',
                'classes' => ['media-content__subheading'],
            ]); ?>
        <?php } ?>

        <?php if (!empty($args['content'])) {
            echo wp_kses_post($args['content']);
        } ?>

        <?php if (!empty($args['button_1'])) { ?>
            <div class="flex-list">
                <?= \Granola\Component::get('link', $args['button_1']); ?>
            </div>
        <?php } ?>
    </div>

    <?php if (!empty($args['media']) || !empty($args['image'])) { ?>
        <div class="media-content__media">
            <?php if ($args['media_type'] === 'video') {
                echo \Granola\Component::get('video-item', $args);
            } else {
                echo \Granola\Component::get('image', $args['image']);
            } ?>
        </div>
    <?php } ?>
</div>
