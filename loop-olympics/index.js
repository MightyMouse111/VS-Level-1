                    //////////**********PRELIMINARIES**********//////////

var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

////////////PART 1:////////////
//Write a for loop that prints to the console the numbers 0 through 9.

//  WORKS 100%: PREFERRED METHOD Is displayed from TOP to BOTTOM. AKA Consoled Like this: 
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9

// for(var i = 0; i < numbersArray.length; i++){
//     console.log(numbersArray[i])
// }
//////////////////////////////////////////////////////////////////////////

//  WORKS 100%: NOT PREFERRED Is displayed from LEFT to RIGHT. Displays the numbers in Arrays like so:
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] x10.
// for(var i = 0; i < numbersArray.length; i++){
//     console.log(numbersArray)
// }
//////////////////////////////////////////////////////////////////////////

//  WORKS BUT NOT PREFERRED and has no array it works with so refer to first answer. Also see if someone knows how to reverse the order using this method just for extra information.
    // for(var i = 0; i <= 9; i++) {
    //     console.log(i)
    // }
//////////////////////////////////////////////////////////////////////////    

////////////PART 2:////////////
//Write a for loop that prints to the console 9 through 0.

//  WORKS 100%: PREFERRED METHOD Is displayed from TOP to BOTTOM. AKA Consoled Like this: 
//9
//8
//7
//6
//5
//4
//3
//2
//1
//0

    // for(var i = numbersArray.length - 1; i >= 0; i--){
    //     console.log(numbersArray[i])
    // }
//////////////////////////////////////////////////////////////////////////

////////////PART 1: and PART 2:////////////

//  WORKS 100%: Using something we haven't learned yet called "reverse()". Displays the numbers in Arrays like so:
// numbersArray: [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9
//   ]
//   reversed: [
//     9, 8, 7, 6, 5,
//     4, 3, 2, 1, 0
//   ]

    // console.log('numbersArray:', numbersArray)
    
    // var reversed = numbersArray.reverse()
    // console.log('reversed:', reversed)
//////////////////////////////////////////////////////////////////////////

////////////PART 3:////////////
// const fruit = ["banana", "orange", "apple", "kiwi"]

//  WORKS 100%: PREFERRED METHOD Is displayed from TOP to BOTTOM. Like this: 
//banana
//orange
//apple
//kiwi

// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }
//////////////////////////////////////////////////////////////////////////

// WORKS 100%: NOT PREFERRED but Is displayed from left to right. Like this:
//["banana", "orange", "apple", "kiwi"] x4.

// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit)
// }
//////////////////////////////////////////////////////////////////////////


                    //////////**********BRONZE MEDAL**********//////////

////////////PART 1:////////////
//Write a for loop that will push the numbers 0 through 0 to an Array.
//////////////////////////////////////////////////////////////////////////

//  WORKS 100%: MOST PREFERRED METHOD.
    //FOUND THIS METHOD ON FORMS PART 2 STORY POINT 34.5 @ 3 mins 10 seconds. Did everything but the if statement.
    //Displays an Array like so:
    // [
    //     0, 1, 2, 3, 4,
    //     5, 6, 7, 8, 9
    //   ]

    // const array = []
    
    // for(let i = 0; i < numbersArray.length; i++){
    //         array.push(numbersArray[i])
    // }
    
    // console.log(array)    
//////////////////////////////////////////////////////////////////////////

//  WORKS 100%: SECOND PREFERRED METHOD Is displayed from LEFT to RIGHT. Like this:
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] x10.

// for(var i = 0; i < numbersArray.length; i++){
//     console.log(numbersArray)
// }
//////////////////////////////////////////////////////////////////////////

//  WORKS 100%: ANOTHER METHOD Is displayed from LEFT to RIGHT in an Array. Like this:
// numbersArray: [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9
//   ]
//   reversed: [
//     9, 8, 7, 6, 5,
//     4, 3, 2, 1, 0
//   ]

    // console.log('numbersArray:', numbersArray)
    
    // var reversed = numbersArray.reverse()
    // console.log('reversed:', reversed)
