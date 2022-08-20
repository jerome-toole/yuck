<?php

namespace Granola\Components\Pagination;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [
            'pagination',
            'alignfull',
            'wp-block',
        ]
    ], $args);

    $args['output'] = get_the_posts_pagination([
        'prev_text' => __('Previous page', 'granola'),
        'next_text' => __('Next page', 'granola'),
        'before_page_number' => '<span class="screen-reader-text">' . __('Page', 'granola') . ' </span>',
        'class' => 'pagination__inner',
    ]);

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
