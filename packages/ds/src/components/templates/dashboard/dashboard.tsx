import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { DASHBOARD_VARIANTS, DEFAULT_DASHBOARD_VARIANTS } from "./dashboard.consts"

import { cn } from "@/lib/utils"

const dashboardVariants = cva(
  "w-full",
  {
    variants: DASHBOARD_VARIANTS,
    defaultVariants: DEFAULT_DASHBOARD_VARIANTS,
  }
)

const Dashboard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof dashboardVariants>
>(({ className, layout, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(dashboardVariants({ layout }), className)}
      {...props}
    />
  )
})
Dashboard.displayName = "Dashboard"

const DashboardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "bg-background px-4 py-3 flex items-center justify-between border-b",
      className
    )}
    {...props}
  />
))
DashboardHeader.displayName = "DashboardHeader"

const DashboardSidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn(
      "bg-background border rounded-lg p-4 h-[calc(100vh-7rem)] overflow-auto",
      className
    )}
    {...props}
  />
))
DashboardSidebar.displayName = "DashboardSidebar"

const DashboardMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn("space-y-4", className)}
    {...props}
  />
))
DashboardMain.displayName = "DashboardMain"

const DashboardSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("bg-background border rounded-lg p-4", className)}
    {...props}
  />
))
DashboardSection.displayName = "DashboardSection"

const DashboardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn(
      "bg-background px-4 py-3 text-center text-sm text-muted-foreground border-t",
      className
    )}
    {...props}
  />
))
DashboardFooter.displayName = "DashboardFooter"

export { 
  Dashboard, 
  DashboardHeader, 
  DashboardSidebar, 
  DashboardMain, 
  DashboardSection,
  DashboardFooter,
  dashboardVariants 
}
