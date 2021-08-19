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
    "rootDir": ".",                                 /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
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

PS: There are several types of error handling with Joi and celebrate, go to [this-link](https://joi.dev/api/) and learn more.

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
	if(isCelebrateError(error)) {
    const errorDetails = error.details.get("body").details;
    const errorMessages = errorDetails.map((errorDetail) => errorDetail.message.replace(/"/g, ""));

    return response.status(400).json({
      message: errorMessages,
    });
  }

	if (error instanceof ApplicationException) {
		return response.status(error.statusCode).json({ message: error.message });
	}

	return response.status(500).json({
		message: `Internal server error - ${error.message}`,
	});
}
```
Basically we import a celebrate function that checks if the triggered error is an error coming from the celebrate. Then we create a conditional that uses this function does a text treatment and returns an http message with a json that reports the errors found.

Now you can test it, changing the age value to less than 18 or chaginf name field to a number type... enjoy!

PS: In the routes file the `abortEarly` option is used so that as soon as it finds an error it triggers the error, if the option is `false` the celebrate will save the errors and then trigger them all as a single error.

<br />

## TRADUÇÃO DO JOI EM PT-BR

Fala dev! achou que ia ficar de fora com os erros brasileiros? - errou!

Eu sei muito bem que tem cliente que quer os erros em português, e estamos aqui pra ajudar uns aos outros não é mesmo? - Então, tem uma galera que traduziu os erros do JOI, e vamos utilizar o pacote que eles criaram para traduzir os nossos erros.

- Então vamos lá, instale o seguinte pacote:
```
yarn add joi-translation-pt-br
```

- Na pasta `src` no arquivo `routes.ts` importe o pacote:
```
import { messages } from "joi-translation-pt-br";
```

- Agora passe o objeto `messages` nas `options` (onde fica o `abortEarly`) do celebrate, ou copie e cole o exemplo abaixo:
```
import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { messages } from "joi-translation-pt-br";

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
}, { abortEarly: true, messages }),  errorHandler.create);

export { router };
```

Agora pode testar que os erros serão retornados em português Brasil. E acesse o [link-do-projeto-de-tradução](https://github.com/EduardoJM/joi-translation-pt-br/) e da uma estrelinha la, é bom dar uma força pra galera! 

OBS: Não esqueça de traduzir os erros que não são do Celebrate!

<br />

## AUTOMATED TESTS WITH JEST

Automated tests are essential for the development of all software, when we run automated tests we find bugs, security holes and unexpected results.

In this topic we are going to install and configure JEST to create automated tests for our project. So here we go:

- Install jest:
```
yarn add jest ts-jest @types/jest -D
```

- Execute the command:
```
yarn jest --init
```

Agora reproduza as seguintes respostas:
- Would you like to use Jest when running "test" script in "package.json"? `yes`;
- Would you like to use Typescript for use configuration file? `yes`;
- Choose the test enviroment that will be use for testing? `node`;
- Do you want Jest to add coverage reports? `yes`;
- Which provider should be use to instrument code for coverage? `v8`;
- Automatically clear mock calls and instances between every test? `yes`;

Jest created the `jest.config.js` file open and do the following:

- Find the variable `preset`, remove the comment change to: 
```
preset: "ts-jest"
```

- Find the variable `testMatch`, remove the comment and change to: 
```
testMatch: [
  "**/__tests__/**/*.spec.ts"
]
```

- Lets enable decorators, find the variable `moduleNameMapper`, remove the comment and change to:
```
moduleNameMapper: {
  "@controllers/(.*)": "<rootDir>/src/controllers/$1",
  "@models/(.*)": "<rootDir>/src/models/$1",
  "@utils/(.*)": "<rootDir>/src/utils/$1",
  "@middlewares/(.*)": "<rootDir>/src/middlewares/$1",
  "@database/(.*)": "<rootDir>/src/database/$1",
  "@exceptions/(.*)": "<rootDir>/src/exceptions/$1",
}
```

- Choose the root directory, find the variable `rootDir`, remove the comment and change to:
```
rootDir: "."
```

- Habilitando o root, find the variable `roots`, remove the comment and change to:
```
roots: [
  "<rootDir>"
]
```

- Em casos de você ter o `eslint` no seu projeto, no arquivo de configuração no atributo `env` adicione o seguinte:
```
env {
  "jest": true,
}
```

- Let's create the test script, open the `package.json` file and in the `scripts` attribute add the following script:
```
"scripts": {
  test: "jest"
}
```

- To finish in the file `tsconfig.json` add the following code snippet:
```
"exclude": ["**/__tests__"]
```

Everything is set up, now we're finally going to create a test for our system, so let's start:

- First in the root of the project create the directory `__tests__`;
- Inside the folder create a folder called `unit`;
- In this folder create a file `example.spec.ts`;
- And copy the following code snippet:
```
describe('Just a test', () => {
  it('Sum 1 + 1 = 2', () => {
    expect(1 + 1).toBe(2)
  })
});
```
- Now execute the command `yarn test`;

<br />

## AUTOMATED TESTS OF ROUTES WITH SUPERTEST

In the previous topic we created unit tests using jest, now let's create route tests using supertest.

The supertest creates requests to our server, with this we can test the experience of the system working really and without isolation depending on the cases.

The process is much simpler than just installing jest, but in this topic we will create a route test using the routes created in the `error handling` topic. So let's start:

- Install supertest:
```
yarn add supertest @types/supertest -D
```

- Inside the `__tests__` directory create a folder called `integration`;

- In the `integration` folder create a file called `errorHandler.spec.ts`;

- Inside the `errorHandler.spec.ts` copy the follwing code snippet:
```
import request from "supertest";
import { app } from "../../src/app";


