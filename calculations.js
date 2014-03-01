function addTwo(num1, num2){
	var total = num1 + num2;
	document.write(total);
}

function convert(){
	var x = document.gydToGsm.inches.value;
	var y = document.gydToGsm.gyd.value;
	var yards = x/36;
	var calc = ((y/yards)*1.19);
	document.gydToGsm.result.value = calc;
}

function oz2ToYlb(width, ozyd2){
	var yards = 36/width;
	var longForm = (16/(ozyd2/yards));
	document.write(longForm.toFixed(5));
}