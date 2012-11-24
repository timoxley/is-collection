var isCollection = require('is-collection')
var assert = require('timoxley-assert')
var domify = require('component-domify')

describe('identifying non-collections', function() {
  it('correctly identifies JS primitives as non-collections', function () {
    assert.equal(0, isCollection(function(){})); // functions should fail
    assert.equal(0, isCollection('string'));
    assert.equal(0, isCollection(12345));
    assert.equal(0, isCollection(null));
    assert.equal(0, isCollection(undefined));
    assert.equal(0, isCollection(/regexp/));
    assert.equal(0, isCollection(new Date()));
  })
})

describe('identifying collections', function() {
  it('correctly identifies arrays', function() {
    assert.equal(1, isCollection([1, 2]));
    assert.equal(1, isCollection([]));
  })
  it('correctly identifies arguments objects', function() {
    assert.equal(2, isCollection(arguments), 'arguments should be arraylike'); // arguments collection
  })
})

it('detects window is not a collection', function() {
  assert.equal(0, isCollection(window));
})

describe('testing against dom', function() {
  it('fails for single nodes', function() {
    assert.equal(0, isCollection(domify('<div></div>')[0])); // single nodes should fail
  })

  it('detects htmlelement collections are array-like', function() {
    document.body.appendChild(domify('<span></span>')[0])
    document.body.appendChild(domify('<span></span>')[0])
    assert.equal(2, isCollection(document.getElementsByTagName('span')));
  })

  it('specifically identifies nodelists as a special collection', function() {
    assert.equal(2, isCollection(document.querySelectorAll('span')), 'nodelists should be specifically identified as a special collection'); // NodeList
  })
})
