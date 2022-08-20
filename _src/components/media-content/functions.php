<?php

namespace Granola\Components\MediaContent;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [],
        'heading' => '',
        'subheading' => '',
        'content' => '',
        'video' => '',
        'image' => '',
        'media_type' => 'image',
        'media_side' => 'left',
        'image' => [],
        'reverse' => false,
        'media' => '',
    ], $args);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'media-content',
        'wp-block',
    ], $args['classes']);

    $args['classes'][] = 'media-content--' . $args['media_side'];
    $args['classes'][] = 'media-content--media-type--' . $args['media_type'];

    if (!empty($args['button_1'])) {
        $args['button_1']['classes'] = [
            'g-button',
        ];
    }

    // -------------------------------------------------------------------------
    // Set image args if one exists.
    // -------------------------------------------------------------------------
    if (!empty($args['image'])) {
        $args['image']['size'] = 'super';
        $args['image']['sizes'] = '(max-width: 768px) 100vw, 50vw';
    }

    // -------------------------------------------------------------------------
    // Set video args if one exists.
    // -------------------------------------------------------------------------
    if (!empty($args['video'])) {
        $args['video'] = [
            'video' => $args['video'],
            'image' => $args['image'],
        ];
    }

    // -------------------------------------------------------------------------
    // Set media args as necessary.
    // -------------------------------------------------------------------------
    $type = $args['media_type'];
    if (!empty($type) && !empty($args[$type])) {
        $args['media'] = $args[$type];
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
