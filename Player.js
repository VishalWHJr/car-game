class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    
    getCount(){
        var getCountRef=database.ref('playerCount')
            getCountRef.on('value', function(data){
            playerCount=data.val()
        })       
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){
        //player1,player2....
        //player+playerCount=player1
        var playerIndex='players/player'+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef=database.ref('players')
        playerInfoRef.on('value', function(data){
            allPlayers=data.val();
        })
        
    }
}