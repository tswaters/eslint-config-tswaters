module.exports = {
  "env": {
    "browser": true
  },
  "rules": {
    "react/forbid-component-props": [0],
    "react/no-set-state": [0],
    "react/jsx-no-bind": [2, {"ignoreRefs": true}],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-sort-props": [0],
    "react/no-unused-prop-types": [2, {"skipShapeProps": true}],
    "react/sort-prop-types": [0]
  },
  "plugins": ["react"],
  "extends": ["plugin:react/recommended", "./index.js"]
}
