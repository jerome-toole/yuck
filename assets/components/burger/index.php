<button <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
    <?php if (!empty($args['aria-label'])) { ?>
        <span class="screen-reader-text"><?= esc_html($args['aria-label']); ?></span>
    <?php } ?>
    <span class="burger__line burger__line--1"></span>
    <span class="burger__line burger__line--2"></span>
    <span class="burger__line burger__line--3"></span>
</button>
