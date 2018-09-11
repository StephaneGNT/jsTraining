'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(str){
	let newStr="";
	for(let i=0;i<str.length;i++){
		newStr+=str[i].toUpperCase();
	}
	return newStr;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell("TEST"), "TEST")
assert.strictEqual(yell("testagain"), "TESTAGAIN")
assert.strictEqual(yell("tEsTencORe"), "TESTENCORE")

// End of tests */
