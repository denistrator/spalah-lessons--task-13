var currenVal = $("#input-numbers-input").val();
var price = $('.order-sum p').html();
// $(".plus").click(function(){
// 	count++;
// 	$(".amount").val(count);
//   countSum(count);
// })
// $(".minus").click(function(){
// if(count > 1){
// 		count--;
// 	$(".amount").val(count);
//   countSum(count);
// }

// })
function countSum(count){
	$('.order-sum p').html(currenVal*price);
};

$("input").on('change', function(){
	countSum(currenVal);
});

