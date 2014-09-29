# MEAN Todo Tutorial

Tutorial pembuatan todo web app menggunakan MEAN (Mongo DB, ExpressJS, AngularJS, NodeJS) Stack.

## Instalasi

[MEAN.IO](http://mean.io/)

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).

### Tools Prerequisites
* NPM - Node.js package manage; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ npm install -g bower
```

### Optional [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
* Grunt - Download and Install [Grunt](http://gruntjs.com).
```
$ npm install -g grunt-cli
```

## Additional Packages
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* Passport - Defined as npm module in the [package.json](package.json) file.
* AngularJS - Defined as bower module in the [bower.json](bower.json) file.
* Twitter Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* UI Bootstrap - Defined as bower module in the [bower.json](bower.json) file.

## Step 01 - Quick Install

  The quickest way to get started with MEAN is to install the `meanio` package from NPM.

  Install MEAN CLI:

    $ [sudo] npm install -g meanio@latest
    $ mean init todoApp
    $ cd todoApp && npm install

  We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:

    $ grunt

  If grunt aborts because of JSHINT errors, these can be overridden with the `force` flag:

    $ grunt -f

  Alternatively, when not using `grunt` you can run:

    $ node server

  Then, open a browser and go to:

    http://localhost:3000

## Step 02 - Generate Package Todo

Do following command in your terminal

  mean package todos

You will get the following custom packages

        |_ packages
          |_ custom
            |_ todos
              |_ public
                |_ assets
                |_ controllers
                |_ directives
                |_ routes
                |_ services
                |_ views
                |__ todos.js
              |_ server
                |_ config
                |_ controllers
                |_ models
                |_ routes
                |_ views
              |__ app.js


## Step 03 - Server Routing & Remove Authentication

In file packages > custom > todos > app.js, remove the roles authenticated so that we can access the todo routes without login

    roles: ['authenticated'],

Then in add a controller and model in the server. You may test the server using POSTMAN, to get all todos, or add new todo

    http://localhost:3000/todos


## Step 04 - Angular Client Routing & Service

Male a controller, services, and fix the roues of the public folder.
Don't forget to change the app.js to the same route of client.
