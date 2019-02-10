# Sandscape

Create custom escapings :)

Sandscape enables you to create your own escapings for whateve your purpose may be. However be warned, implementing a custom escaping solution should be done with extreme caution, using escaping libraries built for your specific purpose (like a SQL query escaper, a html escaper, w/e) is always a better solution. Sandscape is intended for use cases where such libraries do not exist.

## Escaping

The escape export has 3 inputs: The string to sanitize, the array of strings to prefix with the escape character, and the escape character/string itself.

```js
import { escape } from "sandscape" // or const {escape} = require('sandscape')
console.log(escape("hello world", ["o"], "o")) // returns "helloo woorld"
```
