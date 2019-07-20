# Boolean Map
Tiny helper to map boolean values to a string.

## Example
```js
const result = booleanMap({
	"11": "1st",
	"01": "2nd",
	"10": "3rd",
	"00": "4th"
}, true, false);

console.log(result); // Outputs "3rd"
```

## Install
```bash
npm i @irrelon/booleanmap
```
