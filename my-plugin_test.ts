import { assert, assertEquals } from "jsr:@std/assert";
import * as plugin from "./my-plugin.ts";

Deno.test("my-plugin", () => {
  const diagnostics = Deno.lint.runPlugin(plugin, "main.ts", "const _a = 'a';");

  console.log(diagnostics);

  assertEquals(diagnostics.length, 1);
  const d = diagnostics[0];
  assertEquals(d.id, "my-plugin/my-rule");
  assertEquals(d.message, "should be _b");
  assert(typeof d.fix === "function");
});
