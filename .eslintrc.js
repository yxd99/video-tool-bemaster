module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  plugins: ["vuejs-accessibility"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vuejs-accessibility/alt-text": [
      "error",
      {
        elements: ["img", "object", "area", 'input[type="image"]'],
        img: ["Image"],
        object: ["Object"],
        area: ["Area"],
        'input[type="image"]': ["ImageInput"],
      },
    ],
    "vuejs-accessibility/form-control-has-label": [
      "error",
      {
        labelComponents: ["CustomLabel"],
        controlComponents: ["CustomInput"],
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};