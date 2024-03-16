import createGame from './createGame.js'
import inputUser from './inputUser.js'

const GAME = createGame()
const FRUITS = GAME.statusGame.fruits
const PLAYERS = GAME.statusGame.players
const RENDER = GAME.CONTEXT
let maxCanva = GAME.maxCanva
const COLISIONFRUIT = GAME.colisionFruits()
/*
const INPUT = inputUser()
const PLAYERS = INPUT.PLAYERS
*/

function renderGame () {
    RENDER.fillStyle = 'white'
    RENDER.clearRect(0, 0, maxCanva, maxCanva)

    for(let i in PLAYERS){
        const playerId = PLAYERS[i]
                                                        

        RENDER.fillStyle = 'black'
        RENDER.fillRect(playerId.x, playerId.y, 1, 1)
    }

    for (let i in FRUITS) {
        const fruitId = FRUITS[i]

        RENDER.fillStyle = 'green'
        RENDER.fillRect(fruitId.x, fruitId.y, 1, 1)
    }
    COLISIONFRUIT
    requestAnimationFrame(renderGame)
}
renderGame()
