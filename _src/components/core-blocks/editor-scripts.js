/**
 * Unregister various default styles for core blocks.
 */
wp.domReady(() => {
    wp.blocks.unregisterBlockStyle('core/button', 'default');
    wp.blocks.unregisterBlockStyle('core/button', 'fill');
    wp.blocks.unregisterBlockStyle('core/button', 'outline');
    wp.blocks.unregisterBlockStyle('core/button', 'squared');

    wp.blocks.unregisterBlockStyle('core/image', 'default');
    wp.blocks.unregisterBlockStyle('core/image', 'rounded');

    wp.blocks.unregisterBlockStyle('core/quote', 'default');
    wp.blocks.unregisterBlockStyle('core/quote', 'large');

    wp.blocks.unregisterBlockStyle('core/separator', 'default');
    wp.blocks.unregisterBlockStyle('core/separator', 'dots');
    wp.blocks.unregisterBlockStyle('core/separator', 'wide');

    wp.blocks.unregisterBlockStyle('core/table', 'default');
    wp.blocks.unregisterBlockStyle('core/table', 'stripes');
});
