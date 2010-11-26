(function($){

	module('Methods', {
		teardown: function(){
			$.metronome.stop();
			$.metronome.event= 'tick';
			$(document).unbind('tick');
		}
	});

	test( 'Both its public methods are exposed under the namespace', function(){
		expect(2);

		equal(typeof $.metronome.start, 'function', '$.metronome.start method');
		equal(typeof $.metronome.stop, 'function', '$.metronome.stop method');

	});

	asyncTest( 'Default metronome (2 Hz) is started using `$.metronome.start()` without param', function(){
		expect(3);

		testStart(undefined, function(){
			start();
		});

	});

	asyncTest( '10 Hz metronome is started using `$.metronome.start(10)`', function(){
		expect(3);

		testStart(10, function(){
			start();
		});

	});

	asyncTest( '100 Hz metronome is started using `$.metronome.start(100)`', function(){
		expect(3);

		testStart(100, function(){
			start();
		});

	});

	test( 'Ticking metronome is stopped by `$.metronome.stop()`', function(){
		expect(1);

		$.metronome.start().stop();
		equal($.metronome.ticking, false, 'Metronome not ticking');

	});

	function testStart(tempo, callback){
		var
			tempo= tempo || $.metronome.tempo,
			expected= 5 * 1000 / tempo

		// Assert `start` method existence
		equal(typeof $.metronome.start, 'function', '$.metronome.start');

		$(document).bind('tick', function(){
			// Count tick elapsed
			if (ticks++ == 5){

				// Compare expected and actual elapsed time
				equal(Math.round((new Date() - beginning) / 10) * 10, expected, '5 ticks on ' + tempo + ' Hz took approximately ' + expected + ' miliseconds (+- 10%)');

				// Execute callback at the end of the test
				callback.apply(this);
			}
		});
		var
			// Track number of ticks
			ticks= 0,
			// Record test beginning
			beginning= new Date()

		// Run the metronome
		$.metronome.start(tempo);

		// Assert it actually is ticking
		equal($.metronome.ticking, true, '$.metronome.ticking on ' + (tempo || $.metronome.tempo) + ' Hz');
	}

})(jQuery);