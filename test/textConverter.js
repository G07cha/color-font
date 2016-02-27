var assert = require('assert');
var t = require('../lib/textConverter');


describe('Text converter', function() {
  it('should convert by provided rules', function() {
    var rules = {
      a: 'custom'
    };

    assert.equal(t('ab', rules), '<span class="colorfont custom">a</span><span class="colorfont b">b</span>');
  });

  it('should set own rules(class=letter) if no rules provided', function() {
    assert.equal(t('he'), '<span class="colorfont h">h</span><span class="colorfont e">e</span>');
  });

  it('should convert empty string without errors', function() {
    assert.equal(t(), '');
  });
});
