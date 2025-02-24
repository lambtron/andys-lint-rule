export default {
  name: "andys-lint-plugin",
  rules: {
    "andys-lint-rule": {
      create(context) {
        return {
          VariableDeclarator(node) {
            if (node.id.type === "Identifier" && node.id.name !== "andy") {
              context.report({
                node,
                message: "Your variable is not named 'andy'.",
              });
            }
          },
        };
      },
    },
  },
} satisfies Deno.lint.Plugin;
