export default function createGame() {
    const SCREEN = document.querySelector('.screen')
    const CONTEXT = SCREEN.getContext('2d')
    let maxCanva = 11
    const statusGame = {
        players:{
            'player1' : {x:1, y:1}
        },
        fruits: {
            'fruit1' : {x:5, y:5}
        }
    }
    const PLAYERS = statusGame.players
    const FRUITS = statusGame.fruits
    let contFruit = 1
    console.log(PLAYERS)

    function addFruit () {
        contFruit ++
        FRUITS["fruit" + contFruit] = {x: parseInt(Math.random() * maxCanva + 0), y: parseInt(Math.random() * maxCanva + 0)}
        console.log(FRUITS['fruit'+contFruit])
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
    setInterval(addFruit, 500000000000)

    return{
        statusGame,
        CONTEXT,
        maxCanva,
        colisionFruits
    }
}
