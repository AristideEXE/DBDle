/* eslint-env node */
/* eslint import/no-commonjs: off */
module.exports = {
  contextSeparator: "_",
  createOldCatalogs: true,
  defaultNamespace: "translation",
  defaultValue: (locale, namespace, key) => key,
  locales: ["fr", "en"],
  output: "src/locales/$LOCALE/$NAMESPACE.json",
  sort: true,
};
