<?php

namespace Granola\Components\GravityForms;

// This prevents the <head> GF hooks script being output on pages it's not needed
// No official documentation for this yet but it's there!
\add_filter('gform_force_hooks_js_output', '__return_false');

// Most GF scripts have been moved to the footer since 2.5, but this catches some remaining ones
// This includes jQuery
// https://docs.gravityforms.com/gform_enqueue_scripts/
\add_filter('gform_enqueue_scripts', __NAMESPACE__ . '\\moveScriptsToFooter');

// We don't need the default theme CSS
// https://docs.gravityforms.com/gform_disable_form_theme_css/
\add_filter('gform_disable_form_theme_css', '__return_true');

// The default GF initial settings aren't what we tend to use
\add_filter('gform_form_settings_initial_values', __NAMESPACE__ . '\\setInitialSettings', 10, 1);

// It's useful to sanitize the confirmation message which can be set via the CMS (uses wp_kses_post)
// https://docs.gravityforms.com/gform_sanitize_confirmation_message/
\add_filter('gform_sanitize_confirmation_message', '__return_true');

// As a submission will have just happened, it makes sense to focus people on the confirmation
// https://docs.gravityforms.com/gform_confirmation_anchor/
\add_filter('gform_confirmation_anchor', '__return_true');

// Override the AJAX spinner URL
// (which appears next to the submit button on AJAX) submission
// \add_filter('gform_ajax_spinner_url', __NAMESPACE__ . '\\spinnerURL', 10);
