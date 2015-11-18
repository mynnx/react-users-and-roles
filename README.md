React Users & Roles
===================

### aka (Webpack, React, ES6, React-Bootstrap) boilerplate

Usage:

```
npm install
npm start
```

### Important details (things I learned while doing this):

In order to use Twitter Bootstrap with Webpack:

 * Use the `url-loader` and the `file-loader` to load Bootstrap's fonts
 * Use the `imports-loader` to inject jQuery into modules
 * Include the Bootstrap CSS path in the `css-loader` include path

Sourcemaps are enabled, but this breaks debugging - #fixme!

Uses `babel-plugin-react-transform` and `react-transform-hmr` for hot module reloading
  * Modules are hot-reloaded, but this setup doesn't reload when constructors are modified.  Refreshes are occasionally necessary.

### Screenshot

![Screenshot](http://mynnx.github.io/react-users-and-roles/screenshot.png)
