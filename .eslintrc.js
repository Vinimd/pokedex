module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "no-unused-expressions": 0,
    "import/extensions": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "no-plusplus": 0,
    "no-console": 0,
    eqeqeq: 0,
  },
};
