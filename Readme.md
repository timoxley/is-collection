# is-collection

Evaluates _obj_ to determine if it's an array, an array-like collection, or
something else. This is useful when working with the function `arguments`
collection, `NodeLists` and `HTMLElement` collections.
 
Note: This implementation doesn't consider elements that are also
collections, such as `<form>` and `<select>`, to be array-like.

## Installation

    $ component install timoxley/is-collection

## Usage

```js

isCollection(document.querySelectorAll('div')) // => truthy (2)
isCollection([]) // => truthy (1)

function(arguments) {
  isCollection(document.querySelectorAll('div')) // => truthy (2)
}()

```

## API
 
### isCollection(object)
Takes an object and returns a number indicating the results of the test:
 
  * 0: Neither an array nor an array-like collection.
  * 1: Real array.
  * 2: Array-like collection.

## Credit

Original code adapted from
[YUI](http://yuilibrary.com/yui/docs/api/files/yui_js_yui-array.js.html#l252).

## License

[BSD](http://yuilibrary.com/license/)
