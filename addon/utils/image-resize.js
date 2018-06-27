import Pica from 'pica';

export default function imageResize(
  image,
  { maxWidth = 800, maxHeight = 600 }
) {
  const resizer = new Pica();

  return new Promise(res => {
    const sourceCanvas = document.createElement('canvas');
    const sctx = sourceCanvas.getContext('2d');
    const img = new Image();

    const offScreenCanvas = document.createElement('canvas');
    offScreenCanvas.width = maxWidth;
    offScreenCanvas.height = maxHeight;

    img.onload = function() {
      sourceCanvas.width = img.width;
      sourceCanvas.height = img.height;
      sctx.drawImage(img, 0, 0);

      res({ sourceCanvas, offScreenCanvas });
    };
    img.src = URL.createObjectURL(image);
  })
    .then(({ sourceCanvas, offScreenCanvas }) =>
      resizer
        .resize(sourceCanvas, offScreenCanvas)
        .then(result => resizer.toBlob(result, image.type, 0.9))
    )
    .then(blob =>
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

        // width: {
        //   value: image_width,
        // },

        // height: {
        //   value: image_height,
        // },
      })
    );
}
