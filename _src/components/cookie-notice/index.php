<?php if (!empty($args['content'])) { ?>
    <div <?= \Granola\Helpers::buildAttributes($args['attributes']); ?>>
        <div class="cookie-notice__banner has-brand-1-background-color">
            <div class="cookie-notice__message">
                <?= wp_kses_post($args['content']); ?>
            </div>

            <div class="cookie-notice__actions">
                <ul class="cookie-notice__actions-list flex-list">
                    <li class="cookie-notice__action">
                        <button type="button" class="g-button cookie-notice__accept js-cookie-notice-accept">
                            <?= wp_kses_post($args['accept_button_text']); ?>
                            <span class="screen-reader-text">
                                <?= wp_kses_post($args['accept_button_text_additional_context']); ?>
                            </span>
                        </button>
                    </li>

                    <li class="cookie-notice__action">
                        <button type="button" class="g-button cookie-notice__reject js-cookie-notice-reject">
                            <?= wp_kses_post($args['reject_button_text']); ?>
                            <span class="screen-reader-text">
                                <?= wp_kses_post($args['reject_button_text_additional_context']); ?>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
<?php } ?>
