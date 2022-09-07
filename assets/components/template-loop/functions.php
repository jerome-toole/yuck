<?php

namespace Granola\Components\TemplateLoop;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [],
        'items' => [],
        'object' => \Granola\WordPress\PageObject::get(),
        'items_render_component' => 'cards',
        'items_render_component_args' => [],
        'show_taxonomy_filters' => false,
    ], $args);

    $args['classes'] = array_merge([
        'template-loop',
        'wp-block',
    ], $args['classes']);

    while (\have_posts()) {
        \the_post();
        $args['items'][]['object'] = \get_post();
    }

    $args['items_render_component_args']['items'] = $args['items'];

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
