import babel from "rollup-plugin-babel"
import pkg from "./package.json"

const input = "src/index.js"
const plugins = [
  babel({ exclude: "**/node_modules/**" }),
]

const name = "ReactRouterScrollToTop"
const globals = {
  react: "React",
  "react-router-dom": "ReactRouterDom",
}
const external = Object.keys(globals)

export default [{
  external,
  input,
  output: { exports: "named", file: `dist/${pkg.name}.cjs.js`, format: "cjs" },
  plugins,
}, {
  external,
  input,
  output: { file: `dist/${pkg.name}.esm.js`, format: "esm" },
  plugins,
}, {
  external,
  input,
  output: { exports: "named", file: `dist/${pkg.name}.umd.js`,  format: "umd", globals, name },
  plugins,
}]
