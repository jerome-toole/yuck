<div <?= \Granola\Helpers::buildAttributes($args['attributes']) ?>>
    <?php if (!empty($args['items'])) { ?>
        <?php if ($args['show_taxonomy_filters']) { ?>
            <?= \Granola\Component::get('taxonomy-filters', [
                'object' => $args['object'],
            ]); ?>
        <?php } ?>

        <?= \Granola\Component::get($args['items_render_component'], $args['items_render_component_args']); ?>
        <?= \Granola\Component::get('pagination'); ?>
    <?php } else { ?>
        <?= \Granola\Component::get('no-content', [
            'object' => $args['object'],
        ]); ?>
    <?php } ?>
</div>
