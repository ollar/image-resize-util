(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['pica/dist/pica'],
      __esModule: true,
    };
  }

  define('pica/dist/pica', [], vendorModule);
})();
