// let count = 5 * 7
// console.log(count)

// let myAge = 35
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)


// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment() {
//     console.log("Button was clicked")
// }

// function sumLaps() {
//     sumLaps = lap1 + lap2 + lap3
//     console.log(sumLaps)
//  }
 
//  sumLaps()
 
// let lapsCompleted = 0

// console.log(lapsCompleted)

// function increment() {
//     lapsCompleted = lapsCompleted + 1
   
// }

// increment()
// increment()
// increment()

// console.log(lapsCompleted)

let countEl = document.getElementById("count-el") //pas in arguments
let saveEl = document.getElementById("save-el")
//console.log(countEl)
let count = 0

function increment() {
   // console.log("clicked")
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count);

}


