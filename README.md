# mokolodi1:helpers

This package contains a set of helper functions that make using Meteor easier. Feel free to use it, but honestly I've mainly created this for myself.

## Installation

```
$ meteor add mokolodi1:meteor-helpers
```

## Blaze helpers

| Helper                | Description |
| --------------------- | ----------- |
| `not`                 | NOT of the first argument |
| `or`                  | OR of first two arguments |
| `and`                 | AND of first two arguments |
| `compare`             | Compares with `===` |
| `ne`                  | Compares with `!==` |
| `neither`             | True if neither argument is truthy |
| `isUndefined`         | Checks with `===` against `undefined` |
| `print`               | Calls `console.log` |
| `fromNow`             | Moment.js's `fromNow`, updates every 10 seconds |
| `length`              | Returns length of arrays and Mongo cursors |
| `getSession`          | Session.get() |
| `getReactive`         | Calls `.get()` on reactive variable in params |
| `getInstanceReactive` | Calls `.get()` on reactive variable in the current Template instance |
| `getInstanceVar`      | Returns the specified variable attached to `Template.instance()`. Useful for passing a ReactiveVar to a child template. |

### Examples

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

<p>
  There are {{getInstanceReactive "counter"}} apple pies.
</p>
```

## Server helpers

`Moko.ensureIndex` adds an index to a collection. See the [mongodb docs](https://docs.mongodb.org/manual/reference/method/db.collection.ensureIndex/) for more information. If there is an exception creating the index, it will be thrown.

Example:
```js
Moko.ensureIndex(CollectionName, {
  field: -1,
  otherField: 1,
});
```
