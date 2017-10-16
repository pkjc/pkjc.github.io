function loadPartials(){
    $("#about").load( "partials/about.html" );
    $("#projects").load( "partials/projects.html" );
    $("#resume").load( "partials/resume.html" );
    $("#blog").load( "partials/projects.html" );
    $("#contact").load( "partials/contact.html" );
}
function tabSwipesOnMobile(){
    var hammertime = new Hammer(body);
    //RIGHT
    hammertime.on('swiperight', function(ev) {
        console.log("R");

        var allTabLinks = $('#myTab .active').parent().prev().find('a').tab('show');
        setTimeout(function(){window.scrollTo(0,0)}, 150);
        console.log(allTabLinks);

    });
    //LEFT
    hammertime.on('swipeleft', function(ev) {
        console.log("L");

        var allTabLinks = $('#myTab .active').parent().next().find('a').tab('show');
        setTimeout(function(){window.scrollTo(0,0)}, 150);
        console.log(allTabLinks);

    });
}
$(function() {
    $('#myTab a').click(function () {
        setTimeout(function(){window.scrollTo(0,0)}, 150);
    });

});
$(document).ready(function(){
    loadPartials();
    tabSwipesOnMobile();
});
