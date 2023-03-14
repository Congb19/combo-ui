import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   target: 'modules',
  //   lib: {
  //     entry: 'src/combo-ui/index.ts',
  //     name: 'combo-ui',
  //     fileName: 'combo-ui',
  //     formats: ['es']
  //   },
  // },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  server: {
    port: 3334,
  },
});
