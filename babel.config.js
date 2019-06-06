/* eslint-disable no-ternary */

module.exports = api => {
  const plugins = ["@babel/plugin-transform-flow-strip-types"]

  const presets = ["@babel/env", "@babel/react"]

  api.cache(true)

  return { plugins, presets }
}
