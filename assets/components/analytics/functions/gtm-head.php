<?php

namespace Granola\Components\Analytics;

function gtmHead()
{
    if (empty($args['gtm_code'])) {
        return;
    }

    ob_start(); ?>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','<?= esc_js($args['gtm_code']); ?>');</script>
    <!-- End Google Tag Manager -->
    <?php

    return ob_get_clean();
}

