const Game = require('./Games/Bigger');
const Deck = require('./Games/Deck')
const express = require('express')
const socket = require('socket.io')
const app = express();

app.use('/public', express.static('./public'))
app.set('view engine', 'ejs')

const server = app.listen(4000, ()=>{
    console.log('listening to server at port 4000')
})





app.get('/', (req, res) =>{
     
    res.render('index.ejs')
   
   
}) 

var io = socket(server);
io.on('connection', (socket)=>{

    let game = new Game([{id: 123}, {id: 456}, {id: 345345}])
    
    
    console.log('made socket connection', socket.id)
//test=================test==============test
    socket.on('startgame',(event)=>{
        //game = new Game([{id: 123}, {id: 456}]);
        io.emit('test', game.getPlayer(123));
    })
    socket.on('endgame',()=>{
        io.emit('test2', game.getPlayer(123).getIsWinner())
    })
//test=================test==============test

    socket.on('drawcard',()=>{
        console.log();
        const insertion = `<img style = "width: 50%" src = "../public/PNG/${game.dealCard(123)}.png">`
        io.to(socket.id).emit('getcard', insertion)
        socket.broadcast.emit('facedowncard', `<img style = "width: 50%" src = "../public/PNG/blue_back.png">`)
    })
    
    
})
    




