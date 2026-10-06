export const WIZARD_SCROLL_OPTIONS = {
  behavior: "smooth",
  block: "start",
} as const;

type Scrollable = {
  scrollIntoView: (options?: ScrollIntoViewOptions) => void;
};

type Focusable = {
  focus: (options?: FocusOptions) => void;
};

export function scrollWizardIntoView(element: Scrollable | null): boolean {
  if (!element) return false;
  element.scrollIntoView(WIZARD_SCROLL_OPTIONS);
  return true;
}

export function revealWizardStep(
  wizard: Scrollable | null,
  heading: Focusable | null,
): boolean {
  heading?.focus({ preventScroll: true });
  return scrollWizardIntoView(wizard);
}

