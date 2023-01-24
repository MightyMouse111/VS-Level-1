

/////////////////////Best one: Nyjia Helped me./////////////////////////////////////////
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var letters  = "abcdefghijklmnopqrstuvwxyz"

var dot = ":"


function forception(people, letters) {
    var newArr = []
/////////////////////////////////////////////////////////////////////////////////////////////////
        //Create a for loop for people.
    for(var i = 0; i < people.length; i++) {

        //Push each person one by one plus our semicolon into the new array to get://
        //"Jon:", "Jacob:", etc.
        newArr.push(people[i] + dot)
        // console.log(people[i], "people")
/////////////////////////////////////////////////////////////////////////////////////////////////
        //Create for loop for letters within our for loop for people.
        for(var j = 0; j < letters.length; j++) {
            // console.log(letters[i], "letters")

            //Now we can capitalize the letters like so://
            var capitalize = letters.toUpperCase()

            //Then we have to split the string like so://
            var split = capitalize.split("")
            //Finally we have to have the newArr push the for loop for letters then have it split each of them like so://
            newArr.push(split[j])
        }
    }
    //Then we use the console log for the newArr and add a comma and qoutes with the text "newArr" to display in the terminal window like so://
    console.log(newArr, "newArr")
}

//Then we have to run the function with its parameters like so://
forception(people, letters)
