import Heading from "../heading/heading.js";
import DogImage from '../dog-image/dog-image.js';


class DogPage {
    render() {
        const heading = new Heading();
        heading.render('Dog');
        
        const dogImage = new DogImage();
        dogImage.render();
        
        import('ImageCaptionApp/ImageCaption') // dynamic import
            .then(ImageCaptionModule => {
                const ImageCaption = ImageCaptionModule.default;
                const imageCaption = new ImageCaption();
                imageCaption.render('The Dog is beautiful!')            
            }
        )
    }
}

export default DogPage;

