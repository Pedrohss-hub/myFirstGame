const SCREEN = document.querySelector('.screen')
const CONTEXT = SCREEN.getContext('2d')

const GAME = {
    players:{
        'player1' : {x:1, y:1}
    },
    fruits: {
        'fruit1' : {x:5, y:5}
    }
}
const PLAYERS = GAME.players
const FRUITS = GAME.fruits

let cont = 1
function addFruit () {
    cont ++
    FRUITS["fruit" + cont] = {x: parseInt(Math.random() * 10 + 0), y: parseInt(Math.random() * 10 + 0)}
    console.log(FRUITS["fruit" + cont])
    const fruitx
}

function colisionFruits () {
    for(let id in FRUITS){
        const fruitId = FRUITS[id]
        if (PLAYERS.player1.x == fruitId.x && fruitId.y == PLAYERS.player1.y) {
            delete FRUITS[id]
            console.log('Colisão')
        }
    }
}

setInterval(addFruit, 50000)

document.addEventListener('keydown', (e) => {
    switch (true) {
        case (e.key == 'ArrowUp' && PLAYERS.player1.y > 0):
            PLAYERS.player1.y --
        break;

        case (e.key == 'ArrowDown' && PLAYERS.player1.y < 10):
            PLAYERS.player1.y ++
        break;  

        case (e.key == 'ArrowRight' && PLAYERS.player1.x < 10):
            PLAYERS.player1.x ++
        break

        case (e.key == 'ArrowLeft' && PLAYERS.player1. x > 0):
            PLAYERS.player1.x --
        break
    }

    console.log(`Jogador1 X:${PLAYERS.player1.x} Y:${PLAYERS.player1.y}`)
})


function renderGame () {
    CONTEXT.fillStyle = 'white'
    CONTEXT.clearRect(0, 0, 11, 11)

    for(let i in PLAYERS){
        const playerId = PLAYERS[i]

        CONTEXT.fillStyle = 'black'
        CONTEXT.fillRect(playerId.x, playerId.y, 1, 1)
    }

    for (let i in FRUITS) {
        const fruitId = FRUITS[i]

        CONTEXT.fillStyle = 'green'
        CONTEXT.fillRect(fruitId.x, fruitId.y, 1, 1)
    }
    colisionFruits()
    requestAnimationFrame(renderGame)
}
renderGame()
