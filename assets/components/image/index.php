<?php

if (!empty($args['output'])) {
    echo wp_kses_post($args['output']);
}
