import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import imageResize from 'image-resize-util/utils/image-resize';

export default class ApplicationController extends Controller {
    sizes = [200, 400, 600];

    @tracked imageUrls = [];

    @action
    async handleFileChange({ target }) {
        const { files } = target;
        const img = files[0];
        const blobs = await Promise.all(this.sizes.map(async size => await imageResize(img, {maxWidth: size})));

        this.imageUrls = blobs.map(blob => window.URL.createObjectURL(blob));
    }
}
