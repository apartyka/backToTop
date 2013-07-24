$(function() {

	/**
	 * # Scroll To Top
	 * Used for iOS and other mobile devices to scroll the window to the top and hide the address bar
	 */
	window.scroll(0,1);

});


;(function ($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = 'backToTop',
        defaults = {
            pageOffset: 0.75,
            haltFadeSpeed: 3000,
            clicked: false  // passed to scrollBottom() and clickEvents(). keep as false.
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend({}, defaults, options);

        this.defaults = defaults;
        this.name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        // Place initialization logic here
        // We already have access to the DOM element and
        // the options via the instance, e.g. this.element
//        console.log('init() this: ', this);
//        console.log('init() this.element: ', this.element);

        this.scrollBottom();
        this.clickEvents();
    };
    // init()

    Plugin.prototype.scrollBottom = function () {
        var docW,
            docH,
            viewportW,
            viewportH,
            vertScrollPosition = 0,
            prevScrollPosition = 0,
            fadeOutTimer,
            $this = $(this.element),
            o = this.options,

            /**
            * Update the document variables that store the current window and document dimensions.
            * Webkit browsers have a problem where the viewport width used by JavaScript is not the
            * same value for the viewport width used by the CSS rendering engine.  This method
            * normalizes the javascript width value to match the value used by style sheets.
            */
            updateDocDims = function () {
                docW = $(document).width();
                docH = $(document).height();
                viewportW = document.documentElement.clientWidth;
                viewportH = document.documentElement.clientHeight;
            },

            timedFadeOut = function () {
                window.clearTimeout(fadeOutTimer);

                fadeOutTimer = window.setTimeout(function () {
                    $this.stop().fadeOut('fast');
                }, o.haltFadeSpeed);   //haltFadeSpeed setting
            };

        updateDocDims();

        $(window).on('scroll', function () {
            var offset = o.pageOffset,
                pageTopOffset = viewportH * offset,   // set a value relative to the top of the page that we never want backToTop to display
                vertScrollPosition = $(this).scrollTop(),
                isVisible = $this.is(':visible');

            if (o.clicked === false) {
                if (vertScrollPosition <= pageTopOffset ||
                    vertScrollPosition >= prevScrollPosition) {
                    $this.stop().fadeOut('fast');
                }

                if (isVisible === false &&
                    vertScrollPosition < prevScrollPosition &&
                    vertScrollPosition > pageTopOffset
                    ) {
                    $this.stop().fadeIn('fast', function () {
                        timedFadeOut();
                    });
                }

                if (isVisible === true) {
                    timedFadeOut();
                }
            }

            prevScrollPosition = vertScrollPosition;
        });

    };
    // scrollBottom()

    Plugin.prototype.clickEvents = function () {
        var $this = $(this.element),
            o = this.options;

        $this.on('click', function (ev) {
            ev.preventDefault();

            o.clicked = true;

            //console.log('clicked === true');
            $('body,html').stop().animate({
                scrollTop: 0
            }, 800, function () {
                o.clicked = false;
            });

            $this.stop().fadeOut('fast');
        });
    };
    // clickEvents()

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin(this, options));
            }
        });
    };

/** defaults that can be overwritten
    pageOffset: 0.75,
    haltFadeSpeed: 3000,
    clicked: false  passed to scrollBottom() and clickEvents(). keep as false.
 */
    $('.back-to-top').backToTop();

    $('.back-to-top.test').backToTop({
        pageOffset: 1.0,
        haltFadeSpeed: 300
    });

})(jQuery, window, document);