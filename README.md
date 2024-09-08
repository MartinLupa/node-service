# node-service

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

Bun 
- Supports Typescript (which only Node v22 started supporting).
- Issues when building project with v8, flipped to pnpm.

Pnpm
- Explain decision of choice.

Nodejs 22
- supports --watch mode
- native support for process.env, no need for dotenv package anymore.
- Issues when trying to build the project: packages still not supporting node v22 (Early addoption issues).