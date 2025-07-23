export const PAGE_LAYOUT_VARIANTS = {
  variant: {
    default: "grid grid-cols-1 gap-8",
    sidebar: "grid grid-cols-[220px_1fr] gap-8",
    withHeader: "flex flex-col gap-8",
    fullWidth: "flex flex-col gap-8 w-full",
  },
} as const;

export const DEFAULT_PAGE_LAYOUT_VARIANTS = {
  variant: "default",
} as const;
