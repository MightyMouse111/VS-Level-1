//const myHeader = document.getElementById("header")
//console.log(myHeader)

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
h1.className = "header";
document.getElementById("header").appendChild(h1);

const h2 = document.createElement("h2");
h2.innerHTML = '<span class="name">Christopher</span> wrote the JavsScript';
h2.className = "header2";
document.getElementById("header2").appendChild(h2);
//

const messages = document.getElementsByClassName("message");
document.getElementById("clear-button").addEventListener('click', function(){
messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";
})


////-----------------------------------------------------------------

const themeDropDown = document.getElementById("theme-drop-down")
themeDropDown.addEventListener("click", colorTheme)

///
function colorTheme(){
    //grab right and left messages from html file and save them as a variable
    //use if else statement and place a for loop inside of these statements. we will be looping over the right messages and then wel will have a separate for loop for the left messages
    
    const allRightMsgs = document.getElementsByClassName("message right")
    const allLeftMsgs = document.getElementsByClassName("message left")
    const allRightMsgss = document.getElementsByClassName("newDiv")

    
    
    if(themeDropDown.value === "theme-one"){
        for(i = 0; i < allRightMsgss.length; i++){
            allRightMsgss[i].style.backgroundColor = "lightblue"
            allRightMsgss[i].style.color = "black"
        }
        for(i = 0; i < allRightMsgs.length; i++){
            allRightMsgs[i].style.backgroundColor = "lightblue"
            allRightMsgs[i].style.color = "black"
        }
        for(i = 0; i < allLeftMsgs.length; i++){
            allLeftMsgs[i].style.backgroundColor = "burlywood"
        }

    }else if(themeDropDown.value === "theme-two"){
        for(i = 0; i < allLeftMsgs.length; i++){
            allLeftMsgs[i].style.backgroundColor = "red"
        }
        for(i = 0; i < allRightMsgs.length; i++){
            allRightMsgs[i].style.backgroundColor = "black"
            allRightMsgs[i].style.color = "white"
        }
        for(i = 0; i < allRightMsgss.length; i++){
            allRightMsgss[i].style.backgroundColor = "black"
            allRightMsgss[i].style.color = "white"
        }

    }
}
    
    
    

//----------------------------------------
//--------------------------------------------------------------------------------------------------

const form = document["message"]
const messagess = document.getElementsByClassName("messages")[0]
// Submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newMessage = form.input.value

    var newDiv = document.createElement("div")
    newDiv.className = "newDiv";

    

    //create classname used above
    
    newDiv.textContent = newMessage
    messagess.append(newDiv)
    console.log(newMessage)
    form.input.value = ""
    console.log(messagess)
    console.log(newDiv)
})