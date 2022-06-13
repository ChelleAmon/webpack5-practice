import NavigationBar from './components/navigation-bar/navigation-bar.js';


const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'Hello World Page'
    },
    {
        url: '/dog-page',
        title: 'Dog Page'
    }
];

//create class instance
const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);


//Get Url
const url = window.location.pathname // taking part of url and it does not contain the domain and port


//Import remote modules dynamically by creating asynchronous function

if(url === '/hello-world-page'){
    import ('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => { 
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render()
    });
}else if (url === '/dog-page'){
    import ('DogApp/DogPage').then(DogPageModule => {
        const DogPage = DogPageModule.default;
        const dogPage = new DogPage();
        dogPage.render();
    })
}



console.log('dashboard');