<?php

namespace Granola\Components\Element;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'el' => 'div',
        'classes' => [],
        'content' => '',
        'content_filter' => 'wp_kses_post',
    ], $args);

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
