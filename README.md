# ampersand-jid-datatype-mixin

A mixin for supporting XMPP JIDs as a state datatype.

## Install

```sh
$ npm install ampersand-jid-datatype-mixin
```

## Example

```javascript
var State = require('ampersand-state');
var JIDMixin = require('ampersand-jid-datatype-mixin');

var StateWithJID = State.extend(JIDMixin, {
    props: {
        to: 'jid',
        from: 'jid'
    }
});

var ex = new StateWithJID();
ex.to = 'foo@example.com/bar';

console.log(ex.to.bare);
// -> 'foo@example.com'
console.log(ex.to.resource);
// -> 'bar'
```

## License

MIT
