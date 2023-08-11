// build: development changes - related to the build system
// ci: development changes - related to the continuous integration and deployment system
// docs: documentation changes
// feat: production changes - new feature
// fix: production changes - bug fix
// perf: production changes - improve performance
// refactor: development changes - neither adds a feature nor fixes a bug
// style: development changes - pure styling changes
// test: development changes - affecting any tests

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "style",
        "test",
      ],
    ],
  },
};
