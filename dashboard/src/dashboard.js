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