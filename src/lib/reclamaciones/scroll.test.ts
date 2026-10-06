import { describe, expect, it, vi } from "vitest";
import {
  revealWizardStep,
  scrollWizardIntoView,
  WIZARD_SCROLL_OPTIONS,
} from "./scroll";

describe("scrollWizardIntoView", () => {
  it("does nothing when the element is missing", () => {
    expect(scrollWizardIntoView(null)).toBe(false);
  });

  it("scrolls the wizard to the start of the viewport", () => {
    const scrollIntoView = vi.fn();

    expect(scrollWizardIntoView({ scrollIntoView })).toBe(true);
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    expect(scrollIntoView).toHaveBeenCalledWith(WIZARD_SCROLL_OPTIONS);
  });
});

describe("revealWizardStep", () => {
  it("moves focus to the heading without scrolling it, then scrolls the wizard", () => {
    const scrollIntoView = vi.fn();
    const focus = vi.fn();

    expect(
      revealWizardStep({ scrollIntoView }, { focus }),
    ).toBe(true);
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
    expect(scrollIntoView).toHaveBeenCalledWith(WIZARD_SCROLL_OPTIONS);
    expect(focus.mock.invocationCallOrder[0]).toBeLessThan(
      scrollIntoView.mock.invocationCallOrder[0],
    );
  });

  it("still scrolls when there is no heading", () => {
    const scrollIntoView = vi.fn();

    expect(revealWizardStep({ scrollIntoView }, null)).toBe(true);
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });
});
