# objectflip

npmjs module to flip an object so keys are values and values are keys.

# Installation

	npm install objectflip
	
or

	yarn add objectflip
	
# Usage

Pass in an object, and returns an object:

	import objectflip from "objectflip";
	
	console.log(objectflip({ "Hello": 123, "world": "gary" }));
	> { "123": "Hello", "gary": "world" }
	
Useful for creating inverse maps.

