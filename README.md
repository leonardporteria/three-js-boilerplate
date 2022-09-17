# three-js-boilerplate

- HTML
- SCSS
- Javascript
- Vite App

### SCSS config

```bash
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/src/css"
    }
```

```bash
    npm i
    npm run dev
    http://127.0.0.1:5173/
```

### assets.js

> always keep the name 'model' for the key name as the `Model.js` uses dot notation `this.model = this.resources.items.model`.
> this boilerplate is deisgned for `glbModel` files only.

```bash
export default [
  {
    name: "model",
    type: "glbModel",
    path: "/models/simple-animation.glb",
  },
];
```
