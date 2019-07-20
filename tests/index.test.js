const assert = require("assert");
const {booleanMap, toString} = require("../index");

describe("toString()", () => {
	it("Maps boolean values to the correct strings", () => {
		const str1 = toString(true, true, false, true, false);
		const str2 = toString(true, true);
		
		assert.strictEqual(str1, "11010", "The string generated is correct");
		assert.strictEqual(str2, "11", "The string generated is correct");
	});
	
	it("Maps coerced boolean values to the correct strings", () => {
		const str1 = toString("foo", 1, 0, {}, null);
		const str2 = toString(undefined, null);
		
		assert.strictEqual(str1, "11010", "The generated string is correct");
		assert.strictEqual(str2, "00", "The generated string is correct");
	});
});

describe("booleanMap()", () => {
	it("Converts a binary string to a mapped value", () => {
		const str = booleanMap({
			"111": "1st",
			"010": "2nd",
			"011": "3rd",
			"100": "4th",
			"000": "5th"
		}, false, {}, null);
		
		assert.strictEqual(str, "2nd", "The mapped string is correct");
	});
	
	it("Throws an error when a key being mapped is not the length of the args being passed in", () => {
		let catchErr = 0;
		let err;
		
		try {
			const str = booleanMap({
				"11": "1st",
				"010": "2nd",
				"011": "3rd",
				"100": "4th",
				"000": "5th"
			}, false, {}, null);
		} catch (e) {
			err = e;
			catchErr++;
		}
		
		assert.strictEqual(catchErr, 1, "The error was thrown correctly");
		assert.strictEqual(err.toString(), `Error: The mapping key "11" length does not match the number of arguments being passed so will never be used, either fix or remove it.`, "The error was thrown correctly");
	});
});
