# objectflip

npmjs module to flip an object so keys and values are identical, takes an object with keys and returns object with keys and values set identically.

e.g.

	import objectflip from "objectflip";
	
	var object = {
		"Hello": null,
		"world": null
	};
	
	> console.log(objectflip(object));
	{ "Hello": "Hello", "world": "world" }
	>

