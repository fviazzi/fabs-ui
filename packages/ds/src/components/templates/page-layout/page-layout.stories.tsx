import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/atoms/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/molecules/card/card';

import {
  PageLayout,
  PageHeader,
  PageTitle,
  PageDescription,
  PageContent,
  PageSidebar,
} from './page-layout';

import { PAGE_LAYOUT_VARIANTS, DEFAULT_PAGE_LAYOUT_VARIANTS } from './page-layout.consts';

const meta = {
  title: 'Fabsui/PageLayout',
  component: (args) => (
    <PageLayout {...args}>
      <PageHeader>
        <div>
          <PageTitle>Dashboard</PageTitle>
          <PageDescription>Overview of your account activity and statistics.</PageDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export</Button>
          <Button>Add New</Button>
        </div>
      </PageHeader>
      <PageContent className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$45,231</p>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">2 completed this week</p>
          </CardContent>
        </Card>
      </PageContent>
    </PageLayout>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(PAGE_LAYOUT_VARIANTS.variant),
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
  args: {
    ...DEFAULT_PAGE_LAYOUT_VARIANTS,
    maxWidth: '2xl',
  },
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DEFAULT_PAGE_LAYOUT_VARIANTS,
  },
};

export const WithSidebar: Story = {
  args: {
    variant: 'sidebar',
  },
  render: (args) => (
    <PageLayout {...args}>
      <PageSidebar className="py-6">
        <nav className="space-y-2">
          <a href="#" className="block py-2 px-3 rounded-md bg-accent">Dashboard</a>
          <a href="#" className="block py-2 px-3 rounded-md hover:bg-accent">Projects</a>
          <a href="#" className="block py-2 px-3 rounded-md hover:bg-accent">Team</a>
          <a href="#" className="block py-2 px-3 rounded-md hover:bg-accent">Reports</a>
          <a href="#" className="block py-2 px-3 rounded-md hover:bg-accent">Settings</a>
        </nav>
      </PageSidebar>
      <div className="py-6">
        <PageHeader>
          <div>
            <PageTitle>Dashboard</PageTitle>
            <PageDescription>Overview of your account activity and statistics.</PageDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Export</Button>
            <Button>Add New</Button>
          </div>
        </PageHeader>
        <PageContent className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$45,231</p>
              <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            </CardContent>
          </Card>
        </PageContent>
      </div>
    </PageLayout>
  ),
};

export const FullWidth: Story = {
  args: {
    variant: 'fullWidth',
    maxWidth: 'full',
  },
};
