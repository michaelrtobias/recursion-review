// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  var element = document.body;
  var checkForClass = function(element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.childNodes.length > 0) {
      for (var i = 0; i < element.childNodes.length; i++) {
        checkForClass(element.childNodes[i]);
      }
    }
  };

  checkForClass(element);

  return result;
};