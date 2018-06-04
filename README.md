# Frontie - Front-end Boilerplate

**Frontie is a front-end boilerplate using Gulp for task automation.**

Based on normalize.css, Bootstrap 4 Grid & Responsive breakpoints and enhanced with Twig.js, Sass, Autoprefixer plus Browsersync.  

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

## Usage

### Installation requirements
* [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/)
* [Node.js](https://nodejs.org/en/download/)
* [Gulp](http://gulpjs.com/)

### Quick start: Installation
**Clone this repository and run**
```sh
npm install or yarn
```

This will take some time and will install all packages necessary to run Frontie and its tasks.

### Development
**While developing your website:**
```sh
gulp
```

Then visit http://localhost:3000/ *- or a new browser windows popped-up already -* to preview your new website. BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets, assets or content changes.

**Watch:**
```sh
gulp watch
```

**To build a static version of the website inside the /dist folder**
```sh
gulp build
```

**Publish contents from /dist folder to Github pages:**
```sh
gulp deploy
```

## Structure

```
|--dist                  // Production files / static version of the website ready to upload
|--src                   // Source files / development files
|  |--img                // There is where all images go
|  |--css                // CSS files in the root of this folder will end up in /dist/css/main.css
|  |--js                 // JS files will be compiled to /dist/js/main.min.js (main.js + /components/.*) and /dist/vendor.js (/vendor/.*)
|  |  |--components      // This is where all components JS files should be placed
|  |  |--vendor          // This is where third party JS libraries should be placed
|  |  |--main.js         // There is where all custom scripts should go
|  |--templates          // This is where all templates go
|  |  |--components      // This is where components includes live
|  |  |--layouts         // Base layout templates (you can have multiple)
|  |  |--partials        // This is where partials includes live
|  |  |--components.twig // The components page - just for a demo purpose
|  |  |--index.twig      // The index page
```

## Components

There are also some default Frontie components (styling and JS functionality) included in the package.  
You can easily remove / comment them out in case you don't need them.

* Navbar
* Button

## Notes

### Why don't you include everything from Bootstrap 4?

It's a really great front-end framework for many projects but in some cases it might be just too large and complex.  
I only took what I needed from it which is a grid system and responsive breakpoints.  
If you need more stuff then you can easily import it or use dedicated version [Frontie Bootstrap 4](https://github.com/tomaszbujnowicz/frontie-bootstrap4)

## Copyright and license

Copyright 2018 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
