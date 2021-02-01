var RECOL = {};

/** page-scroller */
RECOL.pageScroller = function () {
	"use strict";

	$( "#recollection" ).on( "click", "a[href^=\"#\"]", function ( e ) {
		var speed = 500,
			href = $( this ).attr( "href" ),
			target = $( href === "#" || href === "" ? "html" : href.replace( ":", "\\:" ) ),
			position = target.offset().top;

		$( "body, html" ).animate( {
			scrollTop: position
		}, speed, "swing" );

		e.preventDefault();
	} );
};

/** boot */
$( document ).ready( function () {
	"use strict";

	RECOL.pageScroller();
} );
