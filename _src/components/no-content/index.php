<?php

if (!empty($args['content']['message'])) { ?>
    <section class="no-content">
        <p class="no-content__message">
            <?= wp_kses_post($args['content']['message']); ?>
        </p>
    </section>
<?php }
