<?php

namespace Granola\Components\Burger;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'aria-label' => '',
        'aria-controls' => '',
        'aria-expanded' => '',
        'classes' => [],
        'attributes' => [],
    ], $args);

    // ---------------------------------------
    // Default attributes.
    // ---------------------------------------
    $args['attributes'] = array_merge([
        'type' => 'button',
    ], $args['attributes']);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'burger',
    ], $args['classes']);

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
