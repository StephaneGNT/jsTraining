'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(str){
	return str.slice(0,2);
}
function keepLast(str){
	return str.slice(str.length-2);
}
function keepFirstLast(str){
	return str.slice(2,4);
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('abcde'), 'ab')
assert.strictEqual(keepLast('abcde'), 'de')
assert.strictEqual(keepFirstLast('abcde'), 'cd')

// End of tests */
