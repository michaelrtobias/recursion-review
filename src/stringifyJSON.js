// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var typeofObject = typeof obj;

  if (typeofObject === 'number') {
    return '' + obj + '';
  } else if (obj === null) {
    return '' + null + '';
  } else if (typeofObject === 'boolean') {
    return '' + obj + '';
  } else if (typeofObject === 'string') {
    return '"' + obj + '"';
  } else if (typeofObject === 'object') {
    if (Array.isArray(obj)) {

      var result = '[';
      for (var i = 0; i < obj.length; i++) {
        result += stringifyJSON(obj[i]);
        if (i !== obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
      return result;
    } else {
      var result = '{';
      for (var key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined ) {
          break;
        }
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        if (key !== Object.keys(obj).pop()) {
          result += ',';
        }

      }

      result += '}';
      return result;
    }

  } else if (typeofObject === 'function') {
    return '';
  } else if (typeofObject === undefined) {
    return {};
  }


};
