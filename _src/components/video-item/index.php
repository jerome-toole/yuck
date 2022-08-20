<div <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
    <button class="video-item__play-button js-video-item-play">
        <span class="screen-reader-text">
            <?= esc_html__('Play video', 'granola'); ?>
        </span>
    </button>

    <?php if (!empty($args['image'])) { ?>
        <div class="video-item__media">
            <?= \Granola\Component::get('image', $args['image']); ?>
        </div>
    <?php } ?>

    <div class="video-item__video">
        <div class="video-item__video-inner">
            <button class="video-item__video-close cross">
                <span class="screen-reader-text">
                    <?= esc_html__('Close Video', 'granola') ?>
                </span>
            </button>

            <div class="video-item__video-wrap">
                <?= $args['video'] ?>
            </div>
        </div>
    </div>
</div>
