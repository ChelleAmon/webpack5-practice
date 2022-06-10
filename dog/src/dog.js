import Heading from "./components/heading/heading.js";
import DogImage from './components/dog-image/dog-image.js';

const heading = new Heading();
heading.render('Dog');

const dogImage = new DogImage();
dogImage.render()

import('HelloWorldApp/HelloWorldButton')
    .then(HelloWorldButtonModule => {
        const HelloWorldButton = HelloWorldButtonModule.default;
        const helloWorldButton = new HelloWorldButton()
        helloWorldButton.render();
    })