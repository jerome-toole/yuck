<?php

namespace Granola\Components\Analytics;

// Output the GTM code that appears in the <head>.
\add_action('wp_head', function (): void {
    echo gtmHead(get_field('gtm_code', 'option'));
});


// Output the GTM code that appears at the start of the <body>.
\add_action('wp_body_open', function (): void {
    echo gtmBody(get_field('gtm_code', 'option'));
});
