var count = 1;
var price = $('.sum p').html();
$(".plus").click(function(){
	count++;
	$(".amount").val(count);
  countSum(count);
})
$(".minus").click(function(){
if(count > 1){
		count--;
	$(".amount").val(count);
  countSum(count);
}

})
function countSum(count){
	$('.sum p').html(count*price);
};

$("input").on('change', function(){
	count = $(".amount").val();
  countSum(count);
});

