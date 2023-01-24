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

document.getElementById("clear-button").addEventListener('click', function(){

    const allMessages = document.getElementsByClassName("messages");
    console.log("message class list: " ,allMessages[0].children)
    // allMessages[0].innerHTML = ""
    
   while(allMessages[0].children.length > 0) { 
        allMessages[0].children[0].remove()
   }
// messages[0].textContent = "you're great";
// messages[1].textContent = "thanks!";
// messages[2].textContent = "you're welcome";
// messages[3].textContent = "you're great";
})


////-----------------------------------------------------------------

const themeDropDown = document.getElementById("theme-drop-down")
themeDropDown.addEventListener("click", colorTheme)

///
function colorTheme(){
    //grab right and left messages from html file and save them as a variable
    //use if else statement and place a for loop inside of these statements. we will be looping over the right messages and then we will have a separate for loop for the left messages
    
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
    // newDiv.className = "newDiv";

    

    //create classname used above
    const allMessages = document.getElementsByClassName("message")
    console.log(allMessages)

    if(allMessages[allMessages.length-1].classList.contains("right")){
        newDiv.classList.add("message", "left")
          // if it's theme-one, 
            //  newDiv.style.backgroundColor = LEFT, theme-one bg color
            // and text color
            // else 
            //  newDiv.style.backgroundColor = LEFT, theme-two bgcolor
            // and text color
    }
    else{
        newDiv.classList.add("message", "right")
                  // if it's theme-one
            //  newDiv.style.backgroudColor = right, theme-one bg color
            // and text color
            // else 
            //  newDiv.style.backgroundColor = right, theme-two bgcolor
            //  and text color
    }

    newDiv.textContent = newMessage

    // 
    // grab the current theme 
    // if it's theme-one, 
    //  newDiv.style.backgroundColor = lightblue
    // else 
    //  newDiv.style.backgroundColor = black
    messagess.append(newDiv)
    console.log(newMessage)
    form.input.value = ""
    console.log(messagess)
    console.log(newDiv)
})