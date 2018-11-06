<html>
<head>
  <title></title>
</head>
<link href="../../css/bootstrap-4.1.1/bootstrap.min.css" rel="stylesheet">
<style>
br {
  content: "";
  margin: 1em;
  display: block;
  margin-bottom: -12px;
}
button{
  margin-left:8px;
}
body{
  padding-top: 70px;
}
</style>
<script src="../../js/jquery-3.3.1/jquery-3.3.1.min.js"></script>
<script src="../../js/bootstrap-4.0.0/bootstrap.min.js"></script>
<body>
  <input type="hidden" id="coin">
  <input type="hidden" id="price">
  <input type="hidden" id="stock">
  <script id="testing">
  var coin = 10000;
  var current = 50;
  var stock = 0;
  function gaga(){
    current += 1;
    console.log("current="+current);
    $("#pricetest").text(current);
    $("#MarketLPrice").text(current);
    $("#MarketSPrice").text(current);
    trig();
  }
  function gamgam(){
    current -= 1;
    console.log("current="+current);
    $("#pricetest").text(current);
    trig();
  }
  document.getElementById("coin").value = coin;
  document.getElementById("price").value = current;
  $("#MarketLPrice").val(current);
  $("#MarketSPrice").val(current);
  document.getElementById("stock").value = stock;
  function trig(){
    var r = $("#OpenOrder tbody tr");
    var str_store = "";
    var p=0,a=0,t=0;
    for(var i=1;i<r.length+1;i++){
      str_store = document.getElementById('OpenOrder').rows[i].cells[2].innerHTML;
      p = parseFloat(document.getElementById('OpenOrder').rows[i].cells[4].innerHTML);
      a = parseFloat(document.getElementById('OpenOrder').rows[i].cells[5].innerHTML);
      t = parseFloat(document.getElementById('OpenOrder').rows[i].cells[7].innerHTML);
      if(str_store === "Long Limit"){
        if(current<=p){
          //filled
          document.getElementById('24hrHistory').rows[i].cells[4].innerHTML = current;
          document.getElementById('24hrHistory').rows[i].cells[6].innerHTML = "Filled Order";
          document.getElementById('24hrHistory').rows[i].cells[9].innerHTML = "Triggered";
          document.getElementById('24hrHistory').rows[i].cells[10].innerHTML = "Filled";
          console.log("ready-remove-long:row"+i);
          r[i-1].remove();
          //coin,price,stock
          var x,z;
          x = (document.getElementById('coin').value =parseFloat(document.getElementById('coin').value) - t);
          z = (document.getElementById('stock').value =parseFloat(document.getElementById('stock').value) + a);
          //print
          $("#cointest").text(parseFloat(x));
          $("#stocktest").text(parseFloat(z));

        }
      }else if(str_store === "Short Limit"){
        if(current>=p){
          //filled
          document.getElementById('24hrHistory').rows[i].cells[4].innerHTML = current;
          document.getElementById('24hrHistory').rows[i].cells[6].innerHTML = "Filled Order";
          document.getElementById('24hrHistory').rows[i].cells[9].innerHTML = "Triggered";
          document.getElementById('24hrHistory').rows[i].cells[10].innerHTML = "Filled";
          console.log("ready-remove-short:row"+i);
          r[i-1].remove();
          //coin,price,stock
          var x,z;
          x = (document.getElementById('coin').value =parseFloat(document.getElementById('coin').value) + t);
          z = (document.getElementById('stock').value =parseFloat(document.getElementById('stock').value) - a);
          //print
          $("#cointest").text(parseFloat(x));
          $("#stocktest").text(parseFloat(z));
        }
      }else{
        // TODO:stop-limit
      }
    }
  }
  </script>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="../index.html">BinanceFYP</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active" href="../index.html">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../other/faq.html">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../other/faq.html?p=cu">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../login/login.html">Login & Register</a>
          </li>
          <li class="nav-item dropdown">
            <img class="nav-link dropdown-toggle" id="navbarDropdown" src="../../src/gear.png" role="button" data-toggle="dropdown" aria-haspopup="true" height="30px" width="30px" style="margin-top:5.5px;" alt="setting"></img>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-item">
                <a>
                  Night Shifting
                </a>
                <a>
                  <label class="switch" style="margin-bottom:0rem;">
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                  </label>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
      <div class="col-lg-2 col-md-4 col-md-offset-4">
        var you have $<span id="cointest"><script>document.write($("#coin").val());</script></span><br/>
        var fake current price <br/><h2 class="text-center"style="color:red"><span id="pricetest"><script>document.write($("#price").val());</script></span></h2><button onclick="gaga();">+</button><button onclick="gamgam();">-</button><br/>
        var you have stock <span id="stocktest"><script>document.write($("#stock").val());</script></span>.
      </div>
    <!-- this is limit -->
    <div class="col-lg-10">
      <div class="col-md-8 col-md-offset-7">
        <div class="panel">
          <div class="panel-heading">
            <a href="#" class="a active" id="aLimit">Limit</a>
            <a href="#" class="a" id="aMarket">Market</a>
            <a href="#" class="a" id="aStopLimit">Stop-Limit</a>
          </div>
          <div class="panel-body">
            <div class="row" style="border:1px solid gray;">
              <form id="formLimitLong" style="display: block;padding-right:20px; border-right: 1px solid #ccc;">
                <b>Limit Buy Stock:</b><br/>
                Price: <input type="text" id="limitLPrice" class="price" required/><br/>
                Amount: <input type="text" id="limitLAmount" class="amount" required/><br/>
                <div><button class="025">25%</button><button class="050">50%</button><button class="075">75%</button><button class="100">100%</button></div><br/>
                Total: <input type="text" id="limitLTotal" class="total" readonly/><br/>
                <input type="button" onclick="LimitLong()" class="form-control btn-login" value="Place Long Order" id="limitBuy"/>
              </form>
              <form id="formLimitShort" style="display: block;padding-left:20px">
                <b>Limit Sell Stock:</b><br/>
                Price: <input type="text" id="limitSPrice" class="price" required/><br/>
                Amount: <input type="text" id="limitSAmount" class="amount" required/><br/>
                <div><button class="025">25%</button><button class="050">50%</button><button class="075">75%</button><button class="100">100%</button></div><br/>
                Total: <input type="text" id="limitSTotal" class="total" readonly/><br/>
                <input type="button" onclick="LimitShort()" class="form-control btn-login" value="Place Short Order" id="limitSell"/>
              </form>
              <!-- this is market -->
              <form id="formMarketLong" style="display: none;padding-right:20px; border-right: 1px solid #ccc;">
                <b>Market Buy Stock:</b><br/>
                Price: <input type="text" id="MarketLPrice" class="price" readonly/><br/>
                Amount: <input type="text" id="MarketLAmount"class="amount" required/><br/>
                <div><button class="025">25%</button><button class="050">50%</button><button class="075">75%</button><button class="100">100%</button></div><br/>
                <input type="button" onclick="MarketLong()" class="form-control btn-login" value="Place Long Order" id="MarketBuy"/>
              </form>
              <form id="formMarketShort" style="display: none;padding-left:20px">
                <b>Market Sell Stock:</b><br/>
                Price: <input type="text" id="MarketSPrice" class="price" readonly/><br/>
                Amount: <input type="text" id="MarketSAmount" class="amount" required/><br/>
                <div><button class="025">25%</button><button class="050">50%</button><button class="075">75%</button><button class="100">100%</button></div><br/>
                <input type="button" onclick="MarketShort()" class="form-control btn-login" value="Place Short Order" id="MarketSell"/>
              </form>
              <!-- this is stop-limit -->
              <form id="formstopLimitLong" style="display: none;padding-right:20px; border-right: 1px solid #ccc;">
                <b>Stop Limit Buy Stock:</b><br/>
                Stop: <input type="text" id="stopLimitLStop" value="0" required/><br/>
                Limit: <input type="text" id="stopLimitLLimit" value="0" required/><br/>
                Amount: <input type="text" id="stopLimitLAmount" class="amount" value="0" required/><br/>
                <div><button class="025">25%</button><button class="050">50%</button><button class="075">75%</button><button class="100">100%</button></div><br/>
                Total: <input type="text" id="stopLimitLTotal" class="total" readonly/><br/>
                <input type="submit" class="form-control btn-login" value="Place Stop Long Order" id="StopLimitBuy"/>
              </form>
              <form id="formStopLimitShort" style="display: none;padding-left:20px">
                <b>Stop Limit Sell Stock:</b><br/>
                Stop: <input type="text" id="stopLimitSStop" value="0" required/><br/>
                Limit: <input type="text" id="stopLimitSLimit" value="0" required/><br/>
                Amount: <input type="text" id="stopLimitSAmount" class="amount" value="0" required/><br/>
                <div><button class="025">25%</button><button class="050">50%</button><button class="075">75%</button><button class="100">100%</button></div><br/>
                Total: <input type="text" id="stopLimitSTotal" class="total" readonly/><br/>
                <input type="submit" class="form-control btn-login" value="Place Stop Short Order" id="StopLimitBuy"/>
              </form>
            </div>
          </div>
        </div>
      </div>
        <div class="col-md-8 col-md-offset-7">
          <div class="panel">
            <div class="panel-heading">
              <a href="#" class="a active" id="aOOrder">Open Order</a>
              <a href="#" class="a" id="a24History">24hr History</a>
            </div>
            <div class="panel-body">
              <div class="row">
              <table class="table table-sm table-bordered" id="OpenOrder" style="display: block;">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Pair</th>
                    <th scope="col">Type</th>
                    <th scope="col">Side</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Filled%</th>
                    <th scope="col">Total</th>
                    <th scope="col">Trigger Conditions</th>
                    <th scope="col"><a href="#" onclick="cancelAllOrder()">Cancel All</a></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <table class="table table-sm" id="24hrHistory" style="display: none;">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Pair</th>
                    <th scope="col">Type</th>
                    <th scope="col">Side</th>
                    <th scope="col">Average</th>
                    <th scope="col">Price</th>
                    <th scope="col">Filled</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total</th>
                    <th scope="col">Trigger Conditions</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            </div>
          </div>
      </div>
    </div>
  </body>
  <script src="../../js/customize/order/order.js"></script>
  <script>
  $(function(){
    $("#aOOrder").click(function(e){
      $("#OpenOrder").delay(100).fadeIn(100);
      $("#24hrHistory").fadeOut(100);
      $('#a24History').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

    $("#a24History").click(function(e){
      $("#24hrHistory").delay(100).fadeIn(100);
      $("#OpenOrder").fadeOut(100);
      $('#aOOrder').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

    $("#aLimit").click(function(e){
      $("#formLimitLong").delay(100).fadeIn(100);
      $("#formLimitShort").delay(100).fadeIn(100);
      $("#formMarketLong").fadeOut(100);
      $("#formMarketShort").fadeOut(100);
      $("#formstopLimitLong").fadeOut(100);
      $("#formStopLimitShort").fadeOut(100);
      $('#aMarket').removeClass('active');
      $('#aStopLimit').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $("#aMarket").click(function(e){
      $("#formMarketLong").delay(100).fadeIn(100);
      $("#formMarketShort").delay(100).fadeIn(100);
      $("#formLimitLong").fadeOut(100);
      $("#formLimitShort").fadeOut(100);
      $("#formstopLimitLong").fadeOut(100);
      $("#formStopLimitShort").fadeOut(100);
      $('#aLimit').removeClass('active');
      $('#aStopLimit').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $("#aStopLimit").click(function(e){
      $("#formstopLimitLong").delay(100).fadeIn(100);
      $("#formStopLimitShort").delay(100).fadeIn(100);
      $("#formLimitLong").fadeOut(100);
      $("#formLimitShort").fadeOut(100);
      $("#formMarketLong").fadeOut(100);
      $("#formMarketShort").fadeOut(100);
      $('#aLimit').removeClass('active');
      $('#aMarket').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

  });
  </script>
  </html>
