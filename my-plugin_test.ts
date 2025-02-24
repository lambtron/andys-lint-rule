import { assert, assertEquals } from "jsr:@std/assert";
import plugin from "./my-plugin.ts";

Deno.test("my-plugin", () => {
  const diagnostics = Deno.lint.runPlugin(plugin, "main.ts", "const _a = 'a';");

  assertEquals(diagnostics.length, 1);
  const d = diagnostics[0];
  assertEquals(d.id, "andys-lint-plugin/variables-must-be-named-andy");
  assertEquals(d.message, "Your variable is not named 'andy'.");
  assertEquals(d.hint, "Use 'andy' instead.");
  assert(typeof d.fix === "object");
});
