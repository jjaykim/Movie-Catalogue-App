module.exports =
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-max-props-per-line": [
      2,
      {
        "maximum": 1,
        "when": "multiline"
      }
    ],
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "info",
          "group",
          "groupEnd",
          "error",
          "groupCollapsed"
        ]
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": [
          "builtin"
        ]
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "import/no-duplicates": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "object": false
        }
      }
    ],
  }
}