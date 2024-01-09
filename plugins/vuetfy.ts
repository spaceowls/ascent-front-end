import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import 'vuetify/styles'
import '@/assets/scss/style.scss';
import { defineNuxtPlugin } from '@nuxtjs/composition-api';


export default defineNuxtPlugin((nuxtApp) => {

    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: "light",
        },
    });
    nuxtApp.vueApp.use(vuetify);
});

