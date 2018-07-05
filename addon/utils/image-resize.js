import Pica from 'pica';
import { hash } from 'rsvp';

export default function imageResize(
  image,
  { maxWidth = 800, maxHeight = 600, keepRatio = true },
  resizeOptions
) {
  const resizer = new Pica();

  return new Promise(res => {
    const sourceCanvas = document.createElement('canvas');
    const sctx = sourceCanvas.getContext('2d');
    const img = new Image();

    const offScreenCanvas = document.createElement('canvas');

    var image_width = maxWidth,
        image_height = maxHeight;

    img.onload = function() {
      sourceCanvas.width = img.width;
      sourceCanvas.height = img.height;
      sctx.drawImage(img, 0, 0);

      if (keepRatio) {
        image_width = image.width,
        image_height = image.height;

        if (image.width >= image.height) {
          var imgRatioW = image.width / maxWidth;
          image_width = maxWidth;
          image_height = image.height / imgRatioW;
        } else if (image.height > image.width) {
          var imgRatioH = image.height / maxHeight;
          image_width = image.width / imgRatioH;
          image_height = maxHeight;
        }
      }

      offScreenCanvas.width = image_width;
      offScreenCanvas.height = image_height;

      res({ sourceCanvas, offScreenCanvas });
    };
    img.src = URL.createObjectURL(image);
  })
    .then(({ sourceCanvas, offScreenCanvas }) =>
      resizer.resize(sourceCanvas, offScreenCanvas, resizeOptions).then(result => hash({
        result,
        blob: resizer.toBlob(result, image.type, 0.9),
      }))
    )
    .then(({ result, blob }) =>
      Object.defineProperties(blob, {
        type: {
          value: image.type,
        },
        name: {
          value: image.name,
        },
        lastModified: {
          value: image.lastModified,
        },

        width: {
          value: result.width,
        },

        height: {
          value: result.height,
        },
      })
    );
}
