import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import { tooltip } from '@ionited/tooltip-vue';

const app = createApp(App);

app.use(router);
app.directive('tooltip', tooltip);

app.mount('#app');
