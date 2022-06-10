import HelloWorldButton from '../hello-world-button/hello-world-button.js';
import Heading from '../heading/heading.js';


class HelloWorldPage {
    render(){
        const heading = new Heading();
        heading.render('hello world'); //lodash => _.upperFirst(), making the first letter in uppercase. not the best solution

        const helloWorldButton = new HelloWorldButton()
        helloWorldButton.render()
    }
}

export default HelloWorldPage;


