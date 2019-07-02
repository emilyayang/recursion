// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Input: A string (name of the class)
// Output: An array of every element that has that class
// Constraints: Must use recursion

/* ** Strategy ** 
Initialize an output array. Set another variable 
equal to document.body.childNodes. Then loop through
the nodeList to see if the element .includes() the
input class name. If it does, then we can push to 
output array. If the element has child nodes, use
recursion.

*/


var getElementsByClassName = function(className) {
	var output = [];
	var nodeList = document.body.childNodes;
  	for (var i = 0; i < nodeList.length; i++) {
  		if (nodeList[i].hasChildNodes()) {
  			return getElementsByClassName(nodeList[i]);
  		} else if (nodeList[i].includes(className)) {
  			output.push(nodeList[i]);
  		}
  	}
  	return output;
};
 