'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(str){
	let newStr="*";
	for(let i=0;i<str.length;i++){
		newStr+=str[i].toLowerCase();
	}
	newStr+="*";
	return newStr;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper("TEST"), "*test*")
assert.strictEqual(whisper("testagain"), "*testagain*")
assert.strictEqual(whisper("tEsTencORe"), "*testencore*")
assert.strictEqual(whisper(""), "**")
// End of tests */
