# Nextjs Boilerplate and Starter-Kit. Minimal yet scalable setup for Next.js projects

A Next.js boilerplate that helps you get jump right into building your app without having to set up everything from scratch every time you start a new project. It comes with a minimal yet scalable setup that includes Next.js, Typescript, TailwindCSS, ESLint, Prettier, Husky, Lint-staged, Commitlint, and SEO-friendly features.

## Features

- [x] [Next.js](https://nextjs.org): Full-fledged framework for React apps
- [x] [Typescript](https://typescriptlang.org): Type checking and better code quality
- [x] [TailwindCSS](https://tailwindcss.com/): Utility-first CSS framework
- [x] [ESLint](https://eslint.org): Pluggable linting utility for JavaScript
- [x] [Prettier](https://prettier.io): Opinionated code formatter
- [x] [Husky](https://typicode.github.io/husky): Git hooks made easy
- [x] [Lint-staged](https://github.com/lint-staged/lint-staged): Run linters on git staged files
- [x] [Commitlint](https://commitlint.js.org/): Lint commit messages
- [x] [NextAuth](https://authjs.dev/): Powerful authentication for Next.js
- [x] SEO-friendly: Meta tags, Open Graph, sitemap.xml and robots.txt
- [x] Absolute imports: Import directories and files using the @ alias
- [x] Route grouping: Group routes for auth and public pages

## Use this boilerplate

You can either clone this repository using command line or clicking on the "Use this template" button to create a new repository with the same directory structure.

```sh
git clone --depth=1 https://github.com/nhanluongoe/nextjs-boilerplate.git project-name
cd project-name
npm install
npm run dev
```

## Project Structure

- All common things (project-wide, global) are placed in the `src` directory. This includes components, types, styles, and utility functions. This is where we put things that are shared across the project.
- In the project wide components, we have `ui` directory that contains atomic design components like `Button`, `Tag`. Outside of the `ui` directory, there are components composed of atomic components like `Header`, `Footer`.
- In the `app` directory we have domains/features. This includes components, types, hooks, api (route handler) ... that are only used in that domain/feature. Basically these directories include things similar to the global things but are only used in the domain/feature.
- The project uses Next.js App Router to handle routing. The router is divided into two groups: `auth` and `unauth`. The `auth` group contains routes that require authentication, while the `unauth` group contains public routes.

```
|-- public                              # Static files
|-- src                                 # Next.js source directory
|   |-- app                             # Next.js App Router
|   |   |-- (auth)                      # (Group) Private routes
|   |   |   |-- layout.tsx              # Authenticated layout
|   |   |   |-- profile                 # (Module) Profile page
|   |   |   |   `-- page.tsx
|   |   |-- (unauth)                    # (Group) Public routes
|   |   |   |-- layout.tsx              # Unauthenticated layout
|   |   |   |-- page.tsx                # Unauthenticated index page
|   |   |   `-- products                # (Module) Product page
|   |   |       |-- components          # Components for the product page
|   |   |       |   `-- ProductCard.tsx
|   |   |       |-- layout.tsx
|   |   |       `-- page.tsx
|   |   |-- layout.tsx                  # App layout
|   |   |-- robots.ts                   # Robots.txt
|   |   `-- sitemap.ts                  # Sitemap.xml
|   |-- components                      # Global components
|   |   |-- Footer.tsx
|   |   |-- Header.tsx
|   |   `-- ui                          # Atomic design components
|   |       |-- Button.tsx
|   |       `-- Tag.tsx
|   |-- api                             # Global API route handlers
|   |   `-- auth
|   |-- styles
|   |   `-- global.css                  # Global styles
|   |-- types                           # Global types
|   |   `-- global.ts
|   |-- libs                            # 3rd-party libraries
|   |   `-- auth.ts
|   `-- utils                           # Global utility functions
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

## Eslint configuration

- The project uses common Eslint configuration for Typescript projects. The configuration is based on the following packages:
  - [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript): Airbnb's ESLint config with TypeScript support.
  - [typescript-eslint](https://typescript-eslint.io/): Enables Eslint to lint TypeScript code.

## Contributing

If you have a question or have found a bug, or have any suggestions for improvement, feel free to create an issue or a pull request. Everyone is welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
