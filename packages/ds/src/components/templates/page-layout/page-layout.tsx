import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { PAGE_LAYOUT_VARIANTS, DEFAULT_PAGE_LAYOUT_VARIANTS } from "./page-layout.consts"

import { cn } from "@/lib/utils"

const pageLayoutVariants = cva(
  "w-full mx-auto px-4 md:px-6 py-6",
  {
    variants: PAGE_LAYOUT_VARIANTS,
    defaultVariants: DEFAULT_PAGE_LAYOUT_VARIANTS,
  }
)

const PageLayout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof pageLayoutVariants> & {
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" 
  }
>(({ className, variant, maxWidth = "2xl", ...props }, ref) => {
  // Map maxWidth to tailwind classes
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "full": "max-w-full",
  }

  return (
    <div
      ref={ref}
      className={cn(pageLayoutVariants({ variant }), maxWidthClasses[maxWidth], className)}
      {...props}
    />
  )
})
PageLayout.displayName = "PageLayout"

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-2 md:flex-row md:items-center md:justify-between pb-6 border-b",
      className
    )}
    {...props}
  />
))
PageHeader.displayName = "PageHeader"

const PageTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-3xl font-bold tracking-tight",
      className
    )}
    {...props}
  />
))
PageTitle.displayName = "PageTitle"

const PageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-muted-foreground",
      className
    )}
    {...props}
  />
))
PageDescription.displayName = "PageDescription"

const PageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1", className)}
    {...props}
  />
))
PageContent.displayName = "PageContent"

const PageSidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn(
      "shrink-0 border-r pr-4 md:pr-6",
      className
    )}
    {...props}
  />
))
PageSidebar.displayName = "PageSidebar"

export { 
  PageLayout, 
  PageHeader, 
  PageTitle, 
  PageDescription, 
  PageContent, 
  PageSidebar, 
  pageLayoutVariants 
}
