<?php if (!empty($args['items'])) { ?>
    <section <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
        <div class="cards__inner">
            <?php if (!empty($args['heading']) || !empty($args['subheading'])) { ?>
                <div class="cards__header">
                    <?php if (!empty($args['heading'])) { ?>
                        <?= \Granola\Component::get('heading', [
                            'heading' => $args['heading'],
                            'id' => $args['heading_id'] ?? null,
                            'classes' => ['cards__heading'],
                        ]); ?>
                    <?php } ?>

                    <?php if (!empty($args['subheading'])) { ?>
                        <div class="cards__subheading">
                            <?= wp_kses_post($args['subheading']); ?>
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>

            <div class="cards__items">
                <?php foreach ($args['items'] as $key => $card) { ?>
                    <?= \Granola\Component::get('card', $card); ?>
                <?php } ?>
            </div>

            <?php if (!empty($args['button'])) { ?>
                <div class="cards__footer">
                    <div class="cards__more-link">
                        <?= \Granola\Component::get('link', $args['button']); ?>
                    </div>
                </div>
            <?php } ?>
    </section>
<?php } ?>
