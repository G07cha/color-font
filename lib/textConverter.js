/**
 * Convert text to html with span tags
 * @param  {String} text  Text to convert
 * @param  {Object} rules Additional classes to append in form %letter%: %class%
 * @return {String}       Converted text
 */
function convert(text, rules) {
  var converted = '';
  rules = rules || {};

  if(text) {
    for(var i = 0, len = text.length; i < len; i++) {
      var letter = text[i].toLowerCase();

      converted += '<span class="colorfont ';
      if(rules[letter]) {
        converted += rules[letter];
      } else {
        converted += letter;
      }

      converted += '">' + text[i] + '</span>';
    }
  }

  return converted;
}

// For testing
try {
  module.exports = convert;
} catch(err) {}