//////////////////////////////////////////////////////////////////////////

////////////SIDE NOTE: FIXED story point Arrays and Loops review the way they say to do so but it does not work the way they said it should. So this is my edit to work it.
//RESULTS GIVEN:
// 23 is odd
// 33 is odd

// var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2]

//     for(var i = 0; i < numbersArr.length; i++){
//         if(numbersArr[i] % 2  === 1){
//             console.log(numbersArr[i] + " is odd.")
//         }
//     }
//////////////////////////////////////////////////////////////////////////

////////////PART 2:////////////
//Write a for loop that prints to the console only even numbers 0 through 100.
//////////////////////////////////////////////////////////////////////////

//  WORKS 100%: MOST PREFERRED METHOD to show EVEN numbers.
//Shows EVEN numbers

// for(var i = 0; i <= 100; i++) {
    //     if (i % 2 === 0){
        //     console.log(i)
        //     }
        // }
//////////////////////////////////////////////////////////////////////////

//  WORKS 100%: ANOTHER EXTRA METHOD to show ODD numbers.
//Shows ODD numbers

// for(var i = 0; i <= 100; i++) {
//     if (i % 2 === 1){
//     console.log(i)
//     }
// }
//////////////////////////////////////////////////////////////////////////

////////////PART 3:////////////
//Write a for loop that will push every other fruit to an Array.
//////////////////////////////////////////////////////////////////////////

const fruit = ["banana", "orange", "apple", "kiwi"]

//  WORKS 100%: Using same method as the above example of ODD numbers to show.
// for(var i = 0; i < fruit.length; i++) {
//         if (i % 2 === 0){
//             console.log(fruit[i])
//             }
//         }
//////////////////////////////////////////////////////////////////////////

///////ANOTHER ATTEMPT
// const array = []
    
// for(let i = 0; i < fruit.length; i++){
//     if (i % 2 === 0){
//         array.push(fruit[i])
//     }
//     console.log(fruit[i])
// }    
//////////////////////////////////////////////////////////////////////////

///////ANOTHER ATTEMPT
// for(var i = 0; i < fruit.length; i++) {
//         if (i % 2 === 0){
//             console.log(i)
//             }
//         }

//////////////////////////////////////////////////////////////////////////

//  WORKS BUT NOT PREFFERED:
//Will show this:
//[ 'banana', 'apple' ]

// let x = fruit.filter((element, index) => {
//   return index % 2 === 0;
// })

// console.log(x) 
//////////////////////////////////////////////////////////////////////////


                    //////////**********SILVER MEDAL**********//////////

////////////PART 1:////////////
//Write a loop that will print out all the names of the people of the people array
//////////////////////////////////////////////////////////////////////////
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  const array = []
  const array2 = []
  //////////////////////////////////////////////////////////////////////////
////////////PART 1:////////////
  // WORKS 100%: Gives us this:
//   Harrison Ford
//   Justin Bieber
//   Vladimir Putin
//   Oprah

  //   for(var i = 0; i < peopleArray.length; i++){
  //   console.log(peopleArray[i].name)
  //   }
  //////////////////////////////////////////////////////////////////////////

  ////////////PART 2:////////////
//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
//////////////////////////////////////////////////////////////////////////

//WORKS 100%: Copied same method above for the numbersArray. Gives us this:
// [ 'Harrison Ford', 'Justin Bieber', 'Vladimir Putin', 'Oprah' ]

//SECTION 1: Names into a names array.
//   for(let i = 0; i < peopleArray.length; i++){
//           array.push(peopleArray[i].name)
//   }
  
//   console.log(array)   
    
//SECTION 2: Occupations into an occupations array.
//   for(let i = 0; i < peopleArray.length; i++){
//     array2.push(peopleArray[i].occupation)
// }

// console.log(array2)
//////////////////////////////////////////////////////////////////////////

  ////////////PART 3:////////////
//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
//////////////////////////////////////////////////////////////////////////

//SKIPPED THIS SECTION TO MOVE ON TO THE NEXT ASSIGNMENT/LESSON.
//////////////////////////////////////////////////////////////////////////