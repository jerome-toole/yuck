<?php

namespace Granola\Components\VideoItem;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [],
        'heading' => '',
        'content' => '',
        'video' => '',
    ], $args);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'video-item',
    ], $args['classes']);

    if (!empty($args['image'])) {
        $args['image']['size'] = 'large';
    }

    if (!empty($args['video'])) {
        // Use preg_match to find iframe src.
        preg_match('/src="(.+?)"/', $args['video'], $matches);
        $src = $matches[1];

        // Add extra parameters to src and replace HTML.
        $params = [
            'autoplay' => 1,
            'modestbranding' => 1,
            'rel' => 0, // Whether to show videos from the same channel upon completion.
        ];

        $args['video'] = str_replace(
            $src,
            add_query_arg($params, $src),
            $args['video']
        );
    }

    $args['video'] = str_replace(' src=', ' data-src=', $args['video']);

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
