$(document).ready(() => {
  const newGame = $('#new-game')
  const dice = $('#dice')
  const roll = $('#roll')
  const hold = $('#hold')
  const player1 = $('#player1')
  const global1 = $('#GLOBAL1')
  const round1 = $('#ROUND1')
  const player2 = $('#player2')
  const global2 = $('#GLOBAL2')
  const round2 = $('#ROUND2')
  const player1Turn = $('#player1Turn')
  const player2Turn = $('#player2Turn')
  let GLOBAL = 0
  let ROUND = 0
  let player = 0


  function player1Play() {
    player1.css('color', 'black')
    player1Turn.css('display', 'inline')
    player2.css('color', 'rgb(112, 112, 112)')
    player2Turn.css('display', 'none')
    player = 1
  }

  function player2Play() {
    player2.css('color', 'black')
    player2Turn.css('display', 'inline')
    player1.css('color', 'rgb(112, 112, 112)')
    player1Turn.css('display', 'none')
    player = 2
  }

  function turn() {
    if (player === 1) {
      round1.text('0')
      GLOBAL = parseInt(global2.text())
      player2Play()
    } else if (player === 2) {
      round2.text('0')
      GLOBAL = parseInt(global1.text())
      player1Play()
    }
  }

  newGame.on('click', function () {
    global1.text('0')
    round1.text('0')
    global2.text('0')
    round2.text('0')
    player1.css('color', 'black')
    player1Turn.css('display', 'inline')
    ROUND = 0
    GLOBAL = 0
    player1Play()
  })

  roll.on('click', function () {
    let result = Math.ceil(Math.random() * 6)
    ROUND = ROUND + result
    if (result === 1) {
      dice.attr('src', 'assets/image/dice1.PNG')
      ROUND = 0
      turn()
    } else if (result === 2) {
      dice.attr('src', 'assets/image/dice2.PNG')
    } else if (result === 3) {
      dice.attr('src', 'assets/image/dice3.PNG')
    } else if (result === 4) {
      dice.attr('src', 'assets/image/dice4.PNG')
    } else if (result === 5) {
      dice.attr('src', 'assets/image/dice5.PNG')
    } else if (result === 6) {
      dice.attr('src', 'assets/image/dice6.PNG')
    }
    if (player === 1) {
      round1.text(ROUND)
    } else if (player === 2) {
      round2.text(ROUND)
    }
  })

  hold.on('click', function () {
    GLOBAL = GLOBAL + ROUND
    if (player === 1) {
      global1.text(GLOBAL)
    } else if (player === 2) {
      global2.text(GLOBAL)
    }
    ROUND = 0
    turn()
  })

});

