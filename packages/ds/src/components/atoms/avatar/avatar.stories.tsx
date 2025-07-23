import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

import { AVATAR_VARIANTS, DEFAULT_AVATAR_VARIANTS } from './avatar.consts';

const meta = {
  title: 'Fabsui/Avatar',
  component: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/fviazzi.png" alt="@fviazzi" />
      <AvatarFallback>FV</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.keys(AVATAR_VARIANTS.size),
    },
    variant: {
      control: { type: 'select' },
      options: Object.keys(AVATAR_VARIANTS.variant),
    },
  },
  args: {
    ...DEFAULT_AVATAR_VARIANTS,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_AVATAR_VARIANTS,
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
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

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>FV</AvatarFallback>
    </Avatar>
  ),
};
