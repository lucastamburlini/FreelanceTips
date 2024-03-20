import { test } from "@playwright/test";

(async () => {
  await test.run(["home.spec.ts"]);

  await test.run(["contact.spec.ts"]);
})();