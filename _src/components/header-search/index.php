<form <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
    <label class="header-search__inner" for="<?= esc_attr("header-search-{$args['id']}"); ?>">
        <input
            id="<?= esc_attr("header-search-{$args['id']}"); ?>"
            class="header-search__input"
            type="search"
            name="s"
            aria-label="<?= esc_attr__('Search', 'granola'); ?>"
            placeholder="<?= esc_attr__('Search...', 'granola'); ?>"
            required
        >

        <button class="header-search__submit" type="submit">
            <span class="screen-reader-text">
                <?= esc_html__('Submit search form', 'granola'); ?>
            </span>
        </button>
    </label>
</form>
