export const BADGE_VARIANTS = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-destructive text-white hover:bg-destructive/80",
    outline: "text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    success: "bg-success text-white hover:bg-success/80",
    warning: "bg-warning text-white hover:bg-warning/80",
  },
  size: {
    default: "px-2.5 py-0.5 text-xs",
    sm: "px-2 py-0.5 text-xs rounded-sm",
    lg: "px-3 py-1 text-sm",
  },
} as const;

export const DEFAULT_BADGE_VARIANTS = {
  variant: "default",
  size: "default",
} as const;
