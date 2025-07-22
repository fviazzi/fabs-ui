import type { PlopTypes } from "@turbo/gen";
import path from "path";
import { execa } from 'execa';

type Answers = {
  location: string;
  platform: string;
  structure: string;
  ds: boolean;
  name: string;
  isAtomic?: boolean;
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("app", {
    description: "Generate a new application or package with customizable options",
    prompts: [
      {
        type: "list",
        name: "location",
        message: "Is it an application or a package?",
        choices: [
          { name: "Application (/apps)", value: "app" },
          { name: "Package (/packages)", value: "package" },
        ],
      },
      {
        type: "list",
        name: "platform",
        message: "What platform would you like to use?",
        choices: [
          { name: "React", value: "react" },
          { name: "Next.js", value: "next" },
        ],
      },
      {
        type: "confirm",
        name: "ds",
        message: "Do you want to include the design system?",
      },
      {
        type: "list",
        name: "structure",
        message: "What structure pattern would you like to use?",
        choices: [
          { name: "Feature-based", value: "feature" },
          { name: "Atomic Design", value: "atomic" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your application/package?",
        validate: (input: string) => {
          if (input.trim() === "") {
            return "Name is required";
          }
          // Only allow alphanumeric characters, hyphens, and underscores
          if (!/^[a-z0-9-_]+$/.test(input)) {
            return "Name can only contain lowercase alphanumeric characters, hyphens, and underscores";
          }
          return true;
        },
      },
    ],
    actions: function (data) {
      if (!data) return [];

      const { location, platform, structure, name } = data as Answers;

      // Define the destination directory based on the location choice
      const basePath = location === "app" ? "apps" : "packages";
      const destPath = path.join(basePath, name);

      // Path to templates relative to the generator config
      const appGeneratorPath = "app";
      const templatePath = path.join(appGeneratorPath, "templates");
      const platformTemplatePath = path.join(templatePath, "platform", platform);
      const structureTemplatePath = path.join(templatePath, "structure", structure);
      const utilsTemplatePath = path.join(templatePath, "utils");

      const actions: PlopTypes.ActionType[] = [
        (answers: Partial<Answers>) => {

          // Add a new property to the answers object
          answers.isAtomic = answers.structure === "atomic";
          return "Prepared structure flag";
        },

        // Copy platform-specific template files
        {
          type: "addMany",
          destination: `${destPath}/`,
          templateFiles: `${platformTemplatePath}/**/*`,
          base: platformTemplatePath,
          globOptions: {
            dot: true, // Include dotfiles
          },
          abortOnFail: true,
        },

        // Copy structure-specific template files
        {
          type: "addMany",
          destination: `${destPath}/src/`,
          templateFiles: `${structureTemplatePath}/**/*`,
          base: structureTemplatePath,
          globOptions: {
            dot: true,
          },
          abortOnFail: true,
        },

        // Copy utility files if they exist
        {
          type: "addMany",
          destination: `${destPath}/`,
          templateFiles: `${utilsTemplatePath}/**/*`,
          base: utilsTemplatePath,
          globOptions: {
            dot: true,
          },
          abortOnFail: false, // Don't fail if no util files exist
        },

        // Log success message
        {
          type: "append",
          path: `${destPath}/README.md`,
          template: `\n## Getting Started\n\n1. Run \`pnpm install\` (if not already done)\n2. Run \`pnpm dev\` to start the development server\n`,
          abortOnFail: false,
        },
        async () => {
          console.log(`\n📦 Installing dependencies in ${destPath}...\n`);

          try {
            // Change directory to the newly created package and run install
            await execa("pnpm", ["install"], {
              cwd: destPath,
              stdio: "inherit", // This will show the install output in your terminal
            });
            console.log(`\n✅ Dependencies installed for ${name}!\n`);
            return "Dependencies installed successfully.";
          } catch (error) {
            console.error(`\n❌ Failed to install dependencies for ${name}:`, error.message, "\n");
            throw new Error("Dependency installation failed.");
          }
        },
      ];

      return actions;
    },
  });
}
