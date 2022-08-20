<?php

namespace Granola\Components\HeaderSearch;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'id' => uniqid(),
        'classes' => [
            'header-search',
        ],
        'attributes' => [],
    ], $args);

    // ---------------------------------------
    // Default attributes.
    // ---------------------------------------
    $args['attributes'] = array_merge([
        'autocomplete' => 'off',
        'method' => 'get',
        'action' => esc_url(home_url('/')),
        'role' => 'search',
    ], $args['attributes']);

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
