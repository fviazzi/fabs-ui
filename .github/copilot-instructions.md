# Project Overview

This project is a turborepo project containing multiple applications and shared libraries. It is designed to be modular and scalable, allowing for easy development and maintenance of various components.

## Folder Structure

- `/apps`: Contains the source code for the frontend applications.
- `/packages`: Contains the source code for the shared packages.
- `/packages/ds`: Contains the source code for the design system.
- `/packages/infrastructure`: Contains the source code for the infrastructure, such as eslint and TS configurations.

## Libraries and Frameworks

- React and Tailwind CSS with shadcn for the frontend.
- Vite for the build tool.
- Turborepo for monorepo management.
- ESLint for linting JavaScript and TypeScript code.
- Vitest for testing.
- TypeScript for type safety.
- We import UI components from the design system in the frontend applications using "@fabs-ui/ds".

## Coding Standards

- Follow eslint.config.mjs for JavaScript and TypeScript linting.

## Design system

- The design system is a package that provides reusable UI components and styles.
- It is built with Tailwind CSS and shadcn.
- The design system is imported into frontend applications using "@fabs-ui/ds".
- Each components should have a storybook story for documentation and testing purposes.
