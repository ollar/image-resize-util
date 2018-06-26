import Pica from 'pica';

export default function imageResize(
  image,
  { maxWidth = 800, maxHeight = 600 }
) {
  const resizer = new Pica();
  const offScreenCanvas = document.createElement('canvas');
  offScreenCanvas.width = maxWidth;
  offScreenCanvas.height = maxHeight;
  return resizer
    .resize(image, offScreenCanvas)
    .then(result => resizer.toBlob(result, image.type, 0.9));
}
