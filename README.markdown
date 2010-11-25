[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Metronome_Nikko.jpg/80px-Metronome_Nikko.jpg" title="Example of mechanical metronome (courtesy of wikipedia.org)" style="float:left; margin: 0 30px 30px 0;">][image]


jQuery Metronome Plugin 0.1
===========================

_A [metronome][metronome] is any device that produces regular, metrical ticks (beats)._ [courtesy of [wikipedia.org][wikipedia]]

Simply put, when __jQuery Metronome__ plugin is `start`ed it _ticks_ (triggers `tick` event) on document level and keeps doing that periodically until `stop`ped. It is an event-based wrapper of built-in `setInterval` (well, `setTimeout` to be precise) for jQuery.

Requires any version of [jQuery][jquery]


---

## $.metronome.start([tempo])

	$.metronome.start(); // will tick once every second (default tempo)
	$.metronome.start(10); // will tick 10 times a second

Each metronome tick then triggers "tick" event bindable on document like so:

	$(document).bind('tick', function(){
		... code which gets executed on each tick...
	});


## $.metronome.stop()

	$.metronome.stop(); // will stop ticking


---

## $.metronome.tempo

Default metronome tempo in ticks per second (Hz). Defaults to 1 Hz.

	$.metronome.tempo= 10; // will set default tempo to 10 Hz


## $.metronome.event

Name of the event periodically triggered on the document. Defaults to "tick".

	$.metronome.event= "foo"; // will trigger "foo" event on each tick


## $.metronome.ticking

Boolean value asserting that metronome is ticking.

	$.metronome.ticking; // will return `true` in case of a ticking metronome


---

## Open-source, of course!

Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
Copyright (c) 2010 [Petr Vostrel][vostrel]


[metronome]:http://en.wikipedia.org/wiki/Metronome
[image]:http://en.wikipedia.org/wiki/File:Metronome_Nikko.jpg
[wikipedia]:http://wikipedia.org
[jquery]:http://jquery.com
[vostrel]:http://petr.vostrel.cz
