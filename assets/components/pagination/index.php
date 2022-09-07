<?php if (!empty($args['output'])) { ?>
    <div <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
        <?= $args['output']; ?>
    </div>
<?php } ?>
