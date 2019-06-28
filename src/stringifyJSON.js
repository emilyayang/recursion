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
x				| ''{"x":1 '
y 				| ''{"x":1,"y":2'
z				| ''{"x":1,"y":2,"z":3'
end of obj      | ''{"x":1,"y":2,"z":3'}''

*/

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "string" || typeof obj === "boolean" || typeof obj === "number" ) {
  	return " \' " + obj + " \' ";
  }
  else if (obj.length === 0) {
    return "";
  }
  else if (typeof obj === "object") {
  	if (!Array.isArray(obj)) {
	  	var keys = Object.keys(obj);
	   	// var values = Object.values(obj);
	   	for (var i = 0; i < keys.length; i++) {
	   		var keyString = " ' " + keys[i] + " ' "; //quotes around key
        var value = obj[keys[i]]; // value
        delete obj[keys[i]] //delete current key value pair
        var outputArray = [];
        keyString = 
        outputArray.push(keyString + ": " + value + ", " + stringifyJSON(obj))
	   	}
    }
    return outputArray

	} else {
      
  }
};

stringifyJSON({a:1, b: 2})