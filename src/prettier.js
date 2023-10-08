const prettier = require("prettier");
const graphQLParser = require("prettier/parser-graphql");

exports.prettify = (code, plugin) => {
  switch (plugin) {
    case "graphql":
      return prettier.format(code, { parser: plugin, plugins: [graphQLParser] });
    default:
      return "Unknown plugin!";
  }
}