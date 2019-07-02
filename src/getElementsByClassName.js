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
  var body = document.body;
  var output = [];
  var byClassName = function(element) {
  	 if (element.classList !== undefined && element.classList.contains(className)) {
  		// console.log(element.classList)
  		output.push(element)
  	}
  	if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
      	byClassName(element.childNodes[i]);
      }
  	} 
  }
  byClassName(body);
  return output;
}









// 	var nodes =;
//   	for (var i = 0; i < nodes.length; i++) {
//   		console.log(nodes[i].className)
//   		if (nodes[i].className === name) {
//   			console.log([nodes[i]].concat(getElementsByClassName(name, nodes[i].childNodes)));
//   			return [nodes[i].className].concat(getElementsByClassName(name, nodes[i].childNodes));
//   		// } if (nodes[i].hasChildNodes()) {
//   		// 	getElementsByClassName(name, nodes[i].childNodes)
//   		}
//   	}
// };
