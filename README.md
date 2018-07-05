[![Build Status](https://travis-ci.org/ollar/image-resize-util.svg?branch=master)](https://travis-ci.org/ollar/image-resize-util)

image-resize-util
==============================================================================

Takes an image and resizes it to given size, uses pica.js

Installation
------------------------------------------------------------------------------

```
ember install image-resize-util
```


Usage
------------------------------------------------------------------------------

```
imageResize(file: File, {
    maxWidth: Number = 800,
    maxHeight: Number = 600,
    keepRatio: Boolean = true
}, resizeOptions: PicaOptionsObject) => Promise(Blob)
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd image-resize-util`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
