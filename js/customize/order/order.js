//advance order handlingW
/*while(rowCount==0){
  rowCount = document.getElementById('OpenOrder').rows.length;
  if(rowCount!=0){

  }else{
    break;
  }
}*/


//basic input
$("#limitLPrice").keyup(function(){
    var a = $("#limitLPrice").val();
    var b = $("#limitLAmount").val();
    var c = a*b;
    $("#limitLTotal").val(c);
});

$("#limitLAmount").keyup(function(){
    var a = $("#limitLPrice").val();
    var b = $("#limitLAmount").val();
    var c = a*b;
    $("#limitLTotal").val(c);
});

$("#limitSPrice").keyup(function(){
    var a = $("#limitSPrice").val();
    var b = $("#limitSAmount").val();
    var c = a*b;
    $("#limitSTotal").val(c);
});

$("#limitSAmount").keyup(function(){
    var a = $("#limitSPrice").val();
    var b = $("#limitSAmount").val();
    var c = a*b;
    $("#limitSTotal").val(c);
});
//StopLimit








//notification
function notifyMe(orderType) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification;
    if(orderType=="Order Placed"){
      notification = new Notification("Order Placed Success");
    }else if(orderType=="Market Placed"){
      notification = new Notification("Order Placed Success");
    }else if(orderType=="Order Cancelled"){
      notification = new Notification("Order Cancel Success");
    }else if(orderType=="triggered"){
      notification = new Notification("Order Triggered");
    }
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Browser doesn't support notification");
      }
    });
  }
  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

//function Place order - long
function LimitLong(){
  var price = parseFloat($("#formLimitLong .price").val());
  var amount = parseFloat($("#formLimitLong .amount").val());
  var total = parseFloat($("#formLimitLong .total").val());
  var coin = parseFloat($("#coin").val());
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = coin + stockValue;
  var defaultBalance = parseFloat($("#balance").val());

  if(price==""||amount==""){
    alert("Please fill in the blank");
  }else if(total>(defaultBalance)){
    alert("Please fill the correct price");
  }else{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    if(dd<10){
      dd = '0'+dd;
    }
    if(mm<10){
      mm = '0'+mm;
    }
    var a = yy+"-"+mm+"-"+dd+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    var b="Single";
    var c="Long Limit";
    var d="Side";
    var e=price;// TODO: GREEN
    var f=amount;
    var g="0%";
    var h=total;
    var i="Not Triggered";
    var j="<a class='form-control' onclick='cancelOrder(this);'>Cancel Order</a>";
    var tb = document.getElementById("OpenOrder").getElementsByTagName("tbody")[0];
    var row = tb.insertRow(0);
    //History
    var tbHis = document.getElementById("24hrHistory").getElementsByTagName("tbody")[0];
    var rowHis = tbHis.insertRow(0);

    var cell1 = [10];
    var cell2 = [11];
    for(var cons=0;cons<10;cons++){
      cell1[cons] = row.insertCell(cons);
    }
    for(var cons=0;cons<11;cons++){
      cell2[cons] = rowHis.insertCell(cons);
    }

    cell1[0].innerHTML = a;
    cell1[1].innerHTML = b;
    cell1[2].innerHTML = c;
    cell1[3].innerHTML = d;
    cell1[4].innerHTML = e;
    cell1[5].innerHTML = f;
    cell1[6].innerHTML = g;//filled%
    cell1[7].innerHTML = h;
    cell1[8].innerHTML = i;
    cell1[9].innerHTML = j;
    cell2[0].innerHTML = a;//time
    cell2[1].innerHTML = b;//pair
    cell2[2].innerHTML = c;//type
    cell2[3].innerHTML = d;//side
    cell2[4].innerHTML = "<span>0</span>";//average
    cell2[5].innerHTML = price;//price
    cell2[6].innerHTML = "<span style='color:bold'>Not Filled</span>";//filled
    cell2[7].innerHTML = f;//amount
    cell2[8].innerHTML = h;//total
    cell2[9].innerHTML = i;//cont'd
    cell2[10].innerHTML = "Placed"//status

  }
}

