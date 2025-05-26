# Project README

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Purpose and Contents of Main Files

Based on the project file list, here is an overview of the key directories and files:

- **`.idx`**: Contains configuration files related to the development environment, specifically `dev.nix`.
- **`.vscode`**: Contains configuration files for the VS Code editor, including `settings.json`.
- **`docs`**: Contains documentation files, such as the `blueprint.md`.
- **`src`**: This is the main source directory for the project.
    - **`ai`**: Likely contains files related to artificial intelligence or machine learning features, such as `dev.ts`, `genkit.ts`, and the `flows` subdirectory with `dynamic-faq.ts`.
    - **`app`**: Contains the main application pages and components, including error handling (`error.tsx`), favicon (`favicon.ico`), global styles (`globals.css`), layout (`layout.tsx`), the main page (`page.tsx`), and providers (`providers.tsx`). Subdirectories like `contact`, `faq`, `insights`, and `services` contain specific page components.
    - **`components`**: Contains reusable UI components.
        - **`forms`**: Contains form components like `contact-form.tsx` and `faq-form.tsx`.
        - **`layout`**: Contains layout components like `footer.tsx` and `header.tsx`.
        - **`ui`**: Contains various UI components likely built using a library like Shadcn UI, such as buttons, inputs, dialogs, etc.
    - **`hooks`**: Contains custom React hooks, like `use-mobile.tsx` and `use-toast.ts`.
    - **`lib`**: Contains utility functions and constants, such as `constants.ts` and `utils.ts`.
- **Other files:**
    - `apphosting.yaml`: Configuration file for application hosting.
    - `components.json`: Likely related to UI component configuration.
    - `next.config.ts`: Configuration file for Next.js.
    - `package-lock.json` and `package.json`: Node.js package manager files.
    - `postcss.config.mjs`: Configuration for PostCSS.
    - `tailwind.config.ts`: Configuration for Tailwind CSS.
    - `tsconfig.json`: Configuration for TypeScript.

## Deployment Instructions

To deploy this project on another system, follow these general steps:

1. **Clone the repository:**
