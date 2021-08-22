let button = document.querySelector("#btn");

button.addEventListener("click", (event)=>{
    event.preventDefault();

    sendApiRequest();

    renderJoke();
})

async function sendApiRequest(){
    let userInput = document.querySelector("#input").value
    // console.log(userInput);

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Imy8aA9dRlGS5Hw29PRMCTEFFbNrus4k&q=${userInput}`)
    // console.log(response);

    
    let gifs = response.json();

    //gifs is throwing a promise 
    // and that can be handeled in two ways
    // 1. then/catch
    // 2. try and catch
    // watch this:https://www.youtube.com/watch?v=2C1W2CpnLWA
    
    // 1.
    gifs.then( (res)=>{
        useApiData(res);
    })
    .catch((err)=>{
        console.log(err);
    });




    //2.
    // try{
    //     let res = await response.json();
    //      useApiData(res);
    // }
    // catch(err){
    //     console.log(err);
    // }

}


function useApiData(res) {
    document.querySelector("#wrapper").innerHTML = `<img src = "${res.data[0].images.original.url}" >`

}

function renderJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{             // for resolve
        return (response.json()); // added json bz we need it in json from
    })          // promise pending thats why using then again
    .then((data)=>{
       // console.log("the data is:", data);
       
        var joke = data.value;
        document.querySelector("#advice").innerHTML = joke;
    })     
    .catch((err)=>{
        console.log(err)
    });                       //for rejected or error    
     
}







// advice slip api

// fetch('https://api.adviceslip.com/advice')
// .then((response)=>{
//     // console.log(response);
//     return (response.json());
// })
// .then((data) =>{
//     // console.log(data);

//     var adv = data.slip.advice;
    
//     document.querySelector("#advice").innerHTML = adv;
// })
// .catch((err)=>{
//     console.log(err)
// });