//function Place order - Short
function LimitShort(){
  var price = parseFloat($("#formLimitShort .price").val());
  console.log(price);
  var amount = parseFloat($("#formLimitShort .amount").val());
  var total = parseFloat($("#formLimitShort .total").val());
  var coin = parseFloat($("#coin").val());
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = coin + stockValue;
  var defaultBalance = parseFloat($("#balance").val());
  if(price==""||amount==""){
    alert("Please fill in the blank");
  }else if(total>defaultBalance){
    alert("Please fill the correct price");
  }else{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    if(dd<10){
      dd = '0'+dd;
    }
    if(mm<10){
      mm = '0'+mm;
    }
    var a = yy+"-"+mm+"-"+dd+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    var b="Pair";
    var c="Short Limit";
    var d="Side";
    var e=price;// TODO: red
    var f=amount;
    var g="0%";
    var h=total;
    var i="Not Triggered";
    var j="<a class='form-control' onclick='cancelOrder(this);'>Cancel Order</a>";
    var tb = document.getElementById("OpenOrder").getElementsByTagName("tbody")[0];
    var row = tb.insertRow(0);
    //History
    var tbHis = document.getElementById("24hrHistory").getElementsByTagName("tbody")[0];
    var rowHis = tbHis.insertRow(0);

    var cell1 = [10];
    var cell2 = [11];
    for(var cons=0;cons<10;cons++){
      cell1[cons] = row.insertCell(cons);
    }
    for(var cons=0;cons<11;cons++){
      cell2[cons] = rowHis.insertCell(cons);
    }

    cell1[0].innerHTML = a;
    cell1[1].innerHTML = b;
    cell1[2].innerHTML = c;
    cell1[3].innerHTML = d;
    cell1[4].innerHTML = e;
    cell1[5].innerHTML = f;
    cell1[6].innerHTML = g;//filled%
    cell1[7].innerHTML = h;
    cell1[8].innerHTML = i;
    cell1[9].innerHTML = j;
    cell2[0].innerHTML = a;//time
    cell2[1].innerHTML = b;//pair
    cell2[2].innerHTML = c;//type
    cell2[3].innerHTML = d;//side
    cell2[4].innerHTML = "0";//average
    cell2[5].innerHTML = price;//price
    cell2[6].innerHTML = "<span style='color:bold'>Not Filled</span>";//filled
    cell2[7].innerHTML = f;//amount
    cell2[8].innerHTML = h;//total
    cell2[9].innerHTML = i;//cont'd
    cell2[10].innerHTML = "Placed"//status
  }
}

//MarketBuy
function MarketLong(){
  var price = parseFloat($("#price").val());
  var amount = parseFloat($("#formMarketLong .amount").val());
  var total = price*amount;
  var coin = parseFloat($("#coin").val());
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = coin + stockValue;
  var defaultBalance = parseFloat($("#balance").val());
  if(price==""||amount==""){
    alert("Please fill in the blank");
  }else if(total>defaultBalance){
    alert("Please fill the correct price");
  }else{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    if(dd<10){
      dd = '0'+dd;
    }
    if(mm<10){
      mm = '0'+mm;
    }
    var a = yy+"-"+mm+"-"+dd+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    var b="Single";
    var c="Long Market";
    var d="Side";
    var e=price;
    var f=price;
    var g="Filled";
    var h=amount;
    var i=total;
    var j="Triggered";
    var k="Market";
    //History
    var tbHis = document.getElementById("24hrHistory").getElementsByTagName("tbody")[0];
    var rowHis = tbHis.insertRow(0);
    var cell = [11];
    for(var cons=0;cons<11;cons++){
      cell[cons] = rowHis.insertCell(cons);
    }
    cell[0].innerHTML = a;//time
    cell[1].innerHTML = b;//pair
    cell[2].innerHTML = c;//type
    cell[3].innerHTML = d;//side
    cell[4].innerHTML = e;//average
    cell[5].innerHTML = f;//price
    cell[6].innerHTML = g;//filled
    cell[7].innerHTML = h;//amount
    cell[8].innerHTML = i;//total
    cell[9].innerHTML = j;//cont'd
    cell[10].innerHTML = k//status

    //change balance
    var x,z;
    x = (document.getElementById('coin').value =parseFloat(document.getElementById('coin').value) - total);
    z = (document.getElementById('stock').value =parseFloat(document.getElementById('stock').value) + amount);
    //print
    $("#cointest").text(parseFloat(x));
    $("#stocktest").text(parseFloat(z));
  }
}

