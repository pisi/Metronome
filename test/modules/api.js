(function($){

	module('API', {
		teardown: function(){
			$.metronome.stop();
			$.metronome.event= 'tick';
			$(document).unbind('tick');
		}
	});

	test( 'Exposes itself as `$.metronome` namespace', function(){
		expect(1);

		equal(typeof $.metronome, 'object', '$.metronome namespace');

	});

	test( 'All methods return back the metronome object to allow chaining', function(){
		expect(4);

		// We verify this by checking existence of `tempo` configuration option inside the namespace
		ok($.metronome.start() === $.metronome, '$.metronome.start()');
		ok($.metronome.stop() === $.metronome, '$.metronome.stop()');
		ok($.metronome.tick() === $.metronome, '$.metronome.tick()');
		ok($.metronome.trigger() === $.metronome, '$.metronome.trigger()');

	});

})(jQuery);