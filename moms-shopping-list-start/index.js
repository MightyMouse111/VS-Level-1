    //1st-grab the form and save it to a const name.
const addItem = document["addItem"]
    //2nd-grab our unordered list and save it to a const name.
const list = document.getElementById("list")


    //3rd-create Event Listener for our form "addItem" with a submit event
addItem.addEventListener("submit", function(event){

    //4th-create an event.preventDefault: What the event.preventDefault() does is it does NOT REFRESH the page.    
    event.preventDefault()

    //5th-create list
    const listItem = document.createElement('li')
    list.append(listItem)
    
    //6th-create div for list names
    const div = document.createElement('div')
    const title = addItem.title.value
    div.textContent = title 
    listItem.append(div)
    
    //7th-create edit btn
    const editBtn = document.createElement('button')
    editBtn.textContent = "edit"
    listItem.append(editBtn)
    
    //8th-createdelete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    listItem.append(deleteBtn)

    //9th-clear out input field
    addItem.title.value = ""

    //10th-create functionality for delete button with addEventListener
    deleteBtn.addEventListener("click", removeLi)
    //11th-create function for delete button
    function removeLi() {
        this.parentNode.remove();
    }



})

//JSON stands for JAVA SCRIPT OBJECT NOTATION, Text format for storing and transporting data.