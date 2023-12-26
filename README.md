# @cldxiang/eslint-config

Forked from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

- `tailwind()` for tailwindcss support (require peerDependency `eslint-plugin-tailwindcss`)
- Some rules are modified for my personal preference (see [factory](./src/factory.ts))

## Usage

### Install

```bash
pnpm add -D eslint @cldxiang/eslint-config
```

### Create config file

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
// eslint.config.js
import config from '@cldxiang/eslint-config'

export default config()
```

With CJS:

```js
// eslint.config.js
const config = require('@cldxiang/eslint-config').default

module.exports = config()
```

### More

See [@antfu/eslint-config](https://github.com/antfu/eslint-config)
