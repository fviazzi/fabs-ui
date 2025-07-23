export const AVATAR_VARIANTS = {
  size: {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  },
  variant: {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  }
} as const;

export const DEFAULT_AVATAR_VARIANTS = {
  size: "default",
  variant: "default"
} as const;
