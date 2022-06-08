import Heading from "./components/heading/heading.js";
import DogImage from './components/dog-image/dog-image.js';
import _ from 'lodash';


const heading = new Heading();
heading.render(_.upperFirst('Dog'));

const dogImage = new DogImage();
dogImage.render()