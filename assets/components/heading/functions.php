<?php

namespace Granola\Components\Heading;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'el'         => 'h2',
        'heading'    => '',
        'id'         => null,
        'link'       => null,
        'attributes' => [],
        'classes'    => [],
    ], $args);

    // Wrap the heading content in a link if one is provided.
    if (!empty($args['link'])) {
        $args['heading'] = \Granola\Component::get('link', [
            'url' => $args['link'],
            'content' => $args['heading'],
        ]);
    }

    // Set 'content' arg after all 'heading' arg processing.
    $args['content'] = $args['heading'];

    if (!empty($args['id'])) {
        $args['attributes']['id'] = $args['id'];
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
