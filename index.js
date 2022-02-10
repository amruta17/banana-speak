
var btn=document.querySelector("#btn");
var txtArea=document.querySelector(".txt-area");
var output=document.querySelector(".output");
var serverURL="https://api.funtranslations.com/translate/minion.json";

 function getTransalationURL(text){
    return serverURL +"?" +"text"+ "=" + text;
}
function errorHandeler(error){
    console.log("error occured");
    alert("something wrong with server..try again ater sometimw!..")
}

function clickHandler(){
var inputText=txtArea.value; //taking input

   fetch(getTransalationURL(inputText))
   .then(Response =>Response.json())
   .then(json => {
       var translatedText= json.contents.translated;
    output.innerText=translatedText;
    })
   .catch(errorHandeler)
}



btn.addEventListener("click", clickHandler)



// btn.addEventListener("click", function(){
//     console.log("clicked");
//     console.log(txtArea.value);
//      console.log(output.innerText="ba"+txtArea.value);
// 
 //console.log(output.innerText=txtArea+ txtArea.value); //important in case of server is not there comment all server art and recomment is you will see the translated output
// console.log("banana talk");
// var username=prompt("what is your name?");
// alert("hello " + username);

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
