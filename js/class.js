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




