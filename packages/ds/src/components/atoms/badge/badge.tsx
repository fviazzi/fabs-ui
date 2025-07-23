import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { BADGE_VARIANTS, DEFAULT_BADGE_VARIANTS } from "./badge.consts"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: BADGE_VARIANTS,
    defaultVariants: DEFAULT_BADGE_VARIANTS,
  }
)

function Badge({
  className,
  variant,
  size,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>) {
  return (
    <div 
      data-slot="badge" 
      className={cn(badgeVariants({ variant, size, className }))}
      {...props} 
    />
  )
}

export { Badge, badgeVariants }
