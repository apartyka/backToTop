#Back To Top jQuery plugin
**Version 1.0**

##Description
Originally built as a custom widget for the PGeStore rxd redesign, several global dependencies have been removed for this version. The code has been stripped down and refactored to be used as a plugin.

##How it works
When scrolling back up the widget will appear, giving the user the option to quickly scroll back to the top of the page. This is a nice widget to add for pages with lots of scrolling content.

##Requirements
1. jQuery 1.9.1+
* Sass 3.2+
* position: fixed

##Usage
<pre>
// Called on a jQuery object
$('.your-selector').backToTop();

/**
    Settable Options
    pageOffset: 200,
    haltFadeSpeed: 3000

    $('.your-selector').backToTop({
        pageOffset: 1.0,
        haltFadeSpeed: 300
    });
*/
</pre>

## Setup

HTML5 Starter Kit for Front End Development at Resource
=====

This a customized version of HTML5 Boilerplate that aligns with our best practices (as outlined in the [Front End Development Standards & Best Practices documentation](https://insider.resource.com/docs/DOC-1192)) as well as other starter kits. This is the official Resource HTML5 Starter Kit. **The goal is to have an HTML template that we use to start Front End Projects.**

---

## Setup for new project

````
	cd *your-local-workspace*
	git clone ssh://git@stash.resource.com:7999/vcl/resource-html5-starter-kit.git
	rm -rf .git
	git init
	git add --all
	git commit -m "Initial commit"
	git remote add origin *new-repository-location*
	git push -u origin master
````
Note: you will need to create a Git repository from your Git account online in order to obtain your repository location.
Instructions assume that you have added an [SSH key](https://confluence.atlassian.com/display/STASH023/Adding+an+SSH+key+to+your+Stash+profile+on+Windows) to your Stash profile.

After completing the above, start developing your new project.

---

## Usemin Blocks

These are located in the index.html file and they add hooks for the grunt usemin builder. Anything in these blocks will be concatenated and minified during the grunt build task in the order they are listed.

**CSS Block**

````
    <!-- build:css assets/css/styles.css -->
    <!-- This file is generated from the scss directory and any files that are in the css directory
    - any plugin css should be added to the /assets/css directory and they will be concatenated to the end of the styles.css file
    - all of the css files added to this build block will be concatenated into the styles.css file by the usemin grunt task -->
    <link rel="stylesheet" href="/assets/css/styles.css" />
    <link rel="stylesheet" href="/assets/css/plugin.css" />
    <!-- endbuild -->
````
**JS Block**

````
    <!-- build:js assets/js/main.js -->
    <!-- Additional JS Libraries and Frameworks Here
     - List the js files and libraries below inside of the build block in the order you want them concatenated on build
     - This block is parsed by the usemin grunt task and it generates one main.js file for production -->
    <script src="/assets/js/main.js"></script>
    <script src="/assets/js/plugin.js"></script>
    <!-- endbuild -->
````

---

## Running Locally with Grunt
The *HTML5 Starter Kit* comes with a [Grunt](http://gruntjs.com/getting-started) script that builds the project into a \_compiled folder, compiles scss and minifies it, concatenates js/css files included in the index.html build blocks and minifies them along with gzip compression, optimizes all of the images (png,jpg,jpeg,webp), performs a direct copy of assets/fonts/, assets/media/ and assets/js/libs directories into \_compiled, and updates all of the links in the index file to reference the new minified files.

### Grunt Installation
The Grunt task requires the following dependencies: [Node](http://nodejs.org/), [GruntJS](http://gruntjs.com/), and [Ruby](http://rubyinstaller.org/downloads/) (for Windows).

```
	cd _grunt/
	npm install

```

### Grunt Server - Run it!
Launch a node server that compiles scss and fires a new browser tab with livereload that transforms you into a ROCK STAR!!!

```
	cd _grunt/
	grunt server
```

#### Custom Port
By default the port is `8989` but you can override it by doing the following:

```
	grunt server --port <enter-port-number>
```

### Server for Compiled application
This task will launch the node server with the compiled production code in the _compiled directory

````
    grunt server:dist
````

### Grunt Build
Builds the project into a _compiled folder, compiles scss and minifies it, concatenates js/css files included in the index.html build blocks and minifies them along with gzip compression, optimizes all of the images (png,jpg,jpeg,webp), performs a direct copy of assets/fonts/, assets/media/ and assets/js/libs directories into dist, and updates all of the links in the index file to reference the new minified files. By default, the build will output to: `_compiled/`

```
	cd _grunt/
	grunt build
```

### Grunt Clean
Remove all .sass-cache, .tmp and _compiled/... *just because it's a nice option*

```
	cd _grunt/
	grunt cleanall
```

---

## Sass Setup (without grunt)

### Install Sass
Sass is written in Ruby, so you’ll need Ruby installed as well. If you're using OS X, it's already there. Windows users can get it via the [RubyInstaller](http://rubyinstaller.org/downloads/) for Windows. Linux users can install it with their package manager. Once you have Ruby installed, run the following from the command line to install Sass:

```
gem install sass
```

### Sass --watch
Tell Sass to watch the file and update the CSS every time the Sass file changes:

```
cd assets/
sass --watch scss:css --style compressed
```

**`--style compressed` is not required for development, but it is recommended for production compile of your .scss files**. Read more about Sass compile styles and options: [http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#options](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html).

---

## Directory Structure
Almost every developer has their preferred way of setting up the directory structure. The *HTML5 Starter Kit* aims to create a common structure that can be used for the majority of projects.
With the focus on reusable code (paths of images in CSS, sass --watch, etc), the directory structure of `/assets` is required for Resource development projects unless system (CMS, SI, Client, Platform) has a predefined structure or limitations.

---

## Contents of Starter Kit
* Resource Directory Structure: Outlined in "[Front End Development Standards & Best Practices](https://insider.resource.com/docs/DOC-1192)" document
* SASS setup for projects with comments: [Sass - Syntactically Awesome Stylesheets v1.0](http://sass-lang.com/tutorial.html)
	* global.scss: Intended for global CSS v1.0
	* ie.scss: IE Specific v1.0
	* mixins.scss: global mixins (included on necessary *.scss files in this Starter Kit) v1.0
	* modules.scss: Non-global CSS. Examples: "About Page Only" CSS or a non-resuable component v1.0
	* 2 normalize versions:
		* normalize-full.scss: [necolas.github.com/normalize.css](http://necolas.github.io/normalize.css/) v1.0
		* normalize.scss: a customized version of normalize-full.scss v1.0
	* spacing.scss: [SASS Margin and Padding Starter kit v1.0](https://insider.resource.com/docs/DOC-2570)
	* styles.scss: Used for output of all css v1.0
	* variables.scss: Global variables to be used (included on necessary *.scss files in this Starter Kit) v1.0
* jquery [2 versions]
	* jQuery v1.9.1: [jquery-1-9-1-released](http://blog.jquery.com/2013/02/04/jquery-1-9-1-released/) v1.0
		* CDN, with local minified version v1.0
		* Includes both uncompressed and compressed v1.0
	* jQuery v1.8.3: [jquery-1-9-1-released](http://blog.jquery.com/2013/02/04/jquery-1-9-1-released/) v1.1
		* CDN, with local minified version v1.1
		* Includes both uncompressed and compressed v1.1
* Google Analytics placeholder v1.0
* Favicon placeholders: [ico creator](http://www.consultsarath.com/public-utilities/favicon.aspx) v1.0
	* Updates for additional favicon placeholders for retina and different devices v1.2
	* Apple Touch Icon placeholder: v1.2
* Open Graph placeholder (i.e.: For Facebook ) v1.0
* Windows 8 Meta Data placeholder v1.2
* Twitter Meta Data placeholder v1.2
* Basic HTML5 structure ( ```<header /> , <nav /> , <section /> , <article /> , <footer /> ```): [HTML5 New Elements](http://www.w3schools.com/html/html5_new_elements.asp) v1.0
* <hgroup /> removed v1.2
* Meta tags for description and keywords v1.0
* Meta viewport v1.0
* Meta tag for IE Chrome Frame v1.0
* HTML5 Shiv: [The Story of the HTML5 Shiv &raquo; Paul Irish](http://paulirish.com/2011/the-history-of-the-html5-shiv/) v1.0
* .gitignore: Used for Git. Prevent unnecessary files to be committed by Eclipse, Visual Studio, Windows OS, Mac OS, Python, SVN, SASS, etc v1.0
* README.md: Outline and how to use README files v1.0
* robots.txt: Placeholder to allow all v1.1
* .htaccess: Basic setup from HTML5 Boilerplate v1.1
* Dev Build of Modernizr 2.6.2 v1.2
* Grunt tasks: Creation of files for Resource Git setup (i.e.: `LICENSE`, `CHANGES.md`, etc) v1.3
* Grunt tasks: server, compile SASS, livereload, build, cleanall v1.3
* Grunt tasks: Add .jshintrc settings file and moved `use strict` to inside functions v1.3
* Add 'use strict' to main.js file v1.3

---

## Versions
* **_HTML_Starter_Kit_v1.0** [v1.0]: Initial release. 02/12/2013
* **_HTML_Starter_Kit_v1.1** [v1.1] : Addition of robots.txt, .htaccess, added support for jQuery 1.8.3 (library added in "/lib" folder) 02/13/2013
* **_HTML_Starter_Kit_v1.2** [v1.2]: New meta tags for Twitter and Windows 8, removed \<hgroup/\>, dev build of Modernizr, updates to comments, changes some *.scss to partials 04/16/2013
* **_HTML_Starter_Kit_v1.2.1** [v1.2.1]: Bug fix for `$(window)` to `window` in `main.js` 04/18/2013
* **_HTML_Starter_Kit_v1.3** [v1.3]: Setup for Git, Moved to Stash, Grunt Builds 07/25/2013
* **_HTML_Starter_Kit_v1.3.1** [v1.3.1]: Grunt bug fix 07/31/2013

---

## Contribute to *Resource HTML5 Starter Kit*
````
	git clone ssh://git@stash.resource.com:7999/vcl/resource-html5-starter-kit.git
	git checkout development
````
**Contact Kevin Mack** to confirm that these updates are not already in progress and align with Resource *Technology Investment Process*.

````
	git checkout -b release/*the-enhancement-name*
````

Once we review enhancements, we will merge them into the *development* branch. The *development* branch will be vetted through [The Vetted Code Submission Process](https://insider.resource.com/docs/DOC-3331). Once fully vetted, development will be merged into master as the next release of the *Resource HTML5 Starter Kit*.
### Future Enhancements
* Future enhancements and updates can be found in `TODO` in the root of the `development` branch

