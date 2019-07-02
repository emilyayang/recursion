// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


/* ** Strategy ** 
Check the typeof of the input obj. 
    if string return " /' " + string + " /' "  
    if boolean return " /' " + boolean + " /' "  
    if number return " /' " + num + " /' "  
    if undefined return undefined 

    if object use :
	if !Array.isArray 
		use object.keys and object.values to access key values
		loop through obj keys 
		create var key = " /' " + key " /' " 
		and join values and keys at same i into new string using recursion //have to alter the input somehow?
		return " /'{ " + 	output	+  " }/' " 
	else if its an array
        loop through 
        and join values into new string using recursion //have to alter the input somehow?
        return " /'[ " + 	output	+  " ]/' " 

// ** FOR ARRAYS **
// Input: [1, 2, 3]
// Desired Output: "[1, 2, 3]"

Iteration					| outputString		
0 							| ''['
1 or array[0]				| ''[1'
2 or array[1]				| ''[1,2'
3 or array[2]				| ''[1,2,3'
4 or array.length			| ''[1,2,3]''


// ** FOR OBJECTS **
// Input: {x: 1, y: 2, z: 3}
// Desired Output: '{"x":1,"y":2,"z":3}'

Iteration		| outputString
0				| ''{'
x				| ''{"x":1 '  ===  ''{' + '"x":1'
y 				| ''{"x":1,"y":2'
z				| ''{"x":1,"y":2,"z":3'
end of obj      | ''{"x":1,"y":2,"z":3'}''

*/

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

    if (typeof obj === "number" || typeof obj === null || typeof obj === "boolean") {
        return `${obj}`;
    } else if (typeof obj === "string") {
        return `"${obj}"`;
    } else if (typeof obj === "function" || typeof obj === "symbol" || Number.isNaN(obj) || obj === Infinity || obj === undefined || obj === null) {
        return "null";
    } else if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            var output = "[";
            if (obj.length === 0) {
                return `[]`;
            } else {
                for (var i = 0; i < obj.length; i++) {
                    output += stringifyJSON(obj[i]) + ",";
                }
                return output.slice(0, -1) + "]";
            }
        } else if (!Array.isArray(obj)) {
            var output = "{";
            var keys = Object.keys(obj);
            if (Object.keys(obj).length === 0 && obj.constructor === Object) {
                return `{}`;
            } else {
                for (var key in obj) {
                    if (key === undefined || obj[key] === undefined || typeof obj[key] === "function") {
                        return `{}`;
                    } else {
                        output += `"${key}":${stringifyJSON(obj[key])},`
                    }
                }
                return output.slice(0, -1) + "}"
            }
        }
    }
};



