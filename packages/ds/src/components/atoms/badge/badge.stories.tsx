import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './badge';

import { BADGE_VARIANTS, DEFAULT_BADGE_VARIANTS } from './badge.consts';

const meta = {
  title: 'Fabsui/Badge',
  component: (args) => <Badge {...args}>Badge</Badge>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.keys(BADGE_VARIANTS.size),
    },
    variant: {
      control: { type: 'select' },
      options: Object.keys(BADGE_VARIANTS.variant),
    },
  },
  args: {
    ...DEFAULT_BADGE_VARIANTS,
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: DEFAULT_BADGE_VARIANTS,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
