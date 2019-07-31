const Deck = require('./Deck')
const Player = require('./Player')
class Bigger{
    constructor(sockets){
        this.playerTurn = 0;
        this.name = "bigger"
        this.deck = new Deck();
        this.deck.newDeck();
        this.deck.shuffle();
        this.playerPool = {};
        for(const socket of sockets){
           this.playerPool[socket.id] = new Player(socket.id);
        }
        this.playerTurnList = [];
        for(const player in this.playerPool){
            this.playerTurnList.push(this.playerPool[player]);
        }
        console.log(this.playerTurnList)
        console.log(this.playerPool)
        
    }
    getName(){
        return this.name;
    }
    getDeck(){
        return this.deck;
    }
    getPlayer(playerID){
        return this.playerPool[playerID];
    }
    startGame(){
        while(!end){
            //start game
            //





        }
    }

    dealCard(playerID){
        const player = this.playerPool[playerID];
        player.drawCard(this.deck);
       return player.getHand()[player.getHand().length-1];
        
    }

    //this is for kings cup
    getPlayerTurn(){
       this.playerTurn = this.playerTurn > this.playerTurnList.length -1? 0: this.playerTurn;
        
        return this.playerTurnList[this.playerTurn++].id;

    }

    iteratePlayers(){
        if(this.playerTurn> this.playerTurnList.length -1){
            return this.evaluateWinner();
        }else{
            this.playerTurn ++;
        }
    }

    evaluateWinner(){
        let maxScorePlayer = undefined;
        
        for(player in this.playerPool){
            if(Number(playerPool[player].getHand()[0])> Number(maxScorePlayer.getHand()[0])){
                maxScorePlayer = playerPool[player]; 
            }
        }
        return maxScorePlayer;
        
    }

    

    

}

module.exports = Bigger;