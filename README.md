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
  "target": "ES2021",                               /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
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
      "@exceptions/*": [
        "./src/exceptions/*"
      ]
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
            "@database": "./src/database",
            "@exceptions": "./src/exceptions"
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

## ESLINT AND PRETTIER

In projects, we must maintain the same code structure pattern, in order to improve the understanding of the team and facilitate changes and the like.

For this we will use eslint and prettier they will be responsible for forcing us to follow a certain code pattern such as using a semicolon at the end of the code sentence and double quotes and among other things. So, let's start:

- Install the follwing packages:
```
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

- Execute the command:
```
yarn eslint --initialization
```

Now we need response some questions to create our own pattern. Here I will demonstrate the answers to the way this project is found:
- How would you like to use ESlint? `To check syntax, find problems, and enforce code style`;
- What type of modules does your project use? `JavaScript modules (import/export)`;
- Which framework does your project use? `None of these`;
- Does your project use Typescript? `Yes`;
- Where does your code run? `Node` (to mark the options use Spacebar);
- How would you like to define a style for your project? `Answer questions about your style`;
- What format do you want your config file to be in? `JSON`;
- What style of identation you use? `Tabs`;
- What quotes do you use for strings? `Double`;
- What line endings do you use? `Unix`;
- Do you require semicolons? `Yes`;

Finished it, the npm will download a series of packages even if you use `yarn`, just wait install the all packages and do the following:
- Delete `package-lock.json` file;
- Delete `node_modules` folder;
- In your command interface execute the command:
```
  yarn
```

Now we need finish the configuration of Eslint and Prettier, just follow the steps:
- In `.eslintrc` file copy the following code snippet:
```
  {
    "env": {
      "es2021": true,
      "node": true
    },
    "extends": [
      "airbnb-base",
      "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 14,
      "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint",
      "prettier"
    ],
    "rules": {
      "prettier/prettier": [
        1,
        {
          "trailingComma": "es5",
          "singleQuote": false,
          "semi": true
        }
      ],
      "no-console": 0
    }
  }
```

- On the root folder create a file `.prettierrc.json` and copy the follwing code snippet:
```
  {
    "tabWidth": 2,
    "semi": true,
    "singleQuote": false,
    "trailingComma": "es5"
  }
