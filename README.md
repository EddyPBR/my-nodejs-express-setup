## INITIALIZE PACKAGE.JSON AND TYPESCRIPT

First create your project directory, inside your project directory execute the following commands:

- Creating package.json:
```
  yarn init -y
```

- Adding typescript package as development dependency:
```
  yarn add -D typescript
```

- Creating typescript configuration file:
```
  yarn tsc --init
```

Let's remove unnecessary git changes. To do this, create a `.gitignore` file in the project's root folder and copy and paste the following code snippet:
```
  /node_modules
  /.pnp
  .pnp.js
  .env

  /coverage

  /build
  /dist

  .DS_Store
  .env
  .env.local
  .env.development.local
  .env.test.local
  .env.production.local

  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*

```

<br />
