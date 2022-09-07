<?php

namespace Granola\Components\Image;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'id'         => null,
        'title'      => '',
        'alt'        => '',
        'size'       => 'medium_large',
        'attributes' => [],
    ], $args);

    if (!empty($args['ID'])) {
        $args['id'] = $args['ID'];
    }

    if (!empty($args['sizes']) && !is_array($args['sizes'])) {
        $args['attributes']['sizes'] = $args['sizes'];
    }

    if (!empty($args['id'])) {
        $args['output'] = wp_get_attachment_image(
            $args['id'],
            $args['size'],
            false,
            $args['attributes']
        );
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
