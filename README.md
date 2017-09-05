# objectflip

npmjs module to flip an object so keys and values are identical, takes an object with keys and returns object with keys and values set identically.

# Installation

	npm install objectflip
	
or

	yarn add objectflip
	
# Usage

Pass in an object, and returns an object:

	import objectflip from "objectflip";
	
	console.log(objectflip({ "Hello": null, "world": null }));
	> { "Hello": "Hello", "world": "world" }
	
Useful for creating objects which are constants where the value is identical to the name.
