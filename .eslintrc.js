module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-use-di`
  extends: ["use-di"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
