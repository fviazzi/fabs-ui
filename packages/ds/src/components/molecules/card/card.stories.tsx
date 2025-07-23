import type { Meta, StoryObj } from '@storybook/react-vite';

import { 
  Card, 
  CardHeader,
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './card';

import { Button } from '@/components/atoms/button/button';
import { CARD_VARIANTS, DEFAULT_CARD_VARIANTS } from './card.consts';

const meta = {
  title: 'Fabsui/Card',
  component: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. You can add any content you want here.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(CARD_VARIANTS.variant),
    },
  },
  args: {
    ...DEFAULT_CARD_VARIANTS,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CARD_VARIANTS,
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const NoFooter: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card without footer example</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card doesn't have a footer component. The content can extend all the way to the bottom of the card.</p>
      </CardContent>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardContent className="pt-6">
        <p>This is a simple card with only content and no header or footer.</p>
      </CardContent>
    </Card>
  ),
};
