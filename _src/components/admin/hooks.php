<?php

namespace Granola\Components\Admin;

\add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\enqueueAdminBarStyles');
\add_action('admin_enqueue_scripts', __NAMESPACE__ . '\\enqueueAdminBarStyles');
