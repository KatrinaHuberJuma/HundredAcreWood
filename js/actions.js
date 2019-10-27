$(document).ready(function(){
    $("button").click(function(){
        var name = $(this).attr("id");
        $(this).replaceWith( "<h2>" + wood[name].name + "</h2>" );

    });
    
});
