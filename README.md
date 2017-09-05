# objectflip

npmjs module to flip an object so keys and values are identical, takes an object with keys and returns object with keys and values set identically.

# Installation

	npm install objectflip
	
or

	yarn add objectflip
	
# Usage

Pass in an object, and returns an object:

	import objectflip from "objectflip";
	
	var object = ;
	
	> console.log(objectflip(object));
	{ "Hello": "Hello", "world": "world" }

