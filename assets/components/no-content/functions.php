<?php

namespace Granola\Components\NoContent;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [],
        'content' => [
            'message' => __('No content found.', 'granola'),
        ],
    ], $args);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'no-content',
        'wp-block',
    ], $args['classes']);

    if (!empty($args['object'])) {
        $object = $args['object'];

        if ($object instanceof \WP_Query && $object->is_404()) {
            $args['content']['message'] = __("It seems we can't find what you're looking for.", 'granola');
        } elseif ($object instanceof \WP_Query && $object->is_search()) {
            $args['content']['message'] = __(
                'Sorry, but nothing matched your search terms. Please try again with some different keywords.',
                'granola'
            );
        }
    } elseif (is_admin()) {
        $args['content']['message'] = __('Items cannot be displayed in the editor.', 'granola');
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
