import { createApp } from 'vue';
import App from './App.vue';

import { create, C } from './combo-ui';
import './combo-ui/index.css'

const app = createApp(App);
const combo = create(C.All);
// const combo = create([C.Button, C.Tag]);

app.use(combo);
app.mount('#app');

if (import.meta.env.DEV) console.info('now app in', import.meta.env.MODE);
