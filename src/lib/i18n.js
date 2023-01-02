import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";

i18next.init( {
    lng: 'en',
    resources: {
        en: {
            translation: {
                "key": "hello world"
            }
        }
    }
} );

export const i18n = createI18nStore( i18next );