# Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
    - [`API`](#api)
    - [`Config`](#config)
    - [`Loaders`](#loaders)
    - [`Middlewares`](#middlewares)
    - [`Models`](#models)
    - [`Scripts`](#scripts)
    - [`Utils`](#utils)
    - [`app.js`](#appjs)
    - [`server.js`](#serverjs)

# Getting Started

This is a simple Node.js TODO app using MongoDB.

## Installation

If you haven't already done so you first need to:

1. Install NPM packages

   ```
   npm install
   ```

2. Set environment variables

   You'll find all the information about the environment variables that you need for this project in `.env.example`.

   Rename `.env.example` to `.env` if you're running locally or `.env.production` if you're deploying the app

3. Run database seed script (optional)

   ```
   npm run seed
   ```

## Project Structure

Let's get right in and learn more about the project's structure. the folders in this project are organized by features not by type because In my opinion it's much easier to work with.

```

src/ 📁
└── api/ 📁
└── config/ 📁
└── loaders/ 📁
└── middlewares/ 📁
└── models/ 📁
└── scripts/ 📁
└── utils/ 📁
└── app.js 📄
└── server.js 📄

```

We’ll go through every project component and its purpose.

### `API`

```

api/ 📁
└── auth/ 📁
└── user/ 📁
└── todo/ 📁

```

You can see each folder represents a different module

Here's an example of what's included in the user folder.

```

api/ 📁
└── user/ 📁
  ├── user.controller.js 📄
  ├── user.route.js 📄
  ├── user.service.js 📄
  └── user.test.js 📄
  ├── user.validation.js 📄

```

As you can see all the files related to the user are located here. If I want to add a separate file for validation, I just add a user.validation.js file to the user directory. If I want to add some tests, I can add user.test.js. Any files I need for user, go into the user directory. Simple.

If I need to support versioning I can just rename user to userV1 or maybe structure the api folder differently by including version number in the folder structure as follows:

```

api/ 📁
└── v1/ 📁
  └── auth/ 📁
  └── user/ 📁
  └── health/ 📁
  └── upload/ 📁
└── v2/ 📁
  └── user/ 📁
  ...

```

### `Config`

Configuration files for third party APIs/services like db connection, auth, etc.

### `Loaders`

Split the startup process into modules

### `Middlewares`

This folder would contain all the middleware that you have created, whether it be authentication/some other function.

### `Models`

This folder would contain all your database schema files

### `Scripts`

For long running npm scripts

### `Utils`

The common functions that you would require multiple times throughout your code

### `app.js`

This file contains only the API declaration is separated from the network related configuration (port, protocol, etc). This allows testing the API in-process, without performing network calls, with all the benefits that it brings to the table: fast testing execution and getting coverage metrics of the code. It also allows deploying the same API under flexible and different network conditions. Bonus: better separation of concerns and cleaner code

### `server.js`

This file is basically the entry point of the Node.js app
