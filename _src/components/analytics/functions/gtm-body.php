<?php

namespace Granola\Components\Analytics;

function gtmBody()
{
    if (empty($args['gtm_code'])) {
        return;
    }

    ob_start(); ?>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?= esc_js($args['gtm_code']); ?>"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <?php

    return ob_get_clean();
}
