class Player{
    constructor(name, health){
        this.name = name
        this.health = health
        this.inventory = []
    }
}

export const player = new Player("Bob", 100)