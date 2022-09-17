# three-js-boilerplate

Three.js Boilerplate using **Singleton Design Pattern**. </br>
This Boilerplate uses Vite build tool.</br></br>

## Written Plain using:

- HTML
- SCSS
- Javascript

### SCSS config

```bash
  # in your VSCode open your settings.json [`ctrl` + `p`]
  # then paste this scss config format to follow the predefined path

  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/src/css"
    }
```

### Setup

```bash
    # install all dependencies
    npm i
    # start dev server
    npm run dev
    # open on browser using this port
    http://127.0.0.1:5173/
```

### assets.js

> always keep the name 'model' for the key name as the `Model.js` uses dot notation `this.resources.items.model`.
> this boilerplate is deisgned for `glbModel` file type only.

```bash
export default [
  {
    name: "model",
    type: "glbModel",
    path: "/models/simple-animation.glb",
  },
];
```
