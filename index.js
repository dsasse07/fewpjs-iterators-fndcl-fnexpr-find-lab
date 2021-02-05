const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  let winningGame = array.find( game => game.result === "W" )
  if (winningGame) {
    return winningGame.year
  } else {
    return undefined
  }

}
