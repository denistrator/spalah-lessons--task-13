$(function() {
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
})