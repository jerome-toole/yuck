<?php

namespace Granola\Components\SocialIcons;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [],
        'title' => '',
        'networks' => get_field('social_networks', 'option'),
        'show' => true,
    ], $args);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'social-icons',
    ], $args['classes']);

    if (!empty($args['networks']) && is_array($args['networks'])) {
        foreach ($args['networks'] as $key => $network) {
            $title = $args['networks'][$key]['network']['label'];

            // 'title' should be a formatted string with a network name placeholder.
            if (!empty($args['title']) && strpos($args['title'], '%s') !== false) {
                $title = sprintf(
                    $args['title'],
                    $title
                );
            }

            $args['networks'][$key]['title'] = $title;
        }
    }

    if (empty($args['networks'])) {
        $args['show'] = false;
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
