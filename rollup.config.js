import typescript from "@rollup/plugin-typescript";
// import babel from '@rollup/plugin-babel';
import vuePlugin from "rollup-plugin-vue";
// import jsx from 'acorn-jsx';

export default {
  input: "./src/index.ts",
  plugins: [
    typescript({
      lib: ["es5", "es6", "dom"],
      target: "es5", // 输出目标
      noEmitOnError: true, // 运行时是否验证ts错误
    }),
    vuePlugin(),
    // babel({ babelHelpers: "bundled", extensions: ['.ts', '.js', '.tsx'] })
  ],
  // acornInjectPlugins: [jsx()],
  output: [
    {
      dir: "./dist",
      name: "combo-ui",
      format: "es",  
      file: "./dist/combo-ui.js",
      sourcemap: false
    },
  ],
};
