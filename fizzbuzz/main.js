//******METHOD I MADE FROM SCRATCH THAT MAKES THE NUMBER 1-100 POPULATE IN A STRING BUT REFER 
//                                                                     TO OTHER METHOD******//
// var FizzBuzzOutput = [];
// var fizz = 0;
// var buzz = 0;
// var fizzbuzz=0;

// for ( var i=1; i < 100; i++ ) {


//     if (i % 15 == 0){
//         fizzbuzz+=1;                
//         FizzBuzzOutput += "FizzBuzz, ";
//     }

//     else if ( i % 3 == 0 ){
//         fizz+=1;
//         FizzBuzzOutput += "Fizz, ";
//     }


//     else if (i % 5 == 0){
//         buzz+=1;
//         FizzBuzzOutput += "Buzz, "
//     }       
//     else {
    
    //         FizzBuzzOutput += i + ', ';
    //     }
    // }
    // console.log(FizzBuzzOutput)
    
    // var NewFizzBuzzOutput = {}
    // function FizzBuzzOutput (fizz, buzz, fizzbuzz){
        //     for ( var i=1; i < FizzBuzzOutput.length; i++ ) {
            
//     if (FizzBuzzOutput[i] == "Fizz"){
//         fizzbuzz+=1;                
//     }

//     else if ( i % 3 == 0 ){
    //         fizz+=1;
    //     }
    
    
    //     else if (i % 5 == 0){
//         buzz+=1;
//     }       
//     else {
    
//     }
// }
// }
// console.log('fizz count= '+ fizz);
// console.log('buzz count= '+ buzz);
// console.log('fizzbuzz count= '+ fizzbuzz);
//-----------------------------------------------------------------------------------------------------
//*****METHOD I FOUND ONLINE THAT WORKS THE SAME AS MINE SO SHOULD BE OK******//
function fizzBuzz() {
    var arr = []
    for (var i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
            arr.push("fizzbuzz")
            continue;
        } else if (i % 3 === 0) {
            console.log("fizz");
            arr.push("fizz")
            continue;
        } else if (i % 5 === 0) {
            console.log("buzz");
            arr.push("buzz")
            continue;
        }
        console.log(i)
    }
    return arr
}

var arr1 = fizzBuzz()

let countFizzBuzz = 0
let countFizz = 0
let countBuzz = 0
for (var i = 0; i < arr1.length; i++) {
    if(arr1[i] === "fizzbuzz") {
        countFizzBuzz += 1
        
    } else if (arr1[i] === "fizz") {
        countFizz += 1
        
    } else if (arr1[i] === "buzz") {
        countBuzz += 1
    }
}

console.log ("fizzbuzz: " + countFizzBuzz)
console.log ("fizz: " + countFizz)
console.log ("buzz: " + countBuzz)

//-----------------------------------------------------------------------------------------------------

//----------------------------------------------------------
// var my_array = [];
// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else my_array.push(i);
// }
// console.log(my_array)
//----------------------------------------------------------
// var my_array = [];

// function fizzBuzz(start, end){
//     for(let num=start; num <= end; num++){
//         if(num % 5 === 0 && num % 3 === 0){
//           console.log("FizzBuzz")
//         }   
//         else if(num % 3 === 0){
//           console.log("Fizz")
//         }
//         else if(num % 5 === 0){
//           console.log("Buzz")
//         }
//         else {
//           console.log(num)
//         }
//     }
// }
// fizzBuzz(1, 100)

//----------------------------------------------------------


// const array = []

// function myFunction() {
    //     for(i = 1; i < 101; i++) {
        
//         if( i % 3 === 0 && i % 5 === 0) {
//             array.splice(i, 1, "FizzBuzz")
//         } else if( i % 5 === 0) {
//             array.splice(i, 1, "Buzz")
//         } else if (i % 3 === 0) {
//             array.splice(i, 1, "Fizz")
//         }
//         else{
//         array.push(i)  

//     }
// }
// }
// myFunction()

// console.log(array)

// fizz = 0
// buzz = 0
// fizzbuzz = 0
// function count(fizz, buzz, fizzbuzz) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === "Fizz") {
//             fizz++
//         } else if (array[i] === "Buzz") {
//             buzz++
//         } else if (array[i] === "FizzBuzz") {
//             fizzbuzz+=1;
//             count++
//         }
//     }
// }
// console.log(fizz, buzz, fizzbuzz)
// // console.log(count())
// count(fizz, buzz, fizzbuzz)

// function fizzBuzz (n) {
//     const answer = []
//     const practice = {}
//     const fizzbuzz = 0
//     for (let i = 1; i <= n; i++) {
//         // if (i % 3 == 0 && i % 5 == 0)
//         //     answer.push("FizzBuzz")
//         // else if (i % 3 == 0)
//         //     answer.push("Fizz")
//         // else if (i % 5 == 0)
//         //     answer.push("Buzz")
//         // else
//         //     answer.push(i.toString())
        

//         if (i % 15 == 0){
//         fizzbuzz+=1;                
//         test += "FizzBuzz, ";

//     }

//     else if ( i % 3 == 0 ){
//         fizz+=1;
//         // test += "Fizz, ";
//     }


//     else if (i % 5 == 0){
//         buzz+=1;
//         // test += "Buzz, "
//     }       
//     }
    
//     return answer
// };

// console.log(fizzBuzz(100))


//----------------------------------------------------------



// function char_count(FizzBuzzOutput) 
// {
//  var letter_Count = 0;
//  for (var i = 0; FizzBuzzOutput.length; i++) 
//  {
//     if (FizzBuzzOutput.charAt(i) == "Fizz") 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count)


