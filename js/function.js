$(function(){

    $('#fullpage').fullpage( {
        anchors:['section1', 'section2', 'section3','section4','section5','section6','section7'],
        responsiveWidth: 1024
    });

    const $burger=$('.burger');
    const $nav=$('.nav-links');

    $burger.on('click',function(){
        $nav.toggleClass('active');
        
    });

    
        
});