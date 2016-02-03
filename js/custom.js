function convert() {
  var x = document.gydToGsm.inches.value;
  var y = document.gydToGsm.gyd.value;
  var yards = x/36;
  var calc = ((y/yards)*1.19);
  document.gydToGsm.result.value = calc;
}

function convert2() {
  var x = document.ozydToYdlb.inches.value;
  var y = document.ozydToYdlb.ozyd.value;
  var yards = 36/x;
  var calc = (16/(y/yards));
  document.ozydToYdlb.result.value = calc;
}

function convert3() {
  var x = document.ozydToGsm.ozyd.value;
  var calc = (x/0.0294935247828);             
  document.ozydToGsm.result.value = calc;
}

function convert4() {
  var x = document.gsmToOzyd.gsm.value;
  var calc = (x/33.9057473586);             
  document.gsmToOzyd.result.value = calc;
}

function convert5() {
  var x = document.gsydToGsm.gsyd.value;
  var calc = (x/0.83612736);             
  document.gsydToGsm.result.value = calc;
}

function convert6() {
  var x = document.gsmToGsyd.gsm.value;
  var calc = (x/1.1959900463);             
  document.gsmToGsyd.result.value = calc;
}

function convert7() {
  var x = document.gsyToGyd.gsm.value;
  var y = document.gsyToGyd.inches.value;
  var calc = (x/1.1959900463);
  var gYd = calc * (y/36);
  document.gsyToGyd.result.value = gYd;
}

function convert8() {
  var x = document.cubMeter.lngth.value;
  var y = document.cubMeter.wdth.value;
  var z = document.cubMeter.hght.value;
  var calc = (x * 0.0254) * (y * 0.0254) * (z * 0.0254)              
  document.cubMeter.result.value = calc;
}

function baleTotal(x, y) {
  x = Number(document.addBale.strt.value);
  y = Number(document.addBale.baleNum.value);
  var total = 0;

  for (i=0; i<y; i++) {
  total += (x + i);
}

document.addBale.result.value = total;
}

function convert9() {
  var x = document.lydToM2.inches.value;
  var y = document.lydToM2.gyd.value;
  var factor = (x*36)/1550;
  var calc = factor*y;
  var calc = Math.round((calc + 0.00001)*100)/100;
  document.lydToM2.result.value = calc;
}

function convert10() {
  var x = document.ozyd2ToOzyd.inches.value;
  var y = document.ozyd2ToOzyd.ozyd2.value;
  var factor = (x/36);
  var calc = factor*y;
  var calc = Math.round((calc + 0.00001)*100)/100;
  document.ozyd2ToOzyd.result.value = calc;
}

function toggler(divId) {
    $("#" + divId).toggleClass('hidden');
}


//function today() {
//  var currentTime = new Date();
//  var month = currentTime.getMonth() + 1;
//  var day = currentTime.getDate();
//  var year = currentTime.getFullYear();
//  document.write(month + "/" + day + "/" + year);
//}

function todayDate() {
  var date = new Date(); alert((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
  document.getElementById("today").innerHTML = date;
}
