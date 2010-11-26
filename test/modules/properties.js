(function($){

	module('Properties', {
		teardown: function(){
			$.metronome.stop();
			$.metronome.event= 'tick';
			$(document).unbind('tick');
		}
	});
	
	asyncTest( 'Event being triggered on document can be customized using $.metronome.event configuration variable', function(){
		expect(1);

		$.metronome.event= 'foo';
		$.metronome.start(10);
		$(document).bind('foo', function(){
			ok(true, 'Customized event name gets triggered on document');
			start();
		});

	});

	test( 'Default tempo can be customized using $.metronome.tempo configuration variable', function(){
		expect(1);

		$.metronome.tempo= 10;
		equal($.metronome.start().tempo, 10, 'Default tempo changed');

	});

})(jQuery);