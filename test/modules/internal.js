(function($){

	module('Internals', {
		teardown: function(){
			$.metronome.stop();
			$(document).unbind('tick');
		}
	});
	
	test( 'Both its internal methods are also exposed under the namespace', function(){
		expect(2);

		equal(typeof $.metronome.tick, 'function', '$.metronome.tick method');
		equal(typeof $.metronome.trigger, 'function', '$.metronome.trigger method');

	});

	asyncTest( '$.metronome.tick triggers tick immediately and schedule next tick', function(){
		expect(2);

		var
			ticks= 0
		
		$(document).bind('tick', function(){
			switch(ticks++){
				case 1:
					ok(true, 'Immediate tick');
					break;
				case 2:
					ok(true, 'Next scheduled tick');
					start();
			}
		})
		$.metronome.tick();
		
	});
	
	asyncTest( '$.metronome.trigger triggers the tick on document', function(){
		expect(1);

		$(document).bind('tick', function(){
			ok(true, '"tick" event triggered');
			start();
		})
		$.metronome.trigger();
		
	});

})(jQuery);