// console.log("banana talk");
// var username=prompt("what is your name?");
// alert("hello " + username);
var btn=document.querySelector("#btn");
var txtArea=document.querySelector(".txt-area");
var output=document.querySelector(".output");



btn.addEventListener("click", function(){
    console.log("clicked");
    console.log(txtArea.value);
     console.log(output.innerText="ba"+txtArea.value);
})




