'use strict';

module.exports = {
  name: 'image-resize-util',
  included() {
    this._super.included.apply(this, arguments);
    this.import('node_modules/pica/dist/pica.js');
    this.import('vendor/shims/pica.js');
  },
};
