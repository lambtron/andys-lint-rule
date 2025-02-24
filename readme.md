# Andy's Lint Rule

This is Andy's lint rule, and besides from being a critical lint rule that you
must add to your `deno lint`, this serves as an example of how to create a lint
rule plugin, test it, and publish it to JSR.

## Creating a lint rule

Deno 2.2 introduces a new lint rule plugin system that allows you to extend the
functionality of `deno lint` with your own custom rules.

[Learn how to create a new lint rule in our documentation](https://docs.deno.com/runtime/reference/lint_plugins/).

## Publishing to JSR

1. Create a file (`mod.ts`) that exports your lint plugin.

2. Update your `deno.json`:

```
{
  "lint": {
    "plugins": ["./my-plugin.ts"]
  },
  "name": "@lambtron/andys-lint-rule",
  "version": "0.1.0",
  "license": "MIT",
  "exports": "./mod.ts"
}
```

3. Publish to JSR

```
deno publish
# or
npx jsr publish
```

## Testing

Run `deno test`.

You can modify the test in `my-plugin_test.ts`.
