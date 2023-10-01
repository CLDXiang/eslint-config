# @cldxiang/eslint-config

Forked from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Usage

### Install

```bash
pnpm add -D eslint @cldxiang/eslint-config
```

### Create config file

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
// eslint.config.js
import cldxiang from '@cldxiang/eslint-config'

export default cldxiang()
```

With CJS:

```js
// eslint.config.js
const cldxiang = require('@cldxiang/eslint-config').default

module.exports = cldxiang()
```

### More

See [@antfu/eslint-config](https://github.com/antfu/eslint-config)
