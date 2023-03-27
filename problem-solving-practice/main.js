// //------------------------------------------------------------------------------------------
// //**********PART 1: FINISHED**********//
const arr = [6, 13, 250, 3];            //#1
// // const arr = [3, 5, 2, 8, 1];         //#2
// // const arr = [-13, 40, 3, 0, 19, 22]; //#3
function sortThem(a, b) {
    return a - b
}

const sorted = arr.sort(sortThem);

function largest() {
    const lengthOf = sorted.length
    console.log(sorted[lengthOf - 1])
}

largest()

//------------------------------------------------------------------------------------------
//**********PART 2: FINISHED**********//
const string = ["$hello!", "%%^%%", "test!"];    //#1   
const char = "!";                                //#1

// const string = ["#3", "$$$", "C%4!", "Hey!"];    //#2
// const char = "!";                                //#2

// const string = ["yellow", "green", "^up^", "down", "dog"];   //#3
// const char = "h";                                            //#3

function lettersWithStrings(string, char) {
    for (var i = 0; i < string.length; i++) {
        var hasIt = string[i].includes(char)
        if(hasIt === true) {
            console.log(string[i])
        }
    }
}

lettersWithStrings(string, char)
//------------------------------------------------------------------------------------------
//**********PART 3: FINISHED**********//
function isDivisible(num1, num2) {
    if(num1 % num2 === 0) {
        console.log("It is divisible.")
    } else {
        console.log("It is not divisible.")
    }
}

isDivisible(4, 2)
isDivisible(9, 3)
isDivisible(15, 4)


//------------------------------------------------------------------------------------------