//MarketSell
function MarketShort(){
  var price = parseFloat($("#price").val());
  var amount = parseFloat($("#formMarketShort .amount").val());
  var total = price*amount;
  var coin = parseFloat($("#coin").val());
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = coin + stockValue;
  var defaultBalance = parseFloat($("#balance").val());
  if(price==""||amount==""){
    alert("Please fill in the blank");
  }else if(total>defaultBalance){
    alert("Please fill the correct price");
  }else{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    if(dd<10){
      dd = '0'+dd;
    }
    if(mm<10){
      mm = '0'+mm;
    }
    var a = yy+"-"+mm+"-"+dd+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    var b="Single";
    var c="Short Market";
    var d="Side";
    var e=price;
    var f=price;
    var g="Filled";
    var h=amount;
    var i=total;
    var j="Triggered";
    var k="Market";
    //History
    var tbHis = document.getElementById("24hrHistory").getElementsByTagName("tbody")[0];
    var rowHis = tbHis.insertRow(0);
    var cell = [11];
    for(var cons=0;cons<11;cons++){
      cell[cons] = rowHis.insertCell(cons);
    }
    cell[0].innerHTML = a;//time
    cell[1].innerHTML = b;//pair
    cell[2].innerHTML = c;//type
    cell[3].innerHTML = d;//side
    cell[4].innerHTML = e;//average
    cell[5].innerHTML = f;//price
    cell[6].innerHTML = g;//filled
    cell[7].innerHTML = h;//amount
    cell[8].innerHTML = i;//total
    cell[9].innerHTML = j;//cont'd
    cell[10].innerHTML = k//status

    //change balance
    var x,z;
    x = (document.getElementById('coin').value =parseFloat(document.getElementById('coin').value) + total);
    z = (document.getElementById('stock').value =parseFloat(document.getElementById('stock').value) - amount);
    //print
    $("#cointest").text(parseFloat(x));
    $("#stocktest").text(parseFloat(z));
  }
}

//cancelOrder and cancelAllOrder
function cancelOrder(row){
  console.log("deleted");
  var d = row.parentNode.parentNode.rowIndex;
  var time = document.getElementById('OpenOrder').rows[d].cells[0].innerHTML;
  for(var i=1;i<=$("#24hrHistory tbody tr").length;i++){
    if(document.getElementById('24hrHistory').rows[i].cells[0].innerHTML === time){
      document.getElementById('24hrHistory').rows[i].cells[10].innerHTML = "Cancelled";
      document.getElementById('OpenOrder').deleteRow(d);
    }else{
      alert("Something error, Please refresh this page.");
    }
  }
}


function cancelAllOrder(){
  var r = $("#OpenOrder tbody tr");
  var l = r.length;
  r.remove();
  for(var i=1;i<=l;i++){
    document.getElementById('24hrHistory').rows[i].cells[10].innerHTML = "Cancelled";
  }
}

//25,50,75,100
$(".b025").click(function(){
  var x=0.25;
  var coin = parseFloat($("#coin").val());//左上
  var stockValue = parseFloat($("#stockValue").val());//(value)
  var price = $(this).parents().parents().children(".price").val();//input
  var totalValue = coin + stockValue;
  var amount;
  if(price==""){
    amount = 0;
  }else if(isNaN(price)){
    //TODO stop-limit;
  }else{
    amount=x*totalValue/price;
  }
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
$(".b050").click(function(){
  var x=0.5;
  var coin = $("#coin").val();
  var price = $(this).parents().parents().children(".price").val();
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = parseFloat(coin) + stockValue;
  var amount;
  if(price==""){
    amount = 0;
  }else if(isNaN(price)){
    //TODO stop-limit;
  }else{
    amount=x*totalValue/price;
  }
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
$(".b075").click(function(){
  var x=0.75;
  var coin = $("#coin").val();
  var price = $(this).parents().parents().children(".price").val();
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = parseFloat(coin) + stockValue;
  var amount;
  if(price==""){
    amount = 0;
  }else if(isNaN(price)){
    //TODO stop-limit;
  }else{
    amount=x*totalValue/price;
  }
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
$(".b100").click(function(){
  var coin = $("#coin").val();
  var price = $(this).parents().parents().children(".price").val();
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = parseFloat(coin) + stockValue;
  var amount;
  if(price==""){
    amount = 0;
  }else if(isNaN(price)){
  //TODO stop-limit;
  }else{
    amount=totalValue/price;
  }
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
$(".s025").click(function(){
  var coin = $("#coin").val();
  var price = $(this).parents().parents().children(".price").val();
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = parseFloat(coin) + stockValue;
  var amount = 0.25*totalValue/price;
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
$(".s050").click(function(){
  var coin = $("#coin").val();
  var price = $(this).parents().parents().children(".price").val();
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = parseFloat(coin) + stockValue;
  var amount = 0.5*totalValue/price;
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
$(".s075").click(function(){
  var coin = $("#coin").val();
  var price = $(this).parents().parents().children(".price").val();
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = parseFloat(coin) + stockValue;
  var amount = 0.75*totalValue/price;
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
$(".s100").click(function(){
  var coin = $("#coin").val();
  var price = $(this).parents().parents().children(".price").val();
  var stockValue = parseFloat($("#stockValue").val());
  var totalValue = parseFloat(coin) + stockValue;
  var amount = totalValue/price;
  $(this).parents().parents().children(".amount").val(amount);
  var c = price*amount;
  $(this).parents().parents().children(".total").val(c);
});