//----------------------------------------------------------
// let fizzBuzzCustom = function (FizzBuzzOutput){
//     let arr = {}

//     for(let i = 1; arr.length < 100; i++){
//         if(i === 'fizzbuzz'){
//             arr.push('fizzbuzz count= '+ fizzbuzz)
            
//         } else if (i === 'Fizz'){
//             arr.push('Fizz')
//         } else if (i % 5 === 0){
//             arr.push('buzz')
//         }
//         else {
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(fizzBuzzCustom())

//----------------------------------------------------------
// const fizzbuzz = (start, stop) => {
//     const arr = [];
//     let str;
//     for(let i=start; i<=stop; i++) {
//       str = "";
//       if(i%3===0) {
//         str = "fizz";
//       }
//       if(i%5===0) {
//         str += "buzz";
//       }
//       arr.push(str||i);
//     }
//     return arr;
//   }
  
//   console.log(fizzbuzz(0, 100));


//-----------------------------------------------------------------------------------------------------
    //******MOST ACCURATE******//
// var my_array = [];

//     for (var i= 1; i <= 100; i++)
// {   my_array.push(i);
//     if (i % 15 == 0)
//     console.log("FizzBuzz");
//     else if (i % 3 == 0)
//     console.log("Fizz");
//     else if (i % 5 == 0)
//     console.log("Buzz");
//     else
//     console.log(i);
// }



// var count = 0;

// function wordCounter(){
//     for (var i = 0; i <= 100; i++){
//         if(i % 15 == "Fizz"){
//             count++;
//         }
//     } 
// }
// console.log(count);

//-----------------------------------------------------------------------------------------------------
    // ******PICK UP ON THIS FOR SECOND STEP!******//
// let str = "fizz buzz fizzbuzz",
//     split = str.split(" "),
//     obj = {};

// for (let i = 0; i < split.length; i++) {
//   if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//   } else {
//     obj[split[i]]++;
//   }
// }

// console.log(obj)
//-----------------------------------------------------------------------------------------------------
// #10 : Turn the array into a string and return it.
// var string = i.toString()
// console.log(string)

//-----------------------------------------------------------------------------------------------------


// var points = new Array(100);
// for (var i = 0; i < 100; i++) {
//     points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
// }

// for (var i = 0; i < points.length; i++) {
//     console.log(points[i]); //This prints the values that you stored in the array
// }


//-----------------------------------------------------------------------------------------------------


// for(var i = 1; i <= 100; i++){
//     console.log(i)
// }


//-----------------------------------------------------------------------------------------------------
// var numbersArr = []

// for(var i = 0; i <= 100; i++) {
//     console.log(i)
//     if(i % 3 === 0) {
//         console.log("fizz")
//     }
// }
//-----------------------------------------------------------------------------------------------------

// for(var i = 0; i < 100; i++){
//     if(i % 3 === 0){
//         console.log("fizzbizz");
//     }
// }


//-----------------------------------------------------------------------------------------------------

// let i = 0
// let j = 1
// let limit = 100
// //prints zero
// console.log(i);
// while (true) {
//     if (i > limit - 3) break; //can also kept in loop; but I always enjoy infinte loops breaking ;-) and have to subtract with 4 if needed till 99
//     i = i + 3;

//     //prints for number divisible by 5 that falls before the multiples of 3 lags one more step to reach like 10 needs 9->10
//     (i - 2) % 5 === 0 ? console.log(i - 2, " - Buzz") : console.log(i - 2);

//     //prints for number divisible by 5 that falls before the multiples of 3 needs lags one step to behind like 5 needs 5<-6
//     (i % 5 === 1) ? console.log(i - 1, " - Buzz"): console.log(i - 1);

//     //prints if the number is divisble by both 3 and 5
//     if (i % 5 === 0) {
//         console.log(i, " - FizzBuzz");
//         continue
//     }

//     //prints default for 3 multiples
//     console.log(i, " - Fizz")

//     j++ //Loop Counter

// }

// console.log('Total iterations ran: ', j) 

//-----------------------------------------------------------------------------------------------------

//******STACK OVERFLOW EXAMPLE:******//
// let words = "I am not gonna live forever, but I wanna live while I am alive";

// function countRepeatedWords(sentence) {
//   let words = sentence.split(" ");
//   let wordMap = {};

//   for (let i = 0; i < words.length; i++) {
//     let currentWordCount = wordMap[words[i]];
//     let count = currentWordCount ? currentWordCount : 0;
//     wordMap[words[i]] = count + 1;
//   }
//   return wordMap;
// }

// console.log(countRepeatedWords(words));

//******STACK OVERFLOW EXAMPLE:******//
// const result = document.getElementById('result');

// let str = "I am not gonna live forever, but I wanna live while I am alive.";

// // strip all punctuation from string
// let strStripped = str.replace(/[,.!]/g, '');
// result.innerHTML = `strStripped: "${strStripped}"\n`;

// // separate string into array of lowercase words
// let words = strStripped.toLowerCase().split(' ');
// result.innerHTML += 'words: ' + JSON.stringify(words, null, 2);

// // form object of word counts
// let wordCounts = {};
// words.forEach(word => {
//   wordCounts[word] = (wordCounts[word] || 0) + 1;
// });
// result.innerHTML += '\nwordCounts: ' +
//   JSON.stringify(wordCounts, null, 2);


//-----------------------------------------------------------------------------------------------------


// for (let num = 1; num <= 100; num ++) {
    // if (num % 15 === 0) {
    // console.log("FizzBuzz");
    // } if (num % 3 === 0) {
    // console.log("Fizz");
    // } else if (num % 5 === 0) {
    // console.log("Buzz");
    // } else {
    // console.log(num);
    // }
    // }


    