import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { postTweet } from "./twitter.ts";
Deno.test("send tweet", async () => {
  const result = await postTweet({
    status: "Hello World",
  });
});
