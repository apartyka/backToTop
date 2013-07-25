;(function ($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = 'backToTop',
        defaults = {
            pageOffset: 0.75,   // value determines distance from the top of the page where backToTop will fadeOut
            haltFadeSpeed: 3000,
            clicked: false  // passed to scrollBottom() and clickEvents(). keep as false.
        };

    // plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this.defaults = defaults;
        this.name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
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
                }, o.haltFadeSpeed);
            };

        updateDocDims();

        $(window).on('scroll', function () {
            var offset = o.pageOffset,
                pageTopOffset = viewportH * offset,   // value relative to the top of the page where backToTop will fadeOut
                vertScrollPosition = $(this).scrollTop(),
                isVisible = $this.is(':visible');

            // if backToTop has not been clicked
            if (o.clicked === false) {
                // if you're scrolling back down the page from scrolling up, hide it. the default condition on page load
                if (vertScrollPosition <= pageTopOffset ||
                    vertScrollPosition >= prevScrollPosition) {
                    console.log('condition 1');
                    $this.stop().fadeOut('fast');
                }
                // if you're scrolling up the page, show it
                if (isVisible === false &&
                    vertScrollPosition < prevScrollPosition &&
                    vertScrollPosition > pageTopOffset
                    ) {
                    $this.stop().fadeIn('fast', function () {
                        console.log('condition 2');
                        timedFadeOut();
                    });
                }
                // if you're scrolling up the page, widget is visible, call timedFadeOut for when scrolling stops
                if (isVisible === true) {
                    console.log('condition 3');
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

            $('body,html').stop().animate({
                scrollTop: 0
            }, 800, function () {
                o.clicked = false;
            });

            $this.stop().fadeOut('fast');
        });
    };
    // clickEvents()

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

//    $('.back-to-top').backToTop({
//        pageOffset: 1.0,
//        haltFadeSpeed: 300
//    });

})(jQuery, window, document);