export const ALERT_VARIANTS = {
  variant: {
    default: "bg-background text-foreground",
    destructive:
      "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    success: 
      "border-success/50 text-success dark:border-success [&>svg]:text-success",
    warning:
      "border-warning/50 text-warning dark:border-warning [&>svg]:text-warning",
    info:
      "border-info/50 text-info dark:border-info [&>svg]:text-info",
  },
} as const;

export const DEFAULT_ALERT_VARIANTS = {
  variant: "default",
} as const;
