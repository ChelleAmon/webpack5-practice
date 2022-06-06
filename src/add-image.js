import Dog from './dog1.jpeg';

function addImage(){
    const img = document.createElement('img');
    img.alt = "Dog";
    img.src = Dog;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage