/* 
  1 frame = up to 2 throws
  each number represents a throw
  10 chances of 2 throws



  on last frame:
  spare on 10th = 1 more ball
  strike on 10th = 2 more balls



  compute score at the end of game
  if strike, next throw will be affected
*/
// sample input - 3, 4, 8, 10

/*
  Clean-up: {
    round-1: 50min,
  }

  Research: {
    round-1: 15min
  }
*/


let frames = 0
let total = 0
let strike = false
let spare = false
let firstThrow = false
let board = []

function score(num) {
  if (frames === 0) {
    firstFrame(num)
    return
  }


  if (firstThrow && strike) {
    total += 2 * (firstThrow + num)
    strike = false
    frames++
  } else if (firstThrow) {
    addThrowsToTotal(num)
  } else {
    setFirstThrow(num)
  }


  debugger
  if (frames === 10) {
    if (firstThrow && strike) {
      total += 2 * (firstThrow + num)
    } else if (strike) {
      setFirstThrow(num)
    } else {
      let finalScore = total + num
      total = 0
      strike = false
      firstThrow = false
      frames = 1
      console.log("FINAL: ", finalScore)
      return finalScore
    }
  }
}

/* Handles the first frame since strike here would mean just 10pts. */
function firstFrame(num) {
  if (num === 10) {
    strike = true
    board[frames] = num
    frames++
  } else if (firstThrow) {
    addThrowsToTotal(num)
  } else {
    setFirstThrow(num)
  }
}


function setFirstThrow(num) {
  firstThrow = num
}

function addThrowsToTotal(num) {
  let subtotal = (firstThrow + num)
  if (subtotal === 10) {
    spare = true
  }
  board[frames] = subtotal
  firstThrow = false
  frames++
}




score(10)
score(2)
score(3)

frames = 10

score(10)
score(6)
score(4)


score(2)




