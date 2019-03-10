module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    jest: true,
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
    DISQUS: true
  },
  extends: [
    "eslint:all",
    "plugin:react/all",
    "plugin:flowtype/recommended",
    "prettier"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "flowtype", "html", "prettier"],
  rules: {
    "no-unused-vars": 1,
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    semi: ["error", "never"],
    "react/jsx-uses-vars": 1,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-props-per-line": [2, { maximum: 1 }],
    "react/jsx-first-prop-new-line": 1,
    "react/no-danger": 0,
    "react/prefer-stateless-function": [1],
    "react/no-will-update-set-state": 0,
    "react/default-props-match-prop-types": 0,
    "react/no-redundant-should-component-update": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-closing-tag-location": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-undef": [1, { allowGlobals: true }],
    "react/prop-types": [0],
    "react/forbid-component-props": [0],
    "react/jsx-curly-brace-presence": [0],
    "no-console": 1,
    "no-inner-declarations": 1,
    "no-invalid-this": 0,
    indent: ["error", 2],
    "max-len": [0],
    "quote-props": 0,
    "object-curly-newline": 0,
    "dot-location": [1, "property"],
    "sort-vars": 0,
    "one-var": [1, "never"],
    "new-cap": [1, { capIsNew: false }],
    "class-methods-use-this": [
      1,
      {
        exceptMethods: [
          "render",
          "componentDidMount",
          "componentWillMount",
          "componentWillReceiveProps"
        ]
      }
    ]
  }
}