describe("check route GET /error", () => {
  it("should be a success", async () => {
    const response = await request(app).get("/error");

    expect(response.status).toBe(200);
  });
});

describe("check route POST /error", () => {
  it("should be fail because name and age validation", async () => {
    const response = await request(app).post("/error").send({
      name: "eddypbr",
      age: 17
    });

    expect(response.status).toBe(400);
  });

  it("should be fail because age validation", async () => {
    const response = await request(app).post("/error").send({
      name: "irineu",
      age: 17
    });

    expect(response.status).toBe(400);
  });

  it("should be fail because name already registered", async () => {
    const response = await request(app).post("/error").send({
      name: "edvaldo",
      age: 24
    });

    expect(response.status).toBe(400);
  });

  it("should be a success", async () => {
    const response = await request(app).post("/error").send({
      name: "irineu",
      age: 24
    });

    expect(response.status).toBe(202);
  });
});
```

- Execute the command `yarn test` and see the result of the tests;

So everything is set up for us to create tests and develop with the tdd strategy.

<br />

## DOCKER

When we are developing software there are several situations in which something might work on your machine, but on your colleague's machine it won't work.

This is due to the different operating systems and language or database versions that differ among developers.

And to get around this we use docker, the docker is like a container of virtual applications on your computer, and it will allow us to run node and databases on different systems without version differences and without having to worry about versions divergent and the best part, without having to install the database on our machine!

I'm not going to delve into docker, but but in the following topics I will teach you how to use docker with a mongodb database (NoSQL) or a MySQL database (SQL).

You can access the [mongodb](https://github.com/EddyPBR/my-nodejs-express-setup/tree/setup-with-mongoose) brench or the [mysql](https://github.com/EddyPBR/my-nodejs-express-setup/tree/setup-with-mysql) brench to find out how to set up the docker for these two databases.

<br />

## DOCKER MYSQL AND TYPEORM

Creating code that generates an optimized and secure query that works on a mysql and postgree database without having to change anything seems like a dream, but the typeorm is real!

The typeorm has compatibility with a lot of databases, and in a project with the use of decorators and typescript with the typeorm it looks really cool, so let's use the typeorm.

Let's get started, just follow the steps below:

- In the root directory create a file called `dockerfile`;
- Copy and paste the below code snippet into the file:
```
FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]
```

- Now in the root of the project create a file called `docker-compose.yml`;
- Copy the following code snippet and put on the file:
version: "3.7"

services:
  server:
    container_name: express-setup-api
    restart: always
    build: .
    ports:
      - 3333:${PORT}
    links:
      - database
    volumes:
      - .:/usr/src/app
  
  database:
    container_name: express-setup-database
    image: mysql:5.7.31
    command: --default-authentication-plugin=mysql_native_password --sql_mode=NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER --explicit_defaults_for_timestamp
    restart: always
    ports:
      - 3306:${DATABASE_PORT}
    logging:
      driver: none
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=${DATABASE_NAME}
      - MYSQL_USER=${DATABASE_USER}
      - MYSQL_PASSWORD=${DATABASE_PASSWORD}

- To finish the docker config, create a file file called `.dockerignore` and put into the file the following:
```
node_modules
```

- Before you create the containers, you need to be update the `.env` file, just add the following code snippet:
```
DATABASE_NAME=express-setup-database
DATABASE_USER=setup-user
DATABASE_PASSWORD=qwerty123
DATABASE_PORT=3306
```

PS: You can change the vars name in the `.env` file, but don't change environment vars in `docker-compose` file!!!!

Explaining what happens, especially `docker-compose`. The `docker-composer` will start by creating two services the `server` and the `database`, the server will have a container called `express-setup-api` and another one called `express-setup-database`.

The server service will generate the build of a container based on our `dockerfile` file, in our file we specify that a port will be opened on our real machine (PORT `3333`) which will redirect to the PORT of our container ( specified in `.env`) and this service has a dependency on another service which in our case is `database` this means that the two containers will communicate with each other. 

The `database` service, on the other hand, is named `express-setup-database` where if something goes wrong it will always restart the service, trying to maintain connection, and here we also redirect the real port to our virtual machine , eventually the database log will be ignored, not showing it in the console.

Now we can run the `docker-compose up` command in our command interface and the two containers will be on!

<br />

Now let's connect our system to mysql using the typeorm package. Follow the step by step:

- Install mysql package:
```
yarn add mysql
```

- Install the typeorm package:
```
yarn add typeorm
```

- On the `root` directory create a file called `ormconfig.js` (host: database -> name of the docker-compose database service);
```
module.exports = {
  "type": "mysql",
  "host": "database",
  "port": process.env.DATABASE_PORT,
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "entities": ["src/entities/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/database/migrations",
  }
};
```

- On the `root` directory create a file called `ormMigrationConfig.js`;
```
module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": process.env.DATABASE_PORT,
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "entities": ["src/entities/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/database/migrations",
  }
};
```

- Yes is the same file, but we need create it because the docker host... just confide in me.

- The typeorm needs a another package, so install it:
```
yarn add reflect-metadata
```

- In `src` directory create a folder called `database`;
- On database folder create a file `connection.ts`, and copy the following code:
```
import { createConnection, getConnection } from "typeorm";

