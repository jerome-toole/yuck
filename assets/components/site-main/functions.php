<?php

namespace Granola\Components\SiteMain;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'el' => 'div',
        'classes' => [
            'site-main',
        ]
    ], $args);

    // Add post classes and use the <article> wrapper on a singular post.
    if (!empty($args['object']) && $args['object'] instanceof \WP_Post) {
        $args['classes'] = array_merge($args['classes'], get_post_class());
        $args['el'] = 'article';
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
