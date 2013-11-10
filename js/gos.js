$(function ()
{
	// Console Log -- Shorthand
	function log()
	{
		for( a in arguments )
			console.log( arguments[ a ] );
	}
	
	// Scolling Event
	(function ($)
	{
		var header	= $( '#main-header' ),
			scrollt	= $( '#scroll-to-top' ),
			chnglng	= $( '#change-language' ),
			orighh	= header.height(),
			_win	= $(window),
			resizer	= function ()
			{
				if ( _win.scrollTop() > orighh )
				{
					header.addClass( 'resized' );
					scrollt.add( chnglng ).addClass( 'active' );
				}else
				{
					header.removeClass( 'resized' );
					scrollt.add( chnglng ).removeClass( 'active' );
				}
			};
			
		resizer();
		$(document).on( 'scroll', function ( _ev )
		{
			resizer();
		});
		
		scrollt.on( 'click', function ( _ev )
		{
			_ev.preventDefault();
			$('html, body').animate( {scrollTop: 0}, 500 );
		});
	})(jQuery);
	
	// Menu Toggle
	(function ($)
	{
		var menu		= $( '#main-menu' ),
			toggle		= menu.find( '.menu-icon' ),
			container	= menu.find( '.menu-links' );
			
		toggle.on( 'click', function ( _ev )
		{
			_ev.preventDefault();
			
			if ( menu.hasClass( 'active' ) )
			{
				container.hide( 'drop', {direction: 'right'}, 300 );
				menu.removeClass( 'active' );
			}else
			{
				container.show( 'drop', {direction: 'right'}, 300 );
				menu.addClass( 'active' );
			}
		});
	})(jQuery);
	
	// Port The Log Function To The Global `window` Object
	window.log	= log;
	
	// Trigger `Theme_Is_Ready` Event
	$(document).trigger( 'theme_is_ready' );
});