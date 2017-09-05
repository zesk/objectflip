var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function (object) {
	var i, result = {};
	for (i in object) {
		if (hasOwn.call(object, i)) {
			result[String(object[i])] = i;
		}
	}
	return result;
}
