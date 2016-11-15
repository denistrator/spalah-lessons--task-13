$("#sliderProduct").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    navText: ['<svg width="22" height="60"><line x1="22" y1="0" x2="0" y2="30" style="stroke:rgb(0,0,0);stroke-width:1" /> <line x1="0" y1="30" x2="22" y2="60" style="stroke:rgb(0,0,0);stroke-width:1" /></svg>', '<svg width="22" height="60"><line x1="0" y1="0" x2="22" y2="30" style="stroke:rgb(0,0,0);stroke-width:1" /> <line x1="22" y1="30" x2="0" y2="60" style="stroke:rgb(0,0,0);stroke-width:1" /></svg>']
});
$('.choose-color-yellow').click(function(){
     event.preventDefault();
    $("#sliderProduct").children().css('filter','hue-rotate(0deg)');
})
$('.choose-color-pink').click(function(){
     event.preventDefault();
    $("#sliderProduct").children().css('filter','hue-rotate(-110deg)');
})
$('.choose-color-blue').click(function(){
     event.preventDefault();
    $("#sliderProduct").children().css('filter','hue-rotate(130deg)');
})