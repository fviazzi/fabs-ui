# Fabs-ui

Scalable, reusable design system for multi-app use (Vite + Next.js compatible)

## Components

### Atoms
- **Button**: Versatile button component with multiple variants and sizes
- **Badge**: Used for showing status, counts, or small pieces of information
- **Alert**: Display important messages to users with various severity levels
- **Avatar**: User or entity representation with image and fallback support

### Molecules
- **Card**: Container for displaying content in a distinct way
- **Dropdown Menu**: Interactive menu that can be toggled to show or hide a list of options

### Organisms
- **Dialog**: Modal component for displaying content that requires user interaction
- **Accordion**: Collapsible content panels for presenting information in a limited space

### Templates
- **Page Layout**: Base layout structures for building pages with consistent spacing and organization
- **Dashboard**: Complete dashboard layout with header, sidebar, and main content areas

## Usage

```jsx
import { Button, Card, CardContent } from '@fabs-ui/ds';
import '@fabs-ui/ds/css';

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```