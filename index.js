'use strict';

module.exports = {
  name: 'image-resize-util',
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/shims/pica/dist/pica.js');
  },
};
