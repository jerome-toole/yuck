<section <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
    <div class="accordion__inner">
        <div class="accordion__header">
            <?php if (!empty($args['heading'])) { ?>
                <?= \Granola\Component::get('heading', [
                    'heading' => $args['heading'],
                    'id' => $args['heading_id'] ?? null,
                    'classes' => ['accordion__heading'],
                ]); ?>
            <?php } ?>
        </div>

        <?php if (!empty($args['accordion_items'])) { ?>
            <div class="accordion__items">
                <?php foreach ($args['accordion_items'] as $key => $item) { ?>
                    <div class="accordion__item reveal">
                        <button aria-expanded="false" class="accordion__item__header js-reveal-item">
                            <h4 class="accordion__item__heading">
                                <?= esc_html($item['title']) ?>
                            </h4>
                            <span class="accordion__item__button g-button g-button--icon g-button--square"><span>
                        </button>
                        <div class="accordion__item__panel reveal__content">
                            <div class="accordion__item__panel-inner">
                                <?= wp_kses_post($item['content']) ?>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>
</section>
