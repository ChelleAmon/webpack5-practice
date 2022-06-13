import Heading from "../heading/heading.js";
import DogImage from '../dog-image/dog-image.js';


class DogPage {
    render() {
        const heading = new Heading();
        heading.render('Dog');
        
        const dogImage = new DogImage();
        dogImage.render()        
    }
}

export default DogPage;

