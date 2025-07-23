export const CARD_VARIANTS = {
  variant: {
    default: "bg-background border",
    elevated: "bg-background shadow-md hover:shadow-lg transition-shadow",
    outline: "border border-border bg-transparent",
  },
} as const;

export const DEFAULT_CARD_VARIANTS = {
  variant: "default",
} as const;
