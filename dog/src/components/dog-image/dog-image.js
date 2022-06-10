import Dog from './dog1.jpeg';
import './dog-image.scss';

class DogImage {
    render(){
        const img = document.createElement('img');
        img.src = Dog;
        img.alt = 'Dog';
        img.classList.add('dog-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}


export default DogImage;