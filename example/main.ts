import { createApp } from 'vue'
import App from './App.vue'

// dev
import { create, C } from '../src'
// prod
// import { create, C } from '../dist/combo-ui/es/src/index.mjs'
// // import './index.css'

const app = createApp(App)
// const combo = create(C.All)
const combo = create([C.Button])
// const combo = create([C.Button, C.Tag])

app.use(combo)
app.mount('#app')

if (import.meta.env.DEV) console.info('now app in', import.meta.env.MODE)
