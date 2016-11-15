$(document).ready(function(){
        var arrayOfObjects = [];
		for(i in localStorage){
			//Создаем массив записей из содержимого localStorage
			arrayOfObjects.push(JSON.parse(localStorage.getItem(i)));
			}
	function showAllEvents(place){
		$(place).html('');
		//Если localStorage пустой
		if(localStorage.length === 0){
				$(place).append('<p>Your cart is empty. Please add aome products</p>');
			}
		else {
			//перебираем все элементы массива
			for(var i = 0; i < arrayOfObjects.length; i++){
				//выводим содержимое записи, ссылку для записи в зависимости от ее id, который назначается при добавлении события
				$(place).append('<div class="order table" data-href="'+arrayOfObjects[i].id+'" data-price="'+Number(arrayOfObjects[i].price)+'"><div class="order-img cell"><a href="product-page.html"><img src="'+arrayOfObjects[i].img+'" alt=""></a></div><div class="order-title cell"><p>'+arrayOfObjects[i].title+'</p></div><div class="order-count cell"><div class="input-numbers"><button class="input-numbers-btn input-numbers-btn-minus no-js">-</button><input type="number" class="input-numbers-input no-js" min="1" value="'+arrayOfObjects[i].amount+'"><button class="input-numbers-btn input-numbers-btn-plus no-js">+</button></div></div><div class="order-sum cell"><p>$<span>'+Number(arrayOfObjects[i].price)+'</span></p></div><div class="order-add cell"><button class="btn order-add-btn">Add to cart</button><button class="order-close"></button></div></div>')
			};
		};
	};
	showAllEvents(".cart-wrapper");
	function changeCartBadge(){
	    $('.badge').html(localStorage.length);    
	}
	changeCartBadge();
	
	
function countSum(item, priceItem, amount){
	var sumPrice = $(item).parent().parent().next().children().children();
    sumPrice.html(priceItem*amount);
};
function getPrice(){
	var priceItem = +$(this).parent().parent().parent().attr('data-price');
	return priceItem;
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


	var countPlus = $(".input-numbers-btn-plus");
	var countMinus = $(".input-numbers-btn-minus");
	var countInput = $(".input-numbers-input");

	// fallbacks
	countInput.attr("type", "text");
	countInput.removeClass("no-js");
	countPlus.removeClass("no-js");
	countMinus.removeClass("no-js");

	countPlus.click(function(){
		var currenVal = $(this).parent().find(countInput).val();
		$(this).parent().find(".input-numbers-input").val(++currenVal);
	})

	countMinus.click(function(){
		var currenVal = $(this).parent().find(countInput).val();
		if(currenVal > 1) $(this).parent().find(".input-numbers-input").val(--currenVal);
	})
	$('.order-close').click(function(){
    $(this).parent().parent(".order").hide();
    localStorage.removeItem('event'+$(this).parent().parent().attr('data-href'));
    changeCartBadge();
    })
})