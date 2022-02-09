// console.log("banana talk");
// var username=prompt("what is your name?");
// alert("hello " + username);
var btn=document.querySelector("#btn");
var txtArea=document.querySelector(".txt-area");
var output=document.querySelector(".output");
// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// function getTransalationURL(text){
//     return serverURL +"?" +"text"+ text;
// }

function clickHandler(){
 console.log(output.innerText="ba"+txtArea.value) ;
// var inputText=txtArea.value;//taking input

//     fetch(getTransalationURL(inputText))
//     .then(Response =>Response.json())
//     .then(json => console.log(json))
}

// btn.addEventListener("click", function(){
//     console.log("clicked");
//     console.log(txtArea.value);
//      console.log(output.innerText="ba"+txtArea.value);
// })
btn.addEventListener("click", clickHandler)




