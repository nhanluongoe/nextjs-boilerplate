# Nextjs Boilerplate and Starter-Kit. Minimal yet scalable setup for Next.js projects

A Next.js boilerplate that helps you get jump right into building your app without having to set up everything from scratch every time you start a new project. It comes with a minimal yet scalable setup that includes Next.js, Typescript, TailwindCSS, ESLint, Prettier, Husky, Lint-staged, Commitlint, and SEO-friendly features.

## Features

- [x] Next.js: Full-fledged framework for React apps
- [x] Typescript: Type checking and better code quality
- [x] TailwindCSS: Utility-first CSS framework
- [x] ESLint: Pluggable linting utility for JavaScript
- [x] Prettier: Opinionated code formatter
- [x] Husky: Git hooks made easy
- [x] Lint-staged: Run linters on git staged files
- [x] Commitlint: Lint commit messages
- [x] SEO-friendly: Meta tags, Open Graph, sitemap.xml and robots.txt
- [x] Absolute imports: Import directories and files using the @ alias
- [x] Route grouping: Group routes for auth and public pages

## Getting Started

```bash
## Clone the repository
git clone --depth=1 https://github.com/nhanluongoe/nextjs-boilerplate.git project-name

## Change directory
cd project-name

## Install dependencies
npm install

## Start the development server
npm run dev

## Head over to http://localhost:3000
```

## Project Structure

- All common things (project-wide) are placed in the `src` directory. This includes components, types, styles, and utility functions. This is where we put things that are shared across the project.
- In the project wide components, we have `ui` directory that contains atomic design components like `Button`, `Tag`. Outside of the `ui` directory, there are components composed of atomic components like `Header`, `Footer`.
- In the `app` directory we have domains/features. This includes components, types, ... that are only used in that domain/feature.
- The project uses Next.js App Router to handle routing. The router is divided into two groups: `auth` and `unauth`. The `auth` group contains routes that require authentication, while the `unauth` group contains public routes.

```
|-- public                              # Static files
|-- src                                 # Next.js source directory
|   |-- app                             # Next.js App Router
|   |   |-- (auth)                      # Authenticated route group
|   |   |   |-- layout.tsx
|   |   |   |-- sign-in                 # Sign-in page
|   |   |   |   |-- types               # Types for the sign-in page
|   |   |   |   |   `-- Credential.ts
|   |   |   |   |-- components          # Components for the sign-in page
|   |   |   |   |   `-- Form.tsx
|   |   |   |   `-- page.tsx
|   |   |   `-- sign-up                 # Sign-up page
|   |   |       |-- types               # Types for the sign-up page
|   |   |       |   `-- Credential.ts
|   |   |       |-- components
|   |   |       |   `-- Form.tsx
|   |   |       `-- page.tsx
|   |   |-- (unauth)                    # Public route group
|   |   |   |-- page.tsx
|   |   |   `-- products                # Products page
|   |   |       |-- components          # Components for the products page
|   |   |       |   `-- Card.tsx
|   |   |       |-- layout.tsx
|   |   |       `-- page.tsx
|   |   |-- layout.tsx
|   |   |-- robots.ts                   # Robots.txt
|   |   `-- sitemap.ts                  # Sitemap.xml
|   |-- components                      # Project-wide components
|   |   |-- Footer.tsx                  # Composed of atomic design components
|   |   |-- Header.tsx
|   |   `-- ui                          # Atomic design components
|   |       |-- Button.tsx
|   |       `-- Tag.tsx
|   |-- styles
|   |   `-- global.css                  # Project-wide styles
|   |-- types                           # Project-wide types
|   |   `-- global.ts
|   |-- libs                            # 3rd-party libraries
|   |   `-- axios.ts
|   `-- utils                           # Project-wide utility functions
|       `-- helpers.ts
|-- tailwind.config.ts                  # TailwindCSS configuration
|-- .eslintrc.json                      # ESLint configuration
|-- .prettierrc                         # Prettier configuration
|-- LICENSE
|-- README.md
|-- commitlint.config.ts                # Commitlint configuration
|-- lint-staged.config.js               # Lint-staged configuration
|-- next-env.d.ts
|-- next.config.mjs
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs                  # PostCSS configuration
`-- tsconfig.json                       # Typescript configuration
```

## Commit message convention

- The project uses Husky and Lint-staged to run ESLint and Prettier on staged files before committing.
- Commit messages must follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Contributing

If you have a question or have found a bug, or have any suggestions for improvement, feel free to create an issue or a pull request. Everyone is welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
