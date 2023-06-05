import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

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
  // build: {
  //   //打包后文件目录
  //   outDir: 'es',
  //   //压缩
  //   minify: false,
  //   rollupOptions: {
  //     //忽略打包vue文件
  //     external: ['vue'],
  //     //input: ["index.ts"],
  //     output: {
  //       globals: {
  //         vue: 'Vue',
  //       },
  //       dir: 'dist',
  //     },
  //   },
  //   lib: {
  //     entry: './src/index.ts',
  //     name: 'combo-ui',
  //     fileName: 'combo-ui',
  //     formats: ['es', 'umd', 'cjs'],
  //   },
  // },
  build: {
    //打包文件目录
    outDir: 'es',
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['./src/index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: './dist/combo-ui/es',
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: './dist/combo-ui/lib',
        },
      ],
    },
    lib: {
      name: 'combo-ui',
      entry: './src/index.ts',
    },
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  server: {
    port: 3334,
  },
})
