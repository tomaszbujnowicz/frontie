# There is more up to date boilerplate based on Gulp 4 and Webpack. Please consider using this one instead https://github.com/tomaszbujnowicz/frontie-webpack

# Frontie - Front-end Boilerplate

**Frontie is a front-end boilerplate using Gulp for task automation.**

Based on normalize.css, Bootstrap 4 Grid & Responsive breakpoints and enhanced with Twig.js, Sass, Autoprefixer plus Browsersync.
These tools make it a solid front-end boilerplate to get a new project off the ground.

## Features

* [Gulp](http://gulpjs.com/) for task automation

* [Bootstrap 4 Grid System](https://getbootstrap.com/docs/4.1/layout/grid/) as a powerful mobile-first flexbox grid to build layouts of all shapes and sizes

* [Bootstrap 4 Responsive Breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints) as a media queries to create sensible breakpoints

* [Twig.js](https://github.com/twigjs/twig.js) as a templating engine

* [Sass](http://sass-lang.com/) as a CSS preprocessor

* [Autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer) for parsing CSS and add vendor prefixes to rules by Can I Use

* [Browsersync](https://www.browsersync.io/) for time-saving synchronised browser testing

* [Github pages](https://www.npmjs.com/package/gulp-gh-pages) for publishing contents to Github pages

* [Source Maps](https://www.npmjs.com/package/gulp-sourcemaps)

## Usage

### Requirements
Make sure all dependencies have been installed before moving on:

* [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/)
* [Node.js](https://nodejs.org/en/download/)
* [Gulp](http://gulpjs.com/)

### Quick start: Installation
Clone this repository and run
- `npm install` or `yarn` to install dependencies

This will take some time and will install all packages necessary to run Frontie and its tasks.

### Development
- `gulp` to start the server (Browsersync session) and watch for changes

Then visit http://localhost:3000/ *- or a new browser windows popped-up already -* to preview your new website. BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets, assets or content changes.

**There are other tasks available including:**

- `gulp watch` to watch without building /dist (production files) from scratch
- `gulp build` to build a static version of the website inside the /dist folder
- `gulp deploy` to publish contents from /dist folder to Github pages

## Structure

```
|--dist                  # →  Static version of the website ready to upload (never edit)
|
|--node_modules          # →  Node.js packages (never edit)
|--gulpfile.js           # →  Gulpfile tasks
|--package.json          # →  Node.js dependencies and scripts
|--package-lock.json     # →  Node.js lock file (never edit)
|--yarn.lock             # →  Yarn lock file (never edit)
|
|--src                   # →  Site source files
|  |--img                # →  Site images
|  |--css                # →  Site stylesheets
|  |--js                 # →  Site JS
|  |  |--components      # →  Components JS (e.g. navbar)
|  |  |--vendor          # →  Vendor JS - 3rd party libraries
|  |  |--main.js         # →  Main (custom scripts) JS
|  |--templates          # →  Site templates
|  |  |--components      # →  Components templates (e.g. navbar)
|  |  |--layouts         # →  Base templates
|  |  |--partials        # →  Partial templates
|  |  |--components.twig # →  The components page for demo purpose
|  |  |--index.twig      # →  The index page
```

## Components

There are also some default Frontie components ( with basic styling and functionality) included in the package.  
You can easily remove / comment them out in case you don't need them.

* Navbar
* Button

## Notes

### Why don't you include everything from Bootstrap 4?

It's a really great front-end framework for many projects but in some cases it might be just too large and complex.  
I only took what I needed from it which is a grid system and responsive breakpoints.  
If you need more stuff then you can easily import required components or use a dedicated version [Frontie Bootstrap 4](https://github.com/tomaszbujnowicz/frontie-bootstrap4)

## Next Step?

* Upgrade to use Gulp 4, Webpack and Babel or @std/esm

## Copyright and license

Copyright 2018 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
