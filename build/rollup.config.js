import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: 'src/entry.js', // Path relative to package.json
  output: {
      name: 'HeaderComponent',
      exports: 'named',
  },
  plugins: [
      commonjs(),
      vue({
          css: true, // Dynamically inject css as a <style> tag
          compileTemplate: true, // Explicitly convert template to render function
      }),
      buble(), // Transpile to ES5
  ],
};

  