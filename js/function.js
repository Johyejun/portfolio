$(function(){
    const $burger=$('.burger');
    const $nav=$('.nav-links');

    $burger.on('click',function(){
        $nav.toggleClass('active');
        $nav.toggleClass('toggle');
    });
});