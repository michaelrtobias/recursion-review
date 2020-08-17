// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  var element = document.body;
  console.log(element);




  var recursiveFunction = function(element) {
    // if (element.length > 0) {
    //   recursiveFunction(element);
    // }

    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }

    if (element.childNodes.length > 0) {
      for (var i = 0; i < element.childNodes.length; i++) {
        recursiveFunction(element.childNodes[i]);
      }
    }

  };

  recursiveFunction(element);

  return result;
};
