# Frontie - Front-end HTML5 Boilerplate

Frontie is a front-end HTML5 boilerplate using Gulp for task automation.
Based on HTML5 Boilerplate and Bootstrap 4 Grid system enhanced with Twig.js, SASS, Autoprefixer plus Browsersync.
These tools make it a solid front-end boilerplate to get a new project off the ground.

## Core features

* [Gulp](http://gulpjs.com/)  
  For task automation

* [HTML5 Boilerplate](https://html5boilerplate.com/)  
  The web’s most popular front-end template

* [Bootstrap 4 Grid System](http://getbootstrap.com/docs/4.0/layout/grid/)  
  Powerful mobile-first flexbox grid to build layouts of all shapes and sizes

* [Bootstrap 4 Responsive Breakpoints](http://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)  
  Media queries to create sensible breakpoints

* [Twig.js](https://github.com/twigjs/twig.js)  
  As a templating engine

* [Sass](http://sass-lang.com/)  
  As a CSS preprocessor

* [Autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer)  
  Parse CSS and add vendor prefixes to rules by Can I Use

* [Browsersync](https://www.browsersync.io/)  
  Time-saving synchronised browser testing

## Installation requirements
* [Node.js](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)

## Quick start: Installation
**Download all the project dependencies:**
```sh
npm install
```

## Development: Tasks
**Watch and develop:**
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

## Working Directories
* All the files that you will be working with can be found at /src
* Production files can be found at /dist
* CSS: The main file is located at /sass/main.scss
* JS: The main file is located at /js/main.js
* JS: Third party JS libraries can be placed at /js/vendor
* Twig: templates are located at /templates

## Notes

### Why don't you include everything from Bootstrap 4?

It's a really great front-end framework for many projects but in some cases it might be just too large and complex. I only took what I needed from it which is grid system and responsive breakpoints. If you need more stuff then you can easily import it.

## Copyright and license

Copyright 2017 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