export const connection = {
  async create() {
    await createConnection();
  },

  async close(){
    await getConnection().close(); 
  }
};
```

- And update the `app.ts` file, lets call the `connection function` and `reflect-metadata`, just copy the followinf code:
```
import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { ErrorHandling } from "@middlewares/ErrorHandling";
import { connection } from "@database/connection";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(ErrorHandling);

connection();

export { app };
```

With that our docker node is already communicating with the database. From this moment run the command `docker-compose up` and leave it running in the terminal, open another terminal and go to the next topic.

## TYPEORM, STRUCTURE AND EXAMPLE OF USE

Now let's create an example of a route that creates a user using typeorm.

PS: Before start we need to add the decorators of three new folders. the folders are: `services`, `entities` and `repositories`. So remember that there are three places to configure decorators in `tsconfig.json`, `babelrc` and `jest.config.ts`. Just take as an example the codes of decorators already created in these files.

With the decorators ready, let's move on. just follow the steps:

- In `package.json` file add the following scripts in the `scripts` object:
```
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js",
"migration": "ts-node-dev ./node_modules/typeorm/cli.js migration:run -f ormMigrationConfig.js"
```

- Well lets create the first migration, execute the following command:
```
yarn typeorm migration:create -n CreateUsers
```

- In folder `database/migrations` a file has been created, insert (NOT SUBSCRIBE ANY ROW OF CODE) the lefting informations:
```
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1629305967416 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }

}
```

- Now let's make our first migration, this will create our user table in the database, just execute:
```
yarn migration
```

- With the tables created, let's create our first `entity`:
```
yarn typeorm entity:create -n UserEntitiy
```

- In directory `src` in the folder `entities` has been creted the file `UserEntity.ts`, so copy the following code snippet:
```
import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class UserEntity {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

};

