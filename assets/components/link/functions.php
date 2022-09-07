<?php

namespace Granola\Components\Link;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'title'      => '',
        'url'        => '',
        'target'     => '',
        'attributes' => [
            'rel' => [],
        ],
        'classes'        => [],
        'prefix'         => '',
        'suffix'         => '',
        'content_filter' => 'wp_kses_post',
    ], $args);

    $args['content'] = $args['content'] ?? $args['title'];

    if (!empty($args['url'])) {
        $args['attributes']['href'] = esc_url($args['url']);
    }

    // Add target attribute...
    $args['attributes']['target'] = $args['target'];

    // ...and conditionally add appropriate rel attribute.
    if ($args['target'] === '_blank') {
        $args['attributes']['rel'][] = 'noopener';
    }

    if (empty($args['content_filter'])) {
        $args['content_filter'] = function ($content) {
            return $content;
        };
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
