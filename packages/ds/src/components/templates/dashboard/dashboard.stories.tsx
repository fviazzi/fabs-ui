import type { Meta, StoryObj } from '@storybook/react-vite';
import { User, Bell, Settings, Menu, LogOut } from 'lucide-react';

import { Button } from '@/components/atoms/button/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar/avatar';
import { Badge } from '@/components/atoms/badge/badge';

import {
  Dashboard,
  DashboardHeader,
  DashboardSidebar,
  DashboardMain,
  DashboardSection,
  DashboardFooter,
} from './dashboard';

import { DASHBOARD_VARIANTS, DEFAULT_DASHBOARD_VARIANTS } from './dashboard.consts';

const meta = {
  title: 'Fabsui/Dashboard',
  component: (args) => (
    <div className="flex flex-col h-screen">
      <DashboardHeader>
        <div className="flex items-center gap-2">
          <Menu className="h-5 w-5" />
          <h1 className="font-bold">Fabs UI</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="h-5 w-5" />
          <Settings className="h-5 w-5" />
          <Avatar>
            <AvatarImage src="https://github.com/fviazzi.png" />
            <AvatarFallback>FV</AvatarFallback>
          </Avatar>
        </div>
      </DashboardHeader>
      <div className="flex-1 p-4 overflow-auto">
        <Dashboard {...args}>
          {args.layout === 'sidebarLeft' || args.layout === 'threeColumn' ? (
            <DashboardSidebar>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Projects
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Team
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Reports
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Settings
                  </Button>
                </div>
              </div>
            </DashboardSidebar>
          ) : null}

          <DashboardMain>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <Button>New Project</Button>
            </div>

            {args.layout === 'default' ? (
              <>
                <DashboardSection className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg">Total Users</h3>
                    <p className="text-3xl font-bold">1,234</p>
                  </div>
                  <User className="h-8 w-8 text-muted-foreground" />
                </DashboardSection>
                <DashboardSection className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg">Revenue</h3>
                    <p className="text-3xl font-bold">$45,231</p>
                  </div>
                  <User className="h-8 w-8 text-muted-foreground" />
                </DashboardSection>
                <DashboardSection className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg">Active Projects</h3>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <User className="h-8 w-8 text-muted-foreground" />
                </DashboardSection>
                <DashboardSection className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg">Completion Rate</h3>
                    <p className="text-3xl font-bold">87%</p>
                  </div>
                  <User className="h-8 w-8 text-muted-foreground" />
                </DashboardSection>
              </>
            ) : (
              <>
                <DashboardSection>
                  <h3 className="font-medium text-lg mb-4">Recent Projects</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Website Redesign</p>
                        <p className="text-sm text-muted-foreground">Updated 2 days ago</p>
                      </div>
                      <Badge>In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Mobile App</p>
                        <p className="text-sm text-muted-foreground">Updated 5 days ago</p>
                      </div>
                      <Badge variant="success">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Marketing Campaign</p>
                        <p className="text-sm text-muted-foreground">Updated 1 week ago</p>
                      </div>
                      <Badge variant="warning">On Hold</Badge>
                    </div>
                  </div>
                </DashboardSection>

                <DashboardSection>
                  <h3 className="font-medium text-lg mb-4">Team Performance</h3>
                  <div className="h-40 flex items-center justify-center border rounded-md bg-muted/50">
                    [Chart Component Placeholder]
                  </div>
                </DashboardSection>
              </>
            )}
          </DashboardMain>

          {args.layout === 'sidebarRight' || args.layout === 'threeColumn' ? (
            <DashboardSidebar>
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">John Doe</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Commented on "Website Redesign"</p>
                  <p className="text-xs text-muted-foreground">10 minutes ago</p>
                </div>
                <div className="border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">Alice Smith</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Created a new task</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            </DashboardSidebar>
          ) : null}
        </Dashboard>
      </div>
      <DashboardFooter>
        <p>© 2025 Fabs UI. All rights reserved.</p>
      </DashboardFooter>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: Object.keys(DASHBOARD_VARIANTS.layout),
    },
  },
  args: {
    ...DEFAULT_DASHBOARD_VARIANTS,
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_DASHBOARD_VARIANTS,
};

export const WithLeftSidebar: Story = {
  args: {
    layout: 'sidebarLeft',
  },
};

export const WithRightSidebar: Story = {
  args: {
    layout: 'sidebarRight',
  },
};

export const ThreeColumn: Story = {
  args: {
    layout: 'threeColumn',
  },
};
