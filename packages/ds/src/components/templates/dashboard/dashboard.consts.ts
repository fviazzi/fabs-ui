export const DASHBOARD_VARIANTS = {
  layout: {
    default: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
    sidebarLeft: "grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4",
    sidebarRight: "grid grid-cols-1 md:grid-cols-[1fr_240px] gap-4",
    threeColumn: "grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-4",
  },
} as const;

export const DEFAULT_DASHBOARD_VARIANTS = {
  layout: "default",
} as const;
