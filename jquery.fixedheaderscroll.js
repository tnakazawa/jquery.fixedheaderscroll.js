/**
 * FixedHeaderScroll v0.0.1
 *
 *
 * Copyright 2016, Tasko Inc. - http://tasko.jp/
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

(function( $ ) {
	
	$.fn.fixedHeaderScroll = function( options) {
		
			
		var settings = $.extend( {
			'headerSelector': 'header', // You need to designate the header element in your website.
			'offset':         0, // You can offset the scroll position.
			'smooth':         true, // You can choose if you use smooth scroll or not.
			'smoothDuration': 300, // Scroll speed. (in ms)
			'smoothEasing':   'linear', // Scroll easing.
		}, options);
		
		
		this.click( function(){
			
			if( settings.headerSelector == false) {
				var h = 0;
			} else {
				var headerEl = $( settings.headerSelector);
				var h = headerEl.outerHeight();
			}
			
			var targetEl = $( $(this).attr("href"));
			var t = targetEl.offset().top;
			var s = t - h + settings.offset;
			
			if( settings.smooth) {
				$("html, body").animate({
					scrollTop: s
				}, settings.smoothDuration, settings.smoothEasing);
			} else {
				$("html, body").scrollTop( s);
			}
			return false;
			
		});
		
	};
})( jQuery );