export default {
  name: "andys-lint-plugin",
  rules: {
    "variables-must-be-named-andy": {
      create(context) {
        return {
          VariableDeclarator(node) {
            if (node.id.type === "Identifier" && node.id.name !== "andy") {
              context.report({
                node,
                message: "Your variable is not named 'andy'.",
                hint: "Use 'andy' instead.",
                fix: (fixer) => fixer.replaceText(node, "andy")
              });
            }
          },
        };
      },
    },
  },
} satisfies Deno.lint.Plugin;
