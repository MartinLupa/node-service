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

Typescript:
- need for .js in the import of a .ts file not so nice. Why? metrics.js requires me to add .js, otherwise on the tsc step it wont recognise the module.


Run the project.
- Buildkite runner and config:
    - Explain how to set up local runner 
    - you might need to set /opt/homebrew/var/buildkite-agent/builds/ in docker daemon so the pipeline doesnt fail


Thisng I dont like from Node:
- Requires setting up Typescript (compile/transpile, clarify concepts and required steps to set build script)
- The built-in test runner requires you to set the tests on one folder, so the tests need to be al together, potentially far from the files they refer to (for this reason I chose Jest, argument more)
- 