<p align="center"><br>
<img src="https://raw.githubusercontent.com/this-work/onion/master/icon.png" width="150">
</p>

# <p align="center">Onion Framework</p>

<p align="center">Component framework for Nuxt 4+</p>

## Installing as Module

### Requirements

* Nuxt 4+

### Installation

Install the Onion Framework in your Nuxt project:

```bash
pnpm install git+https://github.com/this-work/onion.git#master
```

### Configuration

Add the Onion Framework to your `nuxt.config.ts` file as a module:

```js
export default defineNuxtConfig({
  modules: ['@this/onion'],
})
```

### Theme Configuration (Optional)

Customize the framework settings like colors and themes in your `nuxt.config.ts`:

```js
export default defineNuxtConfig({
  modules: ['@this/onion'],
  onion: {
    theme: {
      css: '@/assets/themes/default/base/main.scss',
      config: '@/assets/themes/default/config/variables',
    },
  },
})
```

## Local Development

### Requirements

* Node.js (see `.nvmrc` for recommended version)
* npm or [pnpm](https://pnpm.io/installation) (recommended package manager)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/this-work/onion.git
cd onion
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Playground

The framework includes a playground application located in the `playground/` directory. Use `pnpm dev` to start the development server and test components in real-time.
