# Frontie - Front-end Boilerplate

Frontie is a front-end boilerplate using Gulp for task automation.  
Based on normalize.css, Bootstrap 4 Grid & Responsive breakpoints enhanced with Twig.js, SASS, Autoprefixer and Browsersync.  
These tools make it a solid front-end boilerplate to get a new project off the ground.

## Core features

* [Gulp](http://gulpjs.com/)  
  For task automation

* [Bootstrap 4 Grid System](https://getbootstrap.com/docs/4.1/layout/grid/)  
  Powerful mobile-first flexbox grid to build layouts of all shapes and sizes

* [Bootstrap 4 Responsive Breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)  
  Media queries to create sensible breakpoints

* [Twig.js](https://github.com/twigjs/twig.js)  
  As a templating engine

* [Sass](http://sass-lang.com/)  
  As a CSS preprocessor

* [Autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer)  
  Parse CSS and add vendor prefixes to rules by Can I Use

* [Browsersync](https://www.browsersync.io/)  
  Time-saving synchronised browser testing

* [Github pages](https://www.npmjs.com/package/gulp-gh-pages)  
  Gulp plugin to publish contents to Github pages

* [Source Maps](https://www.npmjs.com/package/gulp-sourcemaps)

## Installation requirements
* [Node.js](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)

## Quick start: Installation
**Download all the project dependencies:**
```sh
npm install / yarn
```

## Development: Tasks
**Build and watch:**
```sh
gulp
```

**Watch:**
```sh
gulp watch
```

**Generate a fresh build of your project to /dist folder:**
```sh
gulp build
```

**Publish contents from /dist folder to Github pages:**
```sh
gulp deploy
```

## Working Directories

* Source  
  All the files that you will be working with can be found at /src

* Production  
  Production files can be found at /dist

* CSS  
  The main file is located at /sass/main.scss

* JS  
  The main file is located at /js/main.js

* JS  
  Third party JS libraries can be placed at /js/vendor

* Twig  
  Templates are located at /templates

## Components

There are also some default Frontie components (styling and JS functionality) included in the package.  
You can easily remove / comment them in case you don't need them.

* Navbar
* Button

## Notes

### Why don't you include everything from Bootstrap 4?

It's a really great front-end framework for many projects but in some cases it might be just too large and complex.  
I only took what I needed from it which is a grid system and responsive breakpoints.  
If you need more stuff then you can easily import it or use dedicated version [Frontie Bootstrap 4](https://github.com/tomaszbujnowicz/frontie-bootstrap4)

## Copyright and license

Copyright 2018 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
