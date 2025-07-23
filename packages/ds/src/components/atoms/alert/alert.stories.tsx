import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from './alert';

import { ALERT_VARIANTS, DEFAULT_ALERT_VARIANTS } from './alert.consts';

const meta = {
  title: 'Fabsui/Alert',
  component: (args) => (
    <Alert {...args}>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        This is an alert description that provides more information.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(ALERT_VARIANTS.variant),
    },
  },
  args: {
    ...DEFAULT_ALERT_VARIANTS,
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_ALERT_VARIANTS,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was an error processing your request. Please try again later.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your data has been successfully saved to our servers.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your account is approaching its storage limit. Consider upgrading.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoAlert: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        A new software update is available. Refresh the page to apply it.
      </AlertDescription>
    </Alert>
  ),
};
