import createGame from './createGame.js'

const GAME = createGame()
let maxCanva = GAME.maxCanva
const PLAYERS = GAME.statusGame.players

document.addEventListener('keydown', (event) => {
    movePLayer(event.key)
})

export default function movePLayer (keyPress) {
    switch(true){
        case (keyPress == 'ArrowUp' && PLAYERS.player1.y > 0):
            createGame().statusGame.players.player1.y --
        break

        case (keyPress == 'ArrowDown' && PLAYERS.player1.y < maxCanva):
            PLAYERS.player1.y ++
        break

        case (keyPress == 'ArrowRight' && PLAYERS.player1.x < maxCanva):
            PLAYERS.player1.x ++
        break

        case (keyPress == 'ArrowLeft' && PLAYERS.player1.x > 0):
            PLAYERS.player1.x --
        break
    }

}
