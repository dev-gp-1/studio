# Project README

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Purpose and Contents of Main Files

Based on the project file list, here is an overview of the key directories and files:

- **`.idx`**: Contains configuration files related to the development environment. `dev.nix` is present in this directory.
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

Deploying this Next.js project to a new hosting service involves several steps, from setting up your environment to building and running the application.

### 1. Requirements

Before you begin, ensure your target deployment environment has the following:

*   **Node.js:** Next.js requires Node.js. It's recommended to use an LTS (Long-Term Support) version. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm or Yarn:** These are package managers for Node.js. npm is included with Node.js. Yarn can be installed separately if preferred.
*   **Git:** For cloning the repository and managing versions.

### 2. General Deployment Steps

Regardless of the specific hosting service, the general workflow is similar:

1.  **Clone the Repository:**
    Get the project code onto your deployment server or link your Git repository to the hosting service.
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install Dependencies:**
    Install all the necessary Node.js packages defined in `package.json`.
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

3.  **Set Up Environment Variables:**
    Your application might require environment variables for API keys, database connections, or other configurations (e.g., `DATABASE_URL`, `API_KEY`). Most hosting providers offer a way to set these variables securely. Create a `.env.local` file for local development if you haven't already, but **do not commit this file to Git**. For production, use the hosting provider's interface for setting environment variables.

4.  **Build the Project:**
    Next.js applications need to be compiled into optimized static assets and server-side code.
    Using npm:
    ```bash
    npm run build
    ```
    Or using Yarn:
    ```bash
    yarn build
    ```
    This command typically creates a `.next` folder containing the build output.

5.  **Run the Application:**
    After a successful build, you can start the production server.
    Using npm:
    ```bash
    npm run start
    ```
    Or using Yarn:
    ```bash
    yarn start
    ```
    By default, this usually starts the server on port 3000. The hosting provider might handle this step automatically or require specific configuration.

### 3. Deployment Methods & Hosting Services

Here are a few common ways to deploy a Next.js application:

**A. Platform as a Service (PaaS) - Vercel, Netlify, Google Cloud Run, AWS Amplify, Azure App Service**

These platforms are often optimized for Next.js and simplify the deployment process significantly.

*   **Vercel (Recommended for Next.js):**
    Vercel is made by the creators of Next.js and offers seamless deployment.
    1.  Sign up or log in to [Vercel](https://vercel.com).
    2.  Connect your Git provider (GitHub, GitLab, Bitbucket).
    3.  Import your project. Vercel will usually detect it's a Next.js project and configure build settings automatically.
    4.  Set environment variables in the Vercel project settings.
    5.  Deploy. Vercel will automatically build and deploy your application upon pushes to the connected branch.
    *   **Build command (usually auto-detected):** `next build` or `npm run build`
    *   **Start command (handled by Vercel):** Vercel manages the serving of your Next.js app.

*   **Netlify:**
    1.  Sign up or log in to [Netlify](https://www.netlify.com).
    2.  Connect your Git provider.
    3.  Import your project.
    4.  Configure build settings:
        *   **Build command:** `npm run build` (or `yarn build`)
        *   **Publish directory:** `.next` (though for Next.js on Netlify, you might need to use the [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/overview/) which handles this configuration).
    5.  Set environment variables in the Netlify project settings.
    6.  Deploy.

*   **Google Cloud Run:**
    Allows you to run stateless containers. You'll need to containerize your Next.js app using Docker.
    1.  Create a `Dockerfile` in your project (see Next.js documentation for examples of Dockerizing).
    2.  Build your Docker image: `docker build -t my-nextjs-app .`
    3.  Push the image to Google Container Registry (GCR) or Artifact Registry.
        ```bash
        gcloud auth configure-docker
        docker tag my-nextjs-app gcr.io/YOUR_PROJECT_ID/my-nextjs-app
        docker push gcr.io/YOUR_PROJECT_ID/my-nextjs-app
        ```
    4.  Deploy to Cloud Run via the `gcloud` CLI or Google Cloud Console, referencing the image.
        ```bash
        gcloud run deploy my-nextjs-service --image gcr.io/YOUR_PROJECT_ID/my-nextjs-app --platform managed --region YOUR_REGION --allow-unauthenticated
        ```
    5.  The `apphosting.yaml` file in your project suggests you might be using Google App Engine or a similar Google Cloud hosting service. Refer to the specific documentation for that service. For App Engine, you would use `gcloud app deploy apphosting.yaml`.

**B. Manual Deployment to a Virtual Private Server (VPS) or Dedicated Server**

This method gives you more control but requires more setup.

1.  **Provision a Server:** Get a server from providers like DigitalOcean, AWS EC2, Linode, etc.
2.  **Install Dependencies:** SSH into your server and install Node.js, npm/yarn, and Git.
3.  **Configure a Web Server (Optional but Recommended):**
    Set up a reverse proxy like Nginx or Apache to manage incoming traffic, handle SSL, and serve static assets.
    Example Nginx configuration snippet:
    ```nginx
    server {
        listen 80;
        server_name your_domain.com;

        location / {
            proxy_pass http://localhost:3000; # Assuming Next.js runs on port 3000
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
4.  **Clone, Install, Build, Run:** Follow the "General Deployment Steps" outlined above on your server.
5.  **Use a Process Manager:**
    To keep your Next.js application running continuously and restart it if it crashes, use a process manager like PM2.
    Install PM2:
    ```bash
    npm install pm2 -g
    ```
    Start your application with PM2:
    ```bash
    pm2 start npm --name "my-nextjs-app" -- run start
    ```
    Or, if you have a specific start script in `package.json`:
    ```bash
    pm2 start ecosystem.config.js # If you configure PM2 with a config file
    ```
    Commands for PM2:
    *   `pm2 list`: List all running processes.
    *   `pm2 stop <app_name_or_id>`: Stop a process.
    *   `pm2 restart <app_name_or_id>`: Restart a process.
    *   `pm2 logs <app_name_or_id>`: View logs.
    *   `pm2 startup` and `pm2 save`: To make PM2 restart applications on server reboot.

### 4. Important Considerations

*   **HTTPS:** Always serve your application over HTTPS in production. PaaS providers often handle this automatically. For manual deployments, use Let's Encrypt with Nginx or Apache.
*   **Database and Services:** If your application uses external databases or services, ensure they are accessible from your deployment environment and connection strings are configured correctly via environment variables.
*   **CI/CD:** Implement a Continuous Integration/Continuous Deployment (CI/CD) pipeline (e.g., using GitHub Actions, GitLab CI, Jenkins) to automate the build and deployment process whenever you push changes to your repository.

This guide provides a general overview. Always refer to the documentation of your chosen hosting provider for the most accurate and detailed instructions.
