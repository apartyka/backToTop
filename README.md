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

##Author
Adam Partyka

##Contributors
Matt Toledo
