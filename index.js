const toString = (...args) => {
	return args.map((item) => {
		return Boolean(item) ? "1": "0";
	}).join("");
};

const booleanMap = (mapDef, ...args) => {
	const str = toString(...args);
	
	Object.keys(mapDef).forEach((key) => {
		if (key.length !== args.length) {
			throw new Error(`The mapping key "${key}" length does not match the number of arguments being passed so will never be used, either fix or remove it.`);
		}
	});
	
	return mapDef[str];
};

module.exports = {
	toString,
	booleanMap
};
