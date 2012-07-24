# H5YCK 1.3 - HTML5 YAML Compass (SASS) Kickstarter

**v1.3.2**

This is my construction set for starting a new web project. Basically it contains elements from the **[HTML5 Boilerplate](http://html5boilerplate.com/)**, the CSS Framework **[YAML](http://www.yaml.de)**, the CSS preprocessor **[SASS](http://sass-lang.com/)** in combination with the SASS Framework **[Compass](http://compass-style.org/)** and the **[Build Script](https://github.com/h5bp/ant-build-script)** to compress the result.

Also the JavaScript is written in **[CoffeeScript](http://coffeescript.org/)** but all CoffeeScript files are compiled to readable JavaScript (no compression). So you don't need to know CoffeeScript and can work in the compiled JavaScript files.

## Dependencies

* [Node.js](http://nodejs.org/)
* [Grunt.js](https://github.com/cowboy/grunt)
* [SASS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [Phantom.js](http://phantomjs.org/)

## How to use

Clone the project

```bash
git clone https://github.com/michsch/h5yck.git
```

Move into the project folder and fetch your dependencies

```bash
cd h5yck
npm install
sudo npm install grunt-compass
sudo npm install grunt-contrib
```

Start grunt

```bash
grunt
```

## Based on

* [HTML5 Boilerplate](http://html5boilerplate.com/) by Paul Irish (v3.0.1)
* [YAML CSS Framework](http://www.yaml.de) by Dirk Jesse (v4.0.1, Build 120306)
* [CoffeeScript](http://coffeescript.org/)

### Additional

* [Modernizr 2.6.1](http://www.modernizr.com/) incl. [html5shiv 3.6](http://code.google.com/p/html5shiv/)
* [jQuery 1.7.2](http://jquery.com/)
* [accessifyhtml5.js](https://github.com/yatil/accessifyhtml5.js) by Eric Eggert (in file *js/plugins.js* & *assets/js/coffee/plugins.coffee*)
* [syncHeight 1.2](https://github.com/ginader/syncHeight) by Dirk Ginader
* [Accessible-Tabs](https://github.com/ginader/Accessible-Tabs) by Dirk Ginader
* [FancyBox 2](http://fancyapps.com/fancybox/) - the CSS is integrated into SASS (*css/sass/_fancybox.scss*)
* [Hyphenator 4.0.0](http://code.google.com/p/hyphenator/) by Mathias Nater
* [Webfont-Load-Enhancer 1.2](https://github.com/MichaelvanLaar/Webfont-Load-Enhancer) by Michael van Laar
* [jquery-mousewheel 3.0.6](https://github.com/brandonaaron/jquery-mousewheel) by Brandon Aaron

## Static Webserver

h5yck comes with a built-in static webserver.
Just move to the project folder and run

```bash
node server.js
```

This will open a webserver on port 8080.
Just go to 'http://localhost:8080' in your browser.

You can specify a different port, by adding it as an argument to your server call

```bash
node server.js 8040
```

## Changelog

* **v1.0.0**: first public version with YAML 4.0
* **v1.0.1**: YAML v4.0.1 (Build 120306), jQuery update to 1.7.2
* **v1.1.0**: some minor bugfixes
* **v1.1.1**: new structure without *assets* directory
* **v1.2.0**: directories and filenames like H5BP v3.0
* **v1.2.1**: minor bugfixes in build-script and compass configuration files
* **v1.2.2**: SMACSS for SASS files
* **v1.2.3**: adding modules directory to ant-build-script configuration
* **v1.3.0**: Grunt.js integration, sass folder in root directory, delete ant-build-script, MIT license in readme.md
* **v1.3.1**: Modernizr 2.6.1 and html5shiv 3.6
* **v1.3.2**: minor bugfixes: Modernizr without hyphens, Link to Modernizr JS file in index.html

## License

This kickstarter is released under the MIT License.

Please notice that other resources mentioned above could be published under different licenses.
So **YAML** is published under the [Creative Commons Attribution 2.0 License](http://creativecommons.org/licenses/by/2.0/) and FancyBox 2 under [Creative Commons Attribution-NonCommercial 3.0](http://creativecommons.org/licenses/by-nc/3.0/).

* [YAML license informations and prices](http://www.yaml.de/license.html)
* [FancyBox license informations and prices](http://fancyapps.com/fancybox/#license)

---

H5YCK - HTML5 YAML Compass (SASS) Kickstarter
Copyright (C) <2012>  <Michael Schulze | [@michsch](https://twitter.com/michsch)>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.