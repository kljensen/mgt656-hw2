## Example Node.js project for MGT-656 HW5

This is a minimal [Node.js](http://nodejs.org/)
application that we are using for the second
homework assignment in MGT-656 at
the Yale School of Management.

Please refer to the class website for the
"official" instructions. Briefly, you will
need to clone this project in
[GitHub](http://www.github.com) and then
create a new workspace on [Cloud9](http://c9.io)
based on your repo. Then you'll get the
application running and alter it.

What are all these files, you ask? Below you'll find a description of each one - hopefully this will help you get started.

* `server.js` - this is your server code. The `express` module is how you tell your application what to do with different requests -- check out the [Express website](http://expressjs.com) for more.
* `package.json` - this is Node's configuration file for your project. Inside you'll find information about the project, along with a list of dependencies (like Express) that you can install into `node_modules/` with `npm install`.
* `node_modules/` - the folder containing all of your dependencies. Usually you don't need to do anything to it, but if your app is misbehaving, sometimes removing and reinstalling `node_modules/` by running `rm -rf node_modules/` and `npm install` will fix it.
* `package-lock.json` - this describes the exact state of your `node_modules/` tree without uploading the tree itself. npm modules are always being updated, so this allows you to know exactly what you're running and standardize this across installations.
* `.gitignore` - this tells Git which files and folders to ignore -- for example, you don't want to push `node_modules/` to GitHub.
* `Procfile` - this is how you tell Heroku how to run your code. You shouldn't need to mess with this one.
* `.eslintrc.json` - this is where we customize the rules for how your code gets linted (checked for style/errors) - most of them come from the `eslint-config-airbnb` package. You also shouldn't need to modify this one (please don't, actually).
* `README.md` - this file :)
