$(function() {
	var countPlus = $("#input-numbers-plus");
	var countMinus = $("#input-numbers-minus");
	var countInput = $("#input-numbers-input");

	var currenVal = countInput.val();

	// fallbacks
	countInput.attr("type", "text");
	countInput.removeClass("no-js");
	countPlus.removeClass("no-js");
	countMinus.removeClass("no-js");

	countPlus.click(function(){
		countInput.val(++currenVal);
	})

	countMinus.click(function(){
		if(currenVal > 1) countInput.val(--currenVal)
	})
})