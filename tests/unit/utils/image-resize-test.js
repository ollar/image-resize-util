import imageResize from 'dummy/utils/image-resize';
import { module, test } from 'qunit';

module('Unit | Utility | image-resize', function() {
  // test('it works', async function(assert) {
  //   const img = new Image();
  //     img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=';

  //   const promise = new Promise(res => {
  //     img.onload = function() {
  //       res(img)
  //     };
  //   });

  //   const _img = await promise;

  //   (async function(window) {
  //     let _imageResize = imageResize.bind(window)
  //     let result = await _imageResize(_img);
  //     assert.ok(result);
  //   })({URL: {
  //     createObjectURL: () => true
  //   }})
  // });

  test('null image throws error', async function(assert) {
    try {
      await imageResize()
    } catch(e) {
      assert.throws(e);
    }
  });
});
