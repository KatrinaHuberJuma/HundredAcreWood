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
    this.move = function(creature){
        var input = prompt("You are at " + creature.name + "'s home! enter n, s, e, or w to move, or hit x to quit");
        if (input == "n"){
            return creature.north;
        }
        if (input == "s"){
            return creature.south;
        }
        if (input == "e"){
            return creature.east;
        }
        if (input == "w"){
            return creature.west;
        } 
        if (input == "x"){
            return false;
        }
    }
}

