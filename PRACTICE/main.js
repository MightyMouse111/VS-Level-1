// var num = 6

// if(num === "6"){
//     console.log("Yay!")
// }
// else {
//     console.log("Oh no!")
// }

// var matrix = [  //  Select the number 7.
//     [1,2,3],
//     [5,6,7],
//     [9,8,4]
// ]

// console.log(matrix[1][2])



let hp = 100

function walk(){
    const willFight = prompt('(f) for fighting, (i) for checking inventory')
    if(willWalk === "f"){
        fight()
    } else if (willWalk === "i"){
        checkInventroy()
    } else {
        walk()
    }
}

function fight(){
    const winner = selectWinner()
    if(winner === "hero"){
        walk()
    }
}

walk()













// for(var i = 0; i < matrix.length; i++){
//     for(var j = 0; j < matrix[2].length; j++){
//         console.log( matrix[2][0] )
//     }
// }
