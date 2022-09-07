<?php

namespace Granola\Components\SiteFooter;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [
            'site-footer',
        ],
        'background_color' => 'brand-2',
    ], $args);

    if (have_rows('footer_images', 'option')) {
        $args['content']['images'] = [];

        while (have_rows('footer_images', 'options')) {
            the_row();

            if (!empty(get_sub_field('image'))) {
                $image = get_sub_field('image');
                $image['size'] = 'medium';
            }

            if (!empty($image)) {
                $args['content']['images'][] = [
                    'image' => $image ?? null,
                    'link' => get_sub_field('link') ?? null,
                ];
            }
        }
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
