const ikotaMantine = require("@ikota/mantine");

/**
 * @type {import('ikota').IkotaConfig}
 */
module.exports = {
  componentPath: "components",
  useTypescript: true,
  addConfigFile: true,
  addIndexFile: true,
  preprocessor: "mantine",
  useLambdaSimplifier: false,
  trailingSpace: true,
  plugins: [ikotaMantine],
  other: {
    styleProps: true
  }
}