export { UserEntity };
```

- Now we need to install the `uuid` package, Install the package with the command below, which I'll explain next.
```
yarn add uuid
```

- And install the types:
```
yarn add @types/uuid -D
```

`UUID` is a library that generates `unique and universal ID's`, some databases have this native function, but some databases do not have this function or the way they create this uuid is different (due to the uuid versions), so we can get around this , we added this library and we guarantee that the uuid will be generated by the javascript code and added to any database.

- In `src` directory create a folder `repositories`;
- In `respositories` folder create a file `UserRepository.ts`, and copy the following code snippet:
```
import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "@entities/UserEntity";

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {}

export { UserRepository };
```

- In `src` directory create a folder `services`;
- In `services` folder create a file `CreateUserService.ts`, and copy the following code snippet:
```
import { getCustomRepository } from "typeorm";
import { UserRepository } from "@repositories/UserRepository";
import { ApplicationException } from "@exceptions/ApplicationException";

interface IUserRequest {
  name: string;
  email: string;
}

class CreateUserService {
  async execute({ name, email }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    if (!name || !email) {
      throw new ApplicationException("Email or password with bad formated", 400);
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new ApplicationException("User already registered", 403);
    }

    const user = usersRepository.create({
      name,
      email
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
```

- In the `controllers` directory remove delete all files;
- In the `routes.ts` file remove all routes, and remove all imports from controllers;

- Now in the `controllers` folder create a `UserController.ts` file and copy the following code snippet:
```
import { Request, Response } from "express";
import { CreateUserService } from "@services/CreateUserService";

type UserRequestBody = {
  email: string;
  name: string;
}

class UserController {
	async create(request: Request, response: Response) {
    const { name, email }: UserRequestBody = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email });

    return response.json(user);
  }
}

export { UserController };
```

- In the `routes.ts` file copy the following code snippet: 
```
import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { UserController } from "@controllers/UserController";

const userController = new UserController();

const router = Router();

router.post("/user", celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().email().required(),
		name: Joi.string().required()
	}),
}, { abortEarly: true }), userController.create);

export { router };
```

Now you can test the route.

<br />

## TESTS CONFIGURATIONS

Before we start our tests, we will have to create another database using the docker and this database is just for us to perform tests.

- If you are running the `docker-compose up` command, stop it now;
- Then in the `root` directory create a `docker-compose.test.yml` file;
- Copy the following code snippet and paste into the created file:
```
version: "3.7"

services:  
  test-database:
    container_name: test-mysql
    image: mysql:5.7.31
    command: --default-authentication-plugin=mysql_native_password --sql_mode=NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER --explicit_defaults_for_timestamp
    restart: always
    ports:
      - 3306:${DATABASE_PORT}
    logging:
      driver: none
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=${DATABASE_NAME}
      - MYSQL_USER=${DATABASE_USER}
      - MYSQL_PASSWORD=${DATABASE_PASSWORD}
```

- Add the following script to `package.json`:
```
"docker-database-test": "docker-compose -f docker-compose.test.yml up"
```

- Execute the command:
```
yarn docker-database-test
```

- Now let's create our tables, execute the command:
```
yarn migration
```

- Well let's create our test file.
- In the `__test__` directory, delete the files from the `integrations` folder;
- Inside the `integrations` folder create the `user.spec.ts` file. And copy the following code snippet:
```
import request from "supertest";
import { getCustomRepository } from "typeorm";

import { app } from "../../src/app";
import { connection } from "@database/connection";
import { UserRepository } from "@repositories/UserRepository";

describe("Test user route", () => {
  beforeAll(async () => {
    await connection.create();
  });
  
  afterAll(async () => {
    await connection.close();
  });
  
  beforeEach(async () => {
    const usersRepository = getCustomRepository(UserRepository);
    await usersRepository.clear();
  });

  it("should be create and save a user", async () => {
    const response = await request(app).post("/user").send({
      email: "newuser@mail.com",
      name: "newuser"
    });

    expect(response.status).toBe(200);
  });
});
```

`WARNING: Every time we run the tests, we have to change the "ormconfig.js" file and set the host to "localhost"! as I'll show you next.`

- In the `ormconfig` file set the attribute:
```
host: localhost
```

- Now run the tests:
```
yarn test
```

<br />
