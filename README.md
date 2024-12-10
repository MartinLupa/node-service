# Node Service (complete template)

A template for building Node.js services built with Express and TypeScript. This repository provides a foundation for building APIs for my own projects.



## Features

- **TypeScript Support**: Strongly typed JavaScript with TypeScript for enhanced code quality.
- **Express Framework**: Simplified routing and middleware handling.
- **Prometheus Metrics**: Integrated `prom-client` for monitoring application performance.
- **Docker-Ready**: Configured Dockerfile and Compose for containerized deployments.
- **CI/CD**: Pre-configured `buildkite` workflow.
- **Prettier Code Formatting**: Consistent code style with Prettier.



## Prerequisites

- [Node.js](https://nodejs.org/) v22.8.0 or later
- [pnpm](https://pnpm.io/) for dependency management
- [Docker](https://www.docker.com/) (optional for containerized deployments)



## Getting Started

### Installing dependencies
```
pnpm install
```
### Available scripts
- `dev`: `pnpm dev`- Starts the application in development mode with file-watching enabled. Automatically reloads when changes are detected.
- `build`: `pnpm build`- Compiles the TypeScript codebase into JavaScript, generating output files in the dist directory based on the tsconfig.json.
- `build:clean`: `pnpm build:clean`- Deletes the dist directory, cleaning up previously built files. Useful for ensuring a clean build environment..
- `start`: `pnpm start`- Runs the compiled JavaScript code from the dist directory. Requires the application to be built beforehand using the build script.
- `test:jest`: `pnpm test:jest`- Runs the test suite using Jest, a JavaScript testing framework. Ensures the application behaves as expected by running defined test cases.

