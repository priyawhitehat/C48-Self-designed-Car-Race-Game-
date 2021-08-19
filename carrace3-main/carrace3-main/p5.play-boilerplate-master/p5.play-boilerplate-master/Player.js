class Player{
    constructor(){
        this.index = 0
        this.name = ""
        this.yposition = 200
        this.xposition = 900
        this.finish = false
      
    }
    getPlayerCount(){
        db.ref('playerCount').on("value",function(data){count = data.val()})
    }
    updatePlayerCount(){
        db.ref('/').update({playerCount:count})
    }
    updatePlayers(){
        playerindex = "players/player"+this.index
        this.position = this.position-50
        db.ref(playerindex).set({name:this.name,xposition:this.xposition,yposition:this.yposition,finish:this.finish,place:place})


    }
    getPlayerInfo(){
        db.ref('players').on("value",function(data){allplayers = data.val()})
    }
    getFinishedPlayers(){
        db.ref('finishedplayers').on("value",function(data){place = data.val()})
    }
    updateFinishedPlayers(){
        db.ref('/').update({finishedplayers:place})
    }
    
}