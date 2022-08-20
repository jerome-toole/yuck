<?php

namespace Granola\Components\CookieNotice;

function filterArgs(array $args): array
{
    // ---------------------------------------
    // Default arguments.
    // ---------------------------------------
    $args = array_merge([
        'classes' => [],
        'attributes' => [],
        'content' => '',
        'accept_button_text' => __('Accept', 'granola'),
        'accept_button_text_additional_context' => __('site cookies', 'granola'),
        'reject_button_text' => __('Reject', 'granola'),
        'reject_button_text_additional_context' => __('site cookies', 'granola'),
    ], $args);

    // ---------------------------------------
    // Default attributes.
    // ---------------------------------------
    $args['attributes'] = array_merge([
        'id' => 'site-cookie-notice',
        'aria-hidden' => 'true',
    ], $args['attributes']);

    // ---------------------------------------
    // Required classes.
    // ---------------------------------------
    $args['classes'] = array_merge([
        'cookie-notice',
    ], $args['classes']);

    if ($accept_button_text = get_field('cookie_notice_accept_button_text', 'option')) {
        $args['accept_button_text'] = $accept_button_text;
    }

    if (
        $accept_button_text_additional_context = get_field(
            'cookie_notice_accept_button_text_additional_context',
            'option'
        )
    ) {
        $args['accept_button_text_additional_context'] = $accept_button_text_additional_context;
    }

    if ($reject_button_text = get_field('cookie_notice_reject_button_text', 'option')) {
        $args['reject_button_text'] = $reject_button_text;
    }

    if (
        $reject_button_text_additional_context = get_field(
            'cookie_notice_reject_button_text_additional_context',
            'option'
        )
    ) {
        $args['reject_button_text_additional_context'] = $reject_button_text_additional_context;
    }

    $content = get_field('cookie_notice_text', 'option');
    if (!empty($content)) {
        $args['content'] = $content;
    } elseif (!empty(get_privacy_policy_url())) {
        $args['content'] = sprintf(
            __('We use cookies. Read more about them in our %s', 'granola'),
            \Granola\Component::get('link', [
                'content' => _x('Privacy Policy', 'Cookie notice link text', 'granola'),
                'url'     => get_privacy_policy_url(),
            ])
        );
    }

    // -------------------------------------------------------------------------
    // Return the filtered args.
    // -------------------------------------------------------------------------
    return $args;
}
