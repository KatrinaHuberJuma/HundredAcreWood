var hef = new Creature("Heffalumps");
var eeyore = new Creature("Eeyore");
var kanga = new Creature("Kanga");
eeyore.addEast(hef).addSouth(kanga);
var owl = new Creature("Owl");
var chris = new Creature("Christopher Robin");
var rabbit = new Creature("Rabbit");
var winnie = new Creature("Winnie the Pooh");
chris.addNorth(kanga).addSouth(winnie).addEast(rabbit).addWest(owl);
var piglet = new Creature("Piglet");
var bees = new Creature("Bees");
var tigger = new Creature("Tigger");
var gopher = new Creature("Gopher")
winnie.addEast(bees).addSouth(tigger).addWest(piglet);
piglet.addNorth(owl);
rabbit.addSouth(bees).addEast(gopher)
var wood = {
    hef: hef,
    eeyore: eeyore,
    kanga: kanga,
    owl: owl,
    chris: chris,
    rabbit: rabbit,
    gopher: gopher,
    winnie: winnie,
    piglet: piglet,
    bees: bees,
    tigger: tigger

}