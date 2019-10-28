
var player = new Player();

$(document).ready(function(){
    $("button").click(function(){
        var creature = wood[$(this).attr("id")]
        $(this).replaceWith( "<h2>" + creature.name + "</h2>" )
    });
    
});



