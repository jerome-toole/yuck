<?php

/**
 * Registers an ACF block for this component. Autoloaded by Granola via the `acf/init` hook.
 *
 * It is important that this file remain free from HTML and is merely a mechanism for:
 * - Registering a block.
 * - Retrieving and processing block fields in the required format.
 * - Calling \Granola\Component::get in the render callback to output the markup.
 *
 * @see: /granola/Theme/Plugins/ACF.php
 * @link: https://www.advancedcustomfields.com/resources/acf_register_block_type/
 */

acf_register_block_type([
    'name' => 'accordion', // Name/key, alphanumeric characters and dashes only.
    'title' =>  'Accordion', // Label in block editor.
    'description' => 'An accordion block', // A short description.
    'category' => 'granola-blocks', // Core: common | formatting | layout | widgets | embed.
    'icon' => 'arrow-down-alt2', // https://developer.wordpress.org/resource/dashicons/

    // Optional keywords to help users search for the block
    // 'keywords' => [
    //     'quote',
    //     'mention',
    //     'cite',
    // ],

    // The post types that can use this block.
    // 'post_types' => [
    //     'post',
    //     'page',
    // ],

    'mode' => 'auto', // edit | preview | auto.
    // 'align' => 'wide', // Default block alignment: wide | full | center | left | right.

    // An array of block features to support.
    'supports' => [
        'align' => false, // Block alignment choices. 'false' to hide all.
        // 'align_text' => true,
        // 'align_content' => 'matrix',
        'color' => [
            // 'background' => false,
            'text' => false,
            'gradients' => false
            // 'link' => false,
        ],
        // 'multiple' => false, // Allow multiple instances of this block in one post. Default: true.
    ],

    // Handle rendering the block
    'render_callback' => function ($block, $content, $is_preview, $post_id) {
        $args = \Granola\Partial::generateArgsFromBlock($block, get_fields());

        echo \Granola\Component::get('accordion', $args);
    }
]);
