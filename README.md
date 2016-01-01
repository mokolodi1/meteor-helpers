# mokolodi1:helpers

This package contains a set of helper functions that make using Meteor easier. Feel free to use it, but honestly I've mainly created this for myself.

## Installation

```
$ meteor add aldeed:simple-schema
```

## Blaze helpers

Supported helpers include `compare`, `print`, and `length`. Print calls `console.log` with the provided arguments. `Compare` and `length` do exactly what they sound like they do.

```html
<p>
  {{print "This is the text in textField" textField}}

  {{#if compare textField "hello"}}
    The text is hello!
  {{else}}
    The text is not hello :(
  {{/if}}
</p>

<p>
  {{#if length arrayField}}
    arrayField has at least one element.
  {{/if}}
</p>
```

## Server helpers

`Moko.ensureIndex` adds an index to a collection. See the [mongodb docs](https://docs.mongodb.org/manual/reference/method/db.collection.ensureIndex/) for more information. If there is an exception creating the index, it will be thrown.
