const socket = io.connect('http://localhost:4000');
const cards = document.getElementById('cards');
const button = document.getElementById('startgame')
const endButton = document.getElementById('endgame')
const drawCard = document.getElementById('drawcard')
//const socket = io('/custom');

// button.addEventListener('click', (data)=>{
//     socket.emit('startgame', {
//         id: socket.id
//     })
// })

// socket.on('deck', (deck)=>{
//   console.log(deck)
// })


//test===============test =============test
button.addEventListener('click', (event)=>{
    //document.getElementById('cards').innerHTML = '';
    socket.emit('startgame', event)
})
endButton.addEventListener('click',(event)=>{
    socket.emit('endgame', event)
})


//test===============test =============test




socket.on('test', (players)=>{
  console.log(players);
})
socket.on('test2', (data)=>{
    console.log(data)
})
socket.on('getcard', (data)=>{
    document.getElementById('cards').innerHTML += (data);
})
drawCard.addEventListener('click',()=>{
    socket.emit('drawcard', 'test')
})
socket.on('facedowncard', (data)=>{
    document.getElementById('cards').innerHTML += data;
})

