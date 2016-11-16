
// function countSum(item, priceItem, amount){
// 	var sumPrice = $(item).parent().parent().next().children().children();
//     sumPrice.html(priceItem*amount);
// };

// $(".input-numbers-input").on('change', function(){
//     var priceItem = $(this).parent().parent().next().children().children().html();
//     var amount = $(this).val();
//     var item = $(this);
//     countSum(item, priceItem, amount);
// });
// $('.input-numbers-btn-minus').on('click', function(){
//     var amount = +$(this).next('.input-numbers-input').val()-1;
//      var priceItem = $(this).parent().parent().next().children().children().html();
//     countSum($(this), priceItem, amount);   
// })
// $('.input-numbers-btn-plus').on('click', function(){
//     var amount = +$(this).prev('.input-numbers-input').val()+1;
//      var priceItem = $(this).parent().parent().next().children().children().html();
//     countSum($(this), priceItem, amount);   
// })
// $('.order-close').click(function(){
//     $(this).parent().parent(".order").hide();
// })

function changeCartBadge(){
	    $('.badge').html(localStorage.length);    
	}
function countSum(item, priceItem, amount){
        	var sumPrice = $(item).parent().parent().next().children().children();
            sumPrice.html(priceItem*amount);
        }
    
$(".input-numbers-input").on('change', function(){
    var priceItem = +$(this).parent().parent().parent().attr('data-price');
    var amount = $(this).val();
    var item = $(this);
    countSum(item, priceItem, amount);
});
$('.input-numbers-btn-minus').on('click', function(){
    var amount = +$(this).next('.input-numbers-input').val()-1;
	var priceItem = +$(this).parent().parent().parent().attr('data-price');
    countSum($(this), priceItem, amount);   
})
$('.input-numbers-btn-plus').on('click', function(){
    var priceItem = +$(this).parent().parent().parent().attr('data-price');
    var amount = +$(this).prev('.input-numbers-input').val()+1;
    countSum($(this), priceItem, amount);   
})
$('.order-close').click(function(){
    $(this).parent().parent(".order").hide();
})

$(document).ready(function(){
    var myEvent = {},
		id = localStorage.length

    $('.order-add-btn').on('click', function(ev){
		ev.preventDefault();
		
		//если определенный в начале сценария id (изначально длина localStorage) совпадает с уже имеющимся в localStorage объектом, изменяем id
		while(localStorage.getItem('event'+id)){
			id++;
		}
		//Как только нашли свободный id, назначаем его новому объекту
		myEvent.id = id;
		//Новый объект получает данные, согласно заполненным полям 
		myEvent.img = $(this).parent().prevAll('.order-img').children().children('img').attr('src');
		myEvent.title = $(this).parent().prevAll('.order-title').children().html();
		myEvent.amount = $(this).parent().prevAll('.order-count').children().children('.input-numbers-input').val();
		myEvent.price = $(this).parent().prevAll('.order-sum').children().children('span').html();
		
		//Наконец-то записываем объект в localStorage
		localStorage.setItem('event'+id, JSON.stringify(myEvent));
		changeCartBadge();
	});
});

