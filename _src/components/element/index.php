<?php if (!empty($args['content'])) { ?>
    <<?= esc_html($args['el']); ?> <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>><?php
        echo $args['content_filter']($args['content']);
    ?></<?= esc_html($args['el']); ?>>
<?php }
