const namingVariable = {
  selector: "variable",
  format: ["strictCamelCase", "UPPER_CASE"],
};

const namingVariableTsx = {
  selector: "variable",
  format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
};

/** @type {*} */
const naming = [
  {
    selector: "default",
    format: ["strictCamelCase"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid",
  },
  namingVariable,
  {
    selector: "parameter",
    format: ["strictCamelCase"],
    leadingUnderscore: "allow",
  },
  {
    selector: "typeLike",
    format: ["StrictPascalCase"],
  },
];

module.exports = {
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["private-constructors"] },
    ],
    "prefer-arrow-callback": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": [2, ...naming],
  },
  overrides: [
    {
      files: ["[A-Z]*.tsx"],
      rules: {
        "@typescript-eslint/naming-convention": [
          2,
          ...naming
            .concat({
              selector: "function",
              format: ["strictCamelCase", "StrictPascalCase"],
              leadingUnderscore: "allow",
            })
            .filter(({ selector }) => selector !== "variable")
            .concat(namingVariableTsx),
        ],
      },
    },
  ],
};
