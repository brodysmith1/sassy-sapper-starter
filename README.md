# Sassy Sapper starter

Minimal Sapper boilerplate using Rollup and Sass. Includes sensible base styles to get the ball rolling.

Other features:

- TailwindCSS colors as Sass variables (+ the useful utility classes)
- Markdown `.md` files to generate wordy pages. See `/routes/notes`
- Basic menu button


### install and run

```bash
npm i
npm run dev
```

### deploy

```bash
npm run build && npm start
```

.. will build production site, disabling live reloading and activating the appropriate bundler plugins.

### a note on exporting

Sapper only exports pages that are reachable via links from the root page.
To force build other pages in your site, add this to the "export" script in package.json:
```
--entry \"/path-to-page /path/to/another/page\" 
```

#### src/node_modules/images

Images added to `src/node_modules/img` can be imported into your code using `import 'img/<filename>'`.

### static

Files in this directory will be available directly under the root URL, e.g. an `image.jpg` will be available as `/image.jpg`.

### service worker

The default [service-worker.js](src/service-worker.js) will preload and cache static files, by retrieving a list of `files` from the generated manifest:

```js
import { files } from '@sapper/service-worker';
```
