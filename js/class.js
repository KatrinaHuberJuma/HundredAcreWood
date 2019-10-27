var Creature = function(name){
    this.name = name;
    
}

Creature.prototype.addEast= function(creatureObj){
    this.east = creatureObj;
    creatureObj.west = this;
    return this;
}
Creature.prototype.addWest= function(creatureObj){
    this.west = creatureObj;
    creatureObj.east = this;
    return this;
}
Creature.prototype.addNorth= function(creatureObj){
    this.north = creatureObj;
    creatureObj.south = this;
    return this;
}
Creature.prototype.addSouth= function(creatureObj){
    this.south = creatureObj;
    creatureObj.north = this;
    return this;
}


var Player = function(){
}


Player.prototype.move = function(creature){
        this.location = creature;
        var input = prompt("You are at " + this.location.name + "'s home! enter n, s, e, or w to move, or hit x to quit");
        if (input == "n"){
            return this.location.north;
        }
        if (input == "s"){
            return this.location.south;
        }
        if (input == "e"){
            return this.location.east;
        }
        if (input == "w"){
            return this.location.west;
        } 
        if (this.location === undefined){
            alert("You have left the woods. ByeBye!")
        }
        if (input == "x"){
            return false;
        }
    }
