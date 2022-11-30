//To make red work on first click without jumping back and forth on colors:
//Make another parent element titled "Select" like this so when selected it will revert to white background.
const colors = ["--Select Color--", "red", "blue", "green"]

//-----------------------------------------------------------

//HOW NYJIA SHOWED ME:
// const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    console.log("is this being hit also")
//This console.log shows if its being hit on chrome dev tools.
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)

        console.log(option.value, "valur")
    }
    dropDown.addEventListener('change', colorChange)
    return dropDown
}

//To make the red work on the first click without jumping to another color and back create this.
var select = colors[0]
var red = colors[1]
var blue = colors[2]
var green = colors[3]
//We dont need a variable saved to the new Parent element "Select". 
//However the numbers will change since "Select" is the first one in the array.

//-----------------------------------------------------------
//HOW NYJIA SHOWED ME:
// var red = colors[0]
// var blue = colors[1]
// var green = colors[2]
//-----------------------------------------------------------

function colorChange(e) {
    console.log("is this being hit")
    //This console.log shows if its being hit on chrome dev tools.
    //grab color from colors array
    // e.target.backgroundColor = e.target.value
    //Example of line 50 shown on lines 55, 57, 58, 59, 60, 61, 62, 63.

 //---------------------------------------------------------   
    //HOW NYJIA SHOWED ME:
    // const item = e.target.parentElement
    // console.log(e.target.parentElement, "item")
    // if(e.target.value === red) {
    //     item.style.backgroundColor = "red"
    // }else if(e.target.value === blue){
    //     item.style.backgroundColor = "blue"
    // }else if(e.target.value === green) {
    //     item.style.backgroundColor = "green"
    // }
//-----------------------------------------------------------
//To make the red work on the first click without jumping to another color and back create this.
    const item = e.target.parentElement
    console.log(e.target.parentElement, "item")
    if(e.target.value === select) {
        item.style.backgroundColor = "white"
    }else if(e.target.value === red){
        item.style.backgroundColor = "red"
    }else if(e.target.value === blue) {
        item.style.backgroundColor = "blue"
    }else if(e.target.value === green) {
        item.style.backgroundColor = "green"
    }

}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}



