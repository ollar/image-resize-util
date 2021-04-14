import imageResize from 'dummy/utils/image-resize';
import { module, test } from 'qunit';

var byteCharacters = atob(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII='
);
var byteNumbers = new Array(byteCharacters.length);
for (var i = 0; i < byteCharacters.length; i++) {
  byteNumbers[i] = byteCharacters.charCodeAt(i);
}
var byteArray = new Uint8Array(byteNumbers);
const a = new Blob([byteArray], { type: 'image/png' });

module('Unit | Utility | image-resize', function () {
  test('it works', async function (assert) {
    let result = await imageResize(a);
    assert.ok(result);
  });

  test('it works with maxWidth', async function (assert) {
    let result = await imageResize(a, { maxWidth: 100, keepRatio: false });
    assert.equal(result.width, 100);
  });

  test('it works with maxHeight', async function (assert) {
    let result = await imageResize(a, { maxHeight: 100, keepRatio: false });
    assert.equal(result.height, 100);
  });

  test('null image throws error', async function (assert) {
    try {
      await imageResize();
    } catch (e) {
      assert.throws(e);
    }
  });
});
