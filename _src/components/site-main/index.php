<<?= esc_html($args['el']); ?> <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
    <?php if (!empty($args['header'])) { ?>
        <header class="site-main__header">
            <?php echo $args['header']; ?>
        </header>
    <?php } ?>

    <?php if (!empty($args['content'])) { ?>
        <div class="site-main__content blocks">
            <?php echo $args['content']; ?>
        </div>
    <?php } ?>
</<?= esc_html($args['el']); ?>>
