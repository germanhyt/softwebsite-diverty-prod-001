import { describe, expect, it } from "vitest";
import { getResendRuntimeConfig } from "./env";

describe("getResendRuntimeConfig", () => {
  it("returns null when either value is missing", () => {
    expect(getResendRuntimeConfig({})).toBeNull();
    expect(
      getResendRuntimeConfig({ RESEND_API_KEY: "re_test" }),
    ).toBeNull();
    expect(
      getResendRuntimeConfig({ RESEND_FROM: "Diverty <a@b.com>" }),
    ).toBeNull();
  });

  it("returns trimmed values when both are present", () => {
    expect(
      getResendRuntimeConfig({
        RESEND_API_KEY: " re_test ",
        RESEND_FROM: ' "Diverty <reclamaciones@diverty.pe>" ',
      }),
    ).toEqual({
      apiKey: "re_test",
      from: "Diverty <reclamaciones@diverty.pe>",
    });
  });
});
