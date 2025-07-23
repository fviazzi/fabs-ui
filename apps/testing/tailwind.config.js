/** @type {import('tailwindcss').Config} */
import dsConfig from '@fabs-ui/ds/tailwind.config';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include content from the design system
    "../../packages/ds/src/**/*.{js,ts,jsx,tsx}"
  ],
  // Use the same theme as your design system
  presets: [dsConfig]
};
