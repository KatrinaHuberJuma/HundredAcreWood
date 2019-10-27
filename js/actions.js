

$(document).ready(function(){
    $("button").click(function(){
        var creature = wood[$(this).attr("id")]
        $(this).replaceWith( "<h2>" + creature.name + "</h2>" );
        var input = prompt("would you like to take a walk from " + creature.name + "'s home? y/n")
        if (input == "y"){
            var player = new Player();
            while (creature){
                creature = player.move(creature);
            }
            alert("jope you enjoyed your stroll!")
        }

    });
    
});
