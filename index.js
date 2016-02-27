

window.onload = function() {
  // Query />(.*?)</g here ?
  fetchText('body');
};


function fetchText(element) {
  var oldtext = $(element).clone()
            .children()
            .remove()
            .end()
            .text();

  $(element).contents().filter(function(){ return this.nodeType == 3; }).replaceWith('');
  $(element).children().each(function(index, child) {
    setTimeout(function() {
      fetchText(child);
    });
  });
  $(element).append(convert(oldtext));
}
