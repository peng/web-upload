import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

const format = ["amd", "cjs", "iife", "esm", "umd", "system"];

const configs = [];
format.forEach(item => {
  const proConfig = {
    input: "./build/js/index.js",
    output: {
      name: "index",
      file: "./build/dist/index." + item + ".min.js",
      format: item
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      }),
      terser()
    ]
  };
  configs.push(proConfig);
});

export default configs;
