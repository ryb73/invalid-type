"use strict";

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  extends: [`@ryb73`],

  rules: {
    "@typescript-eslint/ban-ts-comment": `off`,
    "@typescript-eslint/ban-types": `off`,

    "no-labels": `off`,
    "no-unused-labels": `off`,
  },
};
