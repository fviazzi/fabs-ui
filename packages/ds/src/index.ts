import './tailwind.css';

// Atoms
export { Button, buttonVariants } from "./components/atoms/button/button";
export { Badge, badgeVariants } from "./components/atoms/badge/badge";
export { Alert, AlertTitle, AlertDescription, alertVariants } from "./components/atoms/alert/alert";
export { Avatar, AvatarImage, AvatarFallback, avatarVariants } from "./components/atoms/avatar/avatar";

// Molecules
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  cardVariants 
} from "./components/molecules/card/card";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./components/molecules/dropdown-menu/dropdown-menu";

// Organisms
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/organisms/dialog/dialog";
export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "./components/organisms/accordion/accordion";

// Templates
export { 
  PageLayout, 
  PageHeader, 
  PageTitle, 
  PageDescription, 
  PageContent, 
  PageSidebar, 
  pageLayoutVariants 
} from "./components/templates/page-layout/page-layout";
export { 
  Dashboard, 
  DashboardHeader, 
  DashboardSidebar, 
  DashboardMain, 
  DashboardSection,
  DashboardFooter,
  dashboardVariants 
} from "./components/templates/dashboard/dashboard";

// Core
export { DsProvider } from "./core/DsProvider";

// Utils
export { cn } from "./lib/utils";