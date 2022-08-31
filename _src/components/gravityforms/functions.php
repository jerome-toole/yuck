<?php

namespace Granola\Components\GravityForms;

function moveScriptsToFooter(): void
{
    \wp_script_add_data('gform_gravityforms', 'group', 1);
    \wp_script_add_data('gform_json', 'group', 1);
}

function setInitialSettings($initial_values): array
{
    $initial_values['labelPlacement'] = 'top_label';
    $initial_values['descriptionPlacement'] = 'above';
    $initial_values['subLabelPlacement'] = 'above';
    $initial_values['validationSummary'] = true;
    $initial_values['enableHoneypot'] = true;
    $initial_values['enableAnimation'] = false;

    return $initial_values;
}

function spinnerURL(): string
{
    return  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
}
