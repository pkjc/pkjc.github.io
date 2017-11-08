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
    $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.videshi.com/michigan/events') + '&callback=?', function(data){
        var eventsArr = $(data.contents).find('.article-listing').find('.img-responsive');
        $.each(eventsArr, function(index, value){
            console.log(value);
        });
    });
    loadPartials();
    tabSwipesOnMobile();
});
