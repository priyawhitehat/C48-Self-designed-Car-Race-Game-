class Form{
    constructor(){
        this.input = createInput("")
        this.button = createButton("ENTER")
        this.greeting = createElement("H1")
        this.reset = createButton("RESET")
    }
    display(){
        this.input.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth/2+150,displayHeight/2)
        this.reset.position(displayWidth-100,displayHeight/2-350)

        this.button.mousePressed ( ()=>{
            this.input.hide()
            this.button.hide() 
            this.greeting.position(displayWidth/2,displayHeight/2-200)
            this.greeting.html("Welcome "+this.input.value())
            count = count + 1
            player.index = count
            player.name = this.input.value() 
            player.updatePlayerCount()
            player.updatePlayers()
        })

        this.reset.mousePressed(()=>{
            db.ref('/').update({gameState:0,playerCount:0})
            db.ref('players').remove()     
         })

    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }


}