```

- Now let's create a `.eslintignore` to don't apply the rules in some files:
```
  **/node_modules/*
  **/out/*
  **/dist/*
  tsconfig.json
  package.json
```

- Now lest do the same thing with the prettier, create a `.prettierignore` file and copy the following:
```
  node_modules
  dist
  yarn.lock
  package-lock.json
  public
```

- To finisg this topic, lets create a script to linting our files. In `package.json` file in the `scripts` atribute put this code:
```
  "lint": "eslint --fix --ext .js,.ts,.json ."
```

All is configured, so... execute in your terminal the command `yarn lint` and see the magic!

<br />

## EDITOR CONFIG

Editor config is used to maintain a certain pattern of indentation, charset and other text editing settings, just create a `.editorconfig` file and copy and paste the following code snippet:

```
  root = true

  [*]
  indent_style = tab
  indent_size = 2
  charset = utf-8
  end_of_line = lf
  trim_trailing_whitespace = true
  insert_final_newline = true
```

<br />

## STANDARDIZE COMMITS

When working on projects that involve a team, a series of code standardization is recommended, but the standardization of commits also helps the team a lot.

So this topic will teach you how to standardize commits in an interactive and easy way for all devs working on your project. There are several commit patterns, but in this topic apply the angular community pattern. For this we will need three packages, they are:

- commitlint
- husky
- commitizen

Well let's get started, First let's install commitlint:
```
  yarn add @commitlint/{config-conventional,cli} -D
```

With commitlint installed, create a file called `.commitlintrc` and add the following code snippet:
```
  {
    extends: ["@commitlint/config-conventional"]
  }
```

<br />

- Let's install husky:
```
  yarn add husky -D
```

- Create a config for husky with:
```
  yarn husky install
```

- Adding hook for commits:
```
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

With that we already have standardized commits, if you try for example to make a commit with `:octocat: testing a commit`, we will get an error, because it runs away from the commitlint patterns of the angular pattern. You can successfully commit using `feat: testing a commit`.

Okay we are with a standardization, but it may be that some devs mainly from open souce projects find it difficult to follow the standards, and have to look for the project's commit documentation, so to solve that, let's add some interactivity at commit time.

For this we will use commitizen. Open your command interface and run the following:

- Install commitizen: 
```
  yarn add commitizen -D
```

- Initialize commitizen: 
```
  commitizen init cz-conventional-changelog --yarn --dev --exact
```

- Setting up husky hook to execute commitize during `git commit` command. 
```
  npx husky add .husky/prepare-commit-msg "exec < /dev/tty && git cz --hook || true"
```

<br />

## ERROR HANDLING

The handling of errors in the system is something trivial, we don't want our application to simply stop because of errors, and we also want to be aware of the errors we receive.

In this topic, I will teach you how to generate an error handler so that your application does not crash and return error messages to users correctly.

- First in `src` folder create a new folder called `exceptions`;
- In exceptions folder create a file called `ApplicationException.ts`;
- Into file `ApplicationException.ts` copy the following code snippet:
```
export class ApplicationException {
  constructor(
    public readonly message: string,
    public readonly statusCode: number
  ) {}
}
```

It will be our object to generate errors, this object receives a message and a code (the http error code).

PS: If you are using decorators, don't forget to create a new one to `exceptions` folder.

Now we need to create a new file to trigger the errors returning them as an http response, just follow the steps.

- Inside the `src` directory create a folder called `middlewares`;
- In middlewares folder create a file called `ErrorHandling.ts`;
- Inside the file put the following code snippet:
```
import type { Request, Response, NextFunction } from "express";
import { ApplicationException } from "@exceptions/ApplicationException";

export function ErrorHandling (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof ApplicationException) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    message: "Internal server error",
  });
}
```

Let me explain the code above it runs when the user makes a request and we get an error. This error is received by this function and it checks if it is an error of type `ApplicationException` (which would be an error expected by us).

If it is an `ApplicationException` error we will have already informed the `http code` of the error and also the error message, but if not we will have an `internal server error` which is a generic and unexpected error by us.

Now let's enable errors in our project, follow these steps:

- First install the following package:
```
yarn add express-async-errors
```

- In the file `app.ts` import the `ErrorHandling` and enable it in app.use(ErrorHandling), or you can copy the following code:
```
import express from "express";
import "express-async-errors";
import { ErrorHandling } from "@middlewares/ErrorHandling";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(ErrorHandling);

export { app };
```

Well we need test the errors... for this just following the steps below:

- In `controllers` folder create a new file called `ErrorHandlerController.ts`;
- Copy and paste the following code snippet:
```
import { Request, Response } from "express";
import { ApplicationException } from "@exceptions/ApplicationException";

class ErrorHandlerController {
	index(request: Request, response: Response) {
    //dont.exist = "error!"; // throw a unexpected error!

		return response.status(200).json({ message: "Error handler controller okay" });
	}

  create(request: Request, response: Response) {
    const { name, age }: { name: string, age: number } = request.body;
  
    const registeredNames = [
      "eddypbr",
      "edvaldo"
    ];
  
    if(registeredNames.includes(name)) {
      throw new ApplicationException("Name already registered", 400);
    }
  
    return response.status(202).json({ name, age });
  }
}

export { ErrorHandlerController };
```

- Uncomment the line in `index`;
- In `routes.ts` file import the new controller, instance it, and create two routes for use the methods of the controller, or copy the following code snippet:
```
import { Router } from "express";

import { HelloWorldController } from "@controllers/HelloWorldController";
import { ErrorHandlerController } from "@controllers/ErrorHandlerController";

const helloWorld = new HelloWorldController();
const errorHandler = new ErrorHandlerController();

const router = Router();

router.get("/", helloWorld.index);

router.get("/error", errorHandler.index);
router.post("/error", errorHandler.create);

export { router };
```

- Now try to make a request (GET and POST) to `/error` route;

<br />

## ERROR HANDLING WITH CELEBRATE + JOI

In the previous topic it was shown how to throw system errors and return them as json and assign an http code for each error.

In this topic we are going to use `celebrate & Joi` (celebrate package uses Joi to data treatment) a package that will help us handle the data and throw errors to the system.

so let's start:

- Add the celebrate package:
```
yarn add celebrate
```

- On the `routes.ts` file copy the following code has example:
```
import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { HelloWorldController } from "@controllers/HelloWorldController";
import { ErrorHandlerController } from "@controllers/ErrorHandlerController";

const helloWorld = new HelloWorldController();
const errorHandler = new ErrorHandlerController();

const router = Router();

router.get("/", helloWorld.index);

router.get("/error", errorHandler.index);
router.post("/error", celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().integer().required().min(18),
  }),
}, { abortEarly: false }),  errorHandler.create);

export { router };
```

In the code above, we import celebrate and use its data handling functions. I'm gonna explain:

- In the `name` field we said that it is a required field and that it is a string type;

- In the `age` field we said that it is a mandatory numeric type field of the integer type (cannot be fractional or decimal) and that it has to be greater then 18;

PS: There are several types of error handling with Joi and celebrate, go to [this link]("https://joi.dev/api/") and learn more.

If in any of these cases the data is not satisfied, celebrate will trigger an error, which will be caught by our error middleware created in the previous topic. However the errors will be returned in a generic way, so let's specify the fields that gave an error when we go back to the user.

This process is very simple:

- In the `middlewares` folder in the `ErrorHandling.ts` file copy and paste the following code snippet:
```
import type { Request, Response, NextFunction } from "express";
import { isCelebrateError } from "celebrate";
import { ApplicationException } from "@exceptions/ApplicationException";

export function ErrorHandling (
	err: Error,
	request: Request,
	response: Response,
	next: NextFunction
) {
	if(isCelebrateError(err)) {
    const errorDetails = err.details.get("body").details;
    const errorMessages = errorDetails.map((error) => error.message.replace(/"/g, ""));

    return response.status(500).json({
      message: errorMessages,
    });
  }

	if (err instanceof ApplicationException) {
		return response.status(err.statusCode).json({ message: err.message });
	}

	return response.status(500).json({
		message: `Internal server error - ${err.message}`,
	});
}
```
Basically we import a celebrate function that checks if the triggered error is an error coming from the celebrate. Then we create a conditional that uses this function does a text treatment and returns an http message with a json that reports the errors found.

Now you can test it, changing the age value to less than 18 or chaginf name field to a number type... enjoy!

PS: In the routes file the `abortEarly` option is used so that as soon as it finds an error it triggers the error, if the option is `false` the celebrate will save the errors and then trigger them all as a single error.

<br />
