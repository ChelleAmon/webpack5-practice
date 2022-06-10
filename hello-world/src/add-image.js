import Dog from './dog1.jpeg';
import altText from './altText.txt';

function addImage(){
    const img = document.createElement('img');
    img.alt = altText;
    img.src = Dog;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage