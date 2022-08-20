<?php if (!empty($args['url']) || !empty($args['content'])) { ?>
    <a <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
        <?= $args['prefix']; ?>
        <?= $args['content_filter']($args['content']); ?>
        <?= $args['suffix']; ?>
    </a>
<?php } ?>
