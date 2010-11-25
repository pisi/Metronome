/**
 *
 * jQuery Metronome Plugin
 * =======================
 * Simple periodic triggering of "tick" event on the document
 *
 * @license Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Version: 0.1
 * Created during SVN outage on 2010-11-25
 *
 * Requires jQuery 1.0 or higher
 */

jQuery.metronome || (function($, document){

	var
		metronome=
		jQuery.metronome= {

			/*
				Name of the event periodically triggered on the document

				Usage:
					$.metronome.event= "foo"; // will trigger "foo" event on each tick
			*/
			event:       'tick',

			/*
				Default metronome tempo in ticks per second (Hz)

				Usage:
					$.metronome.tempo= 10; // will set default tempo to 10 Hz
			*/
			tempo:            2,

			/*
				Usage:
					$.metronome.start(); // will tick twice a second (default tempo)
					$.metronome.start(10); // will tick 10 times a second

				Each metronome tick then triggers "tick" event bindable on document like so:

					$(document).bind('tick', function(){
						... code which gets executed on each tick...
					});
			*/
			start: function(tempo){

				if (metronome.ticking) metronome.stop();

				interval= 1000 / (tempo || metronome.tempo || 1);
				metronome.tick();
				metronome.ticking= true;
				return metronome

			},

			/*
				Usage:
					$.metronome.stop(); // will stop ticking
			*/
			stop: function(){

				clearTimeout(timeout);
				metronome.ticking= false;
				return metronome

			},

			/*
				Internal usage:
				$.metronome.tick(); // calls event trigger and schedules itself for the next run
			*/
			tick: function(){

				metronome.trigger();
				timeout= setTimeout(metronome.tick, interval);
				return metronome

			},

			/*
				Internal usage:
				$.metronome.trigger(); // triggers the event on document
			*/
			trigger: function(){

				$(document).trigger(metronome.event);
				return metronome

			},

			/*
				Boolean value asserting that metronome is ticking

				Usage:
					$.metronome.ticking; // will return `true` in case of a ticking metronome
			*/
			ticking: false

		},
		
		/*
			Reference to the scheduler tick timeout
		*/
		timeout,
		
		/*
			Computed interval value in miliseconds based on the tempo
		*/
		interval

})(jQuery, document);
