class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h3');
        this.code=1234;
        this.text=createElement('h3');
        this.reset=createButton("reset");
    }
    
    display(){
        this.title.html('CAR RACING GAME');
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2-30,displayHeight/2);
        this.reset.position(displayWidth/2+250,50)

        //arrow function
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)

            this.greeting.html("Hello,"+ player.name +'\n.Waiting for others players to join')
            this.greeting.position(displayWidth/2-70,displayHeight/4)
           // console.log(playerCount)
        })
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);

            for(var i=1;i<=4;i++){
                var playerIndex='players/player'+i
                database.ref(playerIndex).update({
                    name:"",
                    distance:0
                })
            }
            
        
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide();
    }

}