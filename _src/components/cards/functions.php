<?php

namespace Granola\Components\Cards;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'type' => 'default',
        'items' => [],
        'link' => null,
        'align' => 'full',
        'classes' => [],
        'columns' => '',
        'card_type' => '',
        'slider_on_mobile' => false,
    ], $args);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'cards',
        'wp-block',
        'animate',
    ], $args['classes']);

    if (!empty($args['card_source'])) {
        if ($args['card_source'] === 'custom') {
            if (!empty($args['custom_cards'])) {
                foreach ($args['custom_cards'] as $card) {
                    $args['items'][] = [
                        'content' => $card,
                    ];
                }
            }
        } else {
            if ($args['card_source'] === 'recent') {
                $query = [
                    'post_type' => $args['post_type'],
                    'posts_per_page' => $args['limit'],
                    'exclude' => get_the_ID(),
                    'no_found_rows' => true,
                ];

                if (!empty($args['tag'])) {
                    $query['tag__in'] = $args['tag'];
                }

                $query = new \WP_Query($query);
                $objects = $query->posts;
            } elseif ($args['card_source'] === 'selected') {
                $objects = get_field('selected');
            }

            if (!empty($objects)) {
                foreach ($objects as $key => $object) {
                    $args['items'][$key] = [
                        'object' => $object,
                    ];
                }
            }
        }
    }

    if (!empty($args['type'])) {
        if ($args['type'] === 'icons') {
            $args['card_type'] = 'icon';
        }
    }

    if (!empty($args['button'])) {
        $args['button']['classes'] = [
            'g-button',
        ];
    }

    if (!empty($args['items'])) {
        foreach ($args['items'] as $key => $card) {
            $args['items'][$key] = array_merge([
                'type' => $args['card_type'],
            ], $args['items'][$key]);

            if (!empty($args['card_background_color']) && $args['card_background_color'] !== 'default') {
                $args['items'][$key]['background'] = $args['card_background_color'];
            }

            if (!empty($args['card_image_fit']) && $args['card_image_fit'] !== 'default') {
                $args['items'][$key]['image_fit'] = $args['card_image_fit'];
            }
        }
    }

    if (!empty($args['columns']) && $args['columns'] !== 'default') {
        $args['classes'][] = 'cards--columns-' . $args['columns'];
    }

    if ($args['align'] !== 'full') {
        $args['slider_on_mobile'] = false;
    }

    $args['classes'][] = 'cards--type--' . $args['type'];

    $args['classes'][] = !empty($args['slider_on_mobile']) ? 'cards--slider-on-mobile' : null;

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
