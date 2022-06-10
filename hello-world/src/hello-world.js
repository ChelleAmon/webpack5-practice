import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render('hello world'); //lodash => _.upperFirst(), making the first letter in uppercase. not the best solution

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()


// a code snippet that will check NODE_ENV variable if mode option from webpack.config.js is set to 'PRODUCTION' mode
    if (process.env.NODE_ENV === 'production'){
        console.log('Production mode');
    }else if (process.env.NODE_ENV === 'development'){
        console.log('Development mode');
    }
// Production and Development Mode handle errors differently


