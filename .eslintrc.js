module.exports = {
  "extends": ["eslint:recommended", "google"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    }
  },
  "plugins": [
    "modules"
  ],
  "rules": {
    "indent": [2, 2],
    "no-tabs": 0,
    "comma-dangle": ["error", {
    "arrays": "only-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "ignore"
    }],
    "blocks": "always",
    "classes": "always",
    "no-extra-boolean-cast": 1,
    "no-useless-rename": ["error", {
      "ignoreDestructuring": true,
      "ignoreImport": true,
      "ignoreExport": true
    }],
    "linebreak-style": 0,
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": false,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false
      }
    }],
    "space-before-function-paren": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { "code": 120 }],
  }
};