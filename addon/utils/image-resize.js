// import Pica from 'pica';

export default function imageResize(
  image,
  { maxWidth = 800, maxHeight = 600 }
) {
  // const resizer = new Pica();
  // const offScreenCanvas = document.createElement('canvas');
  // offScreenCanvas.width = maxWidth;
  // offScreenCanvas.height = maxHeight;
  // return resizer
  //   .resize(image, offScreenCanvas)
  //   .then(result => resizer.toBlob(result, image.type, 0.9));

  const promise = new Promise((yea, nah) => {
    var img = new Image();
    var imageUrl = URL.createObjectURL(image);

    const IMG_MAX_WIDTH = maxWidth;
    const IMG_MAX_HEIGHT = maxHeight;

    if (image.type.indexOf('image') < 0) {
      return nah();
    }

    img.onload = function() {
      var oc = document.createElement('canvas'),
        octx = oc.getContext('2d');

      var image_width = img.width,
        image_height = img.height;

      if (img.width >= img.height) {
        var imgRatioW = img.width / IMG_MAX_WIDTH;
        image_width = IMG_MAX_WIDTH;
        image_height = img.height / imgRatioW;
      } else if (img.height > img.width) {
        var imgRatioH = img.height / IMG_MAX_HEIGHT;
        image_width = img.width / imgRatioH;
        image_height = IMG_MAX_HEIGHT;
      }

      oc.width = image_width;
      oc.height = image_height;

      octx.drawImage(img, 0, 0, oc.width, oc.height);

      return oc.toBlob(
        blob => {
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
              value: image_width,
            },

            height: {
              value: image_height,
            },
          });

          return yea(blob);
        },
        {
          type: image.type,
        }
      );
    };

    img.src = imageUrl;
  });

  return promise;
}
