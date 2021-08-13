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

## PATHS DECORATORS

Do you know when you need to access a certain file inside a folder, and we have to type 4x the `../` just to get to the folder where the file is? - So the decorators of paths compose to help you.

In the `tsconfig.json` file, set the following configurations:
```
  {
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                         /* Enable incremental compilation */
  "target": "es2017",                               /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                                   /* Specify library files to be included in the compilation. */
    "allowJs": true,                                /* Allow javascript files to be compiled. */
    // "checkJs": true,                             /* Report errors in .js files. */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                           /* Generates corresponding '.map' file. */
    // "outFile": "./",                             /* Concatenate and emit output to single file. */
    "outDir": "./dist",                             /* Redirect output structure to the directory. */
    "rootDir": "./src",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                           /* Enable project compilation */
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
    "removeComments": true,                         /* Do not emit comments to output. */
    // "noEmit": true,                              /* Do not emit outputs. */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": false,                                 /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                    /* Enable strict null checks. */
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
    // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                      /* Report errors on unused locals. */
    // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
    // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                  /* Ensure overriding members in derived classes are marked with an 'override' modifier. */
    // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

    /* Module Resolution Options */
    // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": "./",                                /* Base directory to resolve non-absolute module names. */
    "paths": {
      "@controllers/*": [
        "./src/controllers/*"
      ],
      "@models/*": [
        "./src/models/*"
      ],
      "@utils/*": [
        "./src/utils/*"
      ],
      "@middlewares/*": [
        "./src/middlewares/*"
      ],
      "@database/*": [
        "./src/database/*"
      ],
    },                                              /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
    "typeRoots": [
      "./node_modules/@types",
      "./src/@types"
    ],                                              /* List of folders to include type definitions from. */
    // "types": [],                                 /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    "experimentalDecorators": true,                 /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,                  /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  }
}
```

With the above code snippet, we not only define the shortcuts of the project paths but also the project root directory, where the project build will be generated and among other things.

But we don't stop there, we still need to add the package that allows the typescript to understand these decorators, so run the following command:
```
  yarn add tsconfig-paths -D
```

<br />

## EXPRESS BASE STRUCTURE

- Install express:
```
  yarn add express
```

- Install the types of express in development dependencies:
```
  yarn add @types/express -D
```

- Create a `src` folder in the root directory of the project;

- In `src` folder create a `controllers` folder;

- Now let's create a controller, In `controllers` folder create a file called `HelloWorldController.ts` and copy the following code snippet:
```
  import { Request, Response } from "express";

  class HelloWorldController {
    index(request: Request, response: Response) {
      return response.status(200).json({ message: "Hello world!" });
    }
  }

  export { HelloWorldController };
```

- Inside the `src` folder, create the following files `app.ts`, `server.ts`, `routes.ts`;

- In `routes.ts` file, copy the following code snippet:
```
  import { Router } from "express";

  import { HelloWorldController } from "@controllers/HelloWorldController";

  const helloWorld = new HelloWorldController();

  const router = Router();

  router.get("/", helloWorld.index);

  export { router };
```

- In `app.ts` file, copy the following code snippet:
```
  import express from "express";
  import { router } from "./routes";

  const app = express();

  app.use(express.json());

  app.use(router);
  export { app };
```

- Finnaly in `index.ts` copy the following code snippet:
```
  import { app } from "./app";

  const PORT = 3000;

  app.listen(PORT, () => console.log(`SERVER LISTEN AT ${PORT}`));
```

Now let's configure a script to run the project as development mode, for that we'll use the ts-node-dev package, install it with the following command:
```
  yarn add ts-node-dev -D
```

Now lets create a script to start the project in development mode, in the `package.json` create a new atribute like the following:
```
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --files --ignore-watch node_modules --no-notify src/index.ts"
  }
```

So execute in your terminal the command `yarn dev`, and our service is online! We can test it just open your browser and load a page in the url `localhost:3000/`, it should return a json like `{ message: hello world }`.

<br />

## SCRIPT TO BUILD AND START

In this topic we are going to configure our project to generate the build with the babel package.

- First we must install babel and some extra packages of it, just copy the following code:
```
  yarn add babel-plugin-module-resolver @babel/preset-typescript @babel/preset-env @babel/node @babel/core @babel/cli -D
```

- Now let's create a babel configuration file:
```
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      "@babel/preset-typescript"
    ],
    "plugins": [
      [
        "module-resolver",
        {
          "alias": {
            "@controllers": "./src/controllers",
            "@models": "./src/models",
            "@utils": "./src/utils",
            "@middlewares": "./src/middlewares",
            "@database": "./src/database"
          }
        }
      ]
    ],
    "ignore": ["**/*.spec.ts"]
  }
```

`PS: For each decorator added to the tsconfig.json file, it is necessary to add it to the babel settings, so that no errors are detected in the build process.`

Now lets create scripts to generate the build of the project, and start it. On package.json in the `scripts` atribute adding the following code:
```
  "scripts": {
    "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored",
    "start": "node ./dist/index.js",
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --files --ignore-watch node_modules --no-notify src/index.ts"
  },
```

Well now we have three scripts:
- `yarn dev` to run the project in development mode;
- `yarn build` to build the project build;
- `yarn start` to run the project build;

<br />

## DOTENV (AMBIENT VARS)

Sometimes we need to define certain variables in certain environments. You ask yourself, "What do you mean? What environments?" - Project environments, for example the test environment and the production environment.

Usually the variables like ports, url, database url, database user, database pass and so on. They are changed depending on the environment.

In this topic we will configure the environment variables of our project so that we can use the environment variables in all project files.

No more, let's start:

- First install the following package:
```
yarn add dotenv -D
```

- Now create a `.env` file in the project root;

- In it you must put the environment variables of your project, but in this case put only one, the value `PORT=3000`;

- Now inside the `index.ts` file copy and paste the following code snippet:
```
import "dotenv/config";

import { app } from "./app";

const { PORT } = process.env;

app.listen(PORT, () => console.log(`SERVER LISTEN AT ${PORT}`));
```

Explanation: in the copied code snippet, we first import the `dotenv` (.env) file, and then we create a const `PORT` which is taken from the `process.env` its content is precisely the `.env` file found at the root of the project.

<br />
