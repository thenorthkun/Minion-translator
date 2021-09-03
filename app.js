// console.log("Hello! Script is working ")

// alert("This script works")

// var username = prompt("What your name")  /* INPUT */

// var welcomeMessage = "This script works"  + username  /* PROCESSING */

// alert(welcomeMessage)  /* OUTPUT */

var txtInput = document.querySelector(".txt-input")
var outputDiv = document.querySelector(".output")
var btnTranslate = document.querySelector(".btn-translate") 


var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something's wrong with server, try again after sometime")
}

function clickHandler() {

    var inputText = txtInput.value;  //taking input or reading text


    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json()) //converting reponse into JSON form
    .then(json => {
        var translatedText = json.contents.translated; //take translated test from that JSON
        outputDiv.innerText = translatedText;  //output
    })
    .catch(errorHandler)
    
}



btnTranslate.addEventListener("click", clickHandler)