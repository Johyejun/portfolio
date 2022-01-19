$(function(){

    $('#fullpage').fullpage( {
        anchors:['section1', 'section2', 'section3','section4']
    });

    const $burger=$('.burger');
    const $nav=$('.nav-links');

    $burger.on('click',function(){
        $nav.toggleClass('active');
        $nav.toggleClass('toggle');
    });

   
        
});