<?php

namespace Granola\Components\PageHeader;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [],
        'type' => '',
        'show' => true,
        'image-position' => 'background',
        'background' => 'brand-1',
        'attributes' => [],
        'content' => [],
    ], $args);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'page-header',
        'alignfull',
    ], $args['classes']);


    // Set up page header args for each type of view (singular posts, archive pages and terms)
    if (!empty($args['object'])) {
        $object = $args['object'];

        if ($object instanceof \WP_Term) {
            $args['content']['heading'] = $object->name;

            if ($object->taxonomy === 'category') {
                $post_type = \get_post_type_object('post');

                $args['content']['back-link'] = [
                    'url' => \get_post_type_archive_link('post'),
                    'title' => sprintf(__('Back to %s', 'granola'), $post_type->labels->name),
                ];
            }
        } elseif ($object instanceof \WP_Post_Type) {
            $heading = $object->label;

            $args['content'] = [
                'heading' => $heading,
            ];
        } elseif ($object instanceof \WP_Query && $object->is_404()) {
            $args['content'] = [
                'heading' => __('404', 'granola'),
            ];
        } elseif ($object instanceof \WP_Query && $object->is_search()) {
            $args['content'] = [
                'heading' => __('Search', 'granola'),
            ];

            if (!empty($object->query['s'])) {
                $args['content']['subheading'] = sprintf(
                    __("Showing results for '%s'", 'granola'),
                    $object->query['s']
                );
            }
        } elseif ($object instanceof \WP_User) {
            $heading = $object->data->display_name;

            $args['content'] = [
                'heading' => sprintf(
                    __('Posts by %s', 'granola'),
                    $heading
                ),
            ];
        }

        // If the content has a connected archive content page, set the object to that page
        if ($templatePage = \Granola\WordPress\TemplatePage::getTemplatePage($object)) {
            $object = $templatePage;
        }

        if ($object instanceof \WP_Post) {
            $post_type = \get_post_type_object($object->post_type);
            // -----------------------------------------------------------------
            // Handle filtering content from WordPress posts
            // -----------------------------------------------------------------

            if (!in_array($object->post_type, ['page', 'granola-template'])) {
                // Add a 'back to' link to the post type archive by default
                $args['content']['back-link'] = [
                    'url' => \get_post_type_archive_link($object->post_type),
                    'title' => sprintf(__('Back to %s', 'granola'), $post_type->labels->name),
                ];
            }

            $args['content']['heading'] = $object->post_title;

            $args['content']['image'] = \get_post_thumbnail_id($object);

            if ($primary_call_to_action = \get_field('primary_call_to_action', $object)) {
                $args['content']['buttons'][] = array_merge($primary_call_to_action, [
                    'classes' => [
                        'g-button',
                    ]
                ]);
            }

            if ($subheading = \get_field('subheading', $object)) {
                $args['content']['subheading'] = $subheading;
            }

            if ($overlay_opacity = \get_field('image_overlay_opacity', $object)) {
                $args['attributes']['style']['--page-header--overlay-opacity'] = "$overlay_opacity%";
            }

            if ($object->post_type === 'post') {
                $args['content']['meta'] = sprintf(
                    __('Published on %s ', 'granola'),
                    \get_the_date(\get_option('date_format'), $object->ID)
                );

                $args['content']['labels'] = \Theme\Meta\ObjectMeta::getObjectLabels($object->ID, [
                    'limit' => 3,
                    'taxonomies' => ['category']
                ]);

                $args['background'] = false;
                $args['image-position'] = 'inset';

                $args['type'] = 'article';

                if ($author_name = \get_the_author_meta('display_name', $object->post_author)) {
                    $args['content']['meta'] .= sprintf(
                        __('by %s ', 'granola'),
                        $author_name
                    );
                }
            } elseif ($object->post_type === 'page') {
                if (\is_front_page()) {
                    $args['classes'][] = 'page-header--home';
                }

                if ($parent = $object->post_parent) {
                    $args['content']['back-link'] = [
                        'url' => \get_permalink($parent),
                        'title' => sprintf(
                            __('Back to %s', 'granola'),
                            \get_the_title($parent)
                        ),
                    ];
                }
            }
        }

        unset($args['object']);
    }

    // -------------------------------------------------------------------------
    // Pull the image if one exists
    // -------------------------------------------------------------------------
    if (!empty($args['content']['image']) && is_int($args['content']['image'])) {
        if ($args['image-position'] === 'inset') {
            $args['content']['inset-image'] = \wp_get_attachment_image($args['content']['image'], 'medium');
        } else {
            $args['content']['background-image'] = \wp_get_attachment_image($args['content']['image'], 'granola_super');
        }
    }

    if (!empty($args['background']) && $args['background'] !== 'none') {
        $args['classes'][] = 'has-' . $args['background'] . '-background-color';
        $args['classes'][] = 'has-background';
    }

    if (!empty($args['type'])) {
        $args['classes'][] = 'page-header--type--' . $args['type'];
    }

    if (!empty($args['content']['background-image'])) {
        $args['classes'][] = 'has-background';
        $args['classes'][] = 'has-background-image';
    }

    if (!empty($args['inset-image'])) {
        $args['classes'][] = 'page-header--inset-image';
    }

    if (!empty($args['content']['back-link'])) {
        $args['content']['back-link']['prefix'] = '←';
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
