
function countSum(item, priceItem, amount){
	var sumPrice = $(item).parent().parent().next().children().children();
    sumPrice.html(priceItem*amount);
};

$(".input-numbers-input").on('change', function(){
    var priceItem = $(this).parent().parent().next().children().children().html();
    var amount = $(this).val();
    var item = $(this);
    countSum(item, priceItem, amount);
});
$('.input-numbers-btn-minus').on('click', function(){
    var amount = +$(this).next('.input-numbers-input').val()-1;
     var priceItem = $(this).parent().parent().next().children().children().html();
    countSum($(this), priceItem, amount);   
})
$('.input-numbers-btn-plus').on('click', function(){
    var amount = +$(this).prev('.input-numbers-input').val()+1;
     var priceItem = $(this).parent().parent().next().children().children().html();
    countSum($(this), priceItem, amount);   
})
$('.order-close').click(function(){
    $(this).parent().parent(".order").hide();
})