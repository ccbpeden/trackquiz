//Back End
var s1Output = function(username){
  return "What a fantastic name," + username + ", let's keep going!"
};

var s1outputa;

var setcolor = function(favoriteColor){
  document.body.style.backgroundColor = favoriteColor;
};

var tendency;

// Front End
$(document).ready(function(){
  $("form#section1").submit(function(event){
    event.preventDefault();
    var username = ($("#username").val());
    s1Outputa = s1Output(username);
    $("#section1").hide();
    $(".s1Outputa").text(s1Outputa);
    $("#section2").show();
  });

  $("form#section2").submit(function(event){
    event.preventDefault();
    var favoriteColor = ($("#color").val());
    $(setcolor(favoriteColor));
    $("#section2").hide();
    $("#section3").show();
  });
  $("form#section3").submit(function(event){
    event.preventDefault();
    var radio1 = ($("input:radio[name=clothes]:checked").val());
    alert("radio1 set to" + radio1);
    tendency = radio1;
    alert("tendency set to" + tendency);
    $("#section3").hide();
    $("#section4").show();
  });
  $("form#section4").submit(function(event){
    event.preventDefault();
    var radio2 = ($("input:radio[name=location]:checked").val());
    alert("radio2 set to" + radio2);
    tendency += radio2;
    alert("tendency set to" + tendency);
    $("#section4").hide();
    $("#section5").show();
  });
  $("form#section5").submit(function(event){
    event.preventDefault();
    var radio3 = ($("input:radio[name=bus]:checked").val());
    alert("radio3 set to" + radio3);
    tendency += radio3;
    alert("tendency set to" + tendency);
    $("#section5").hide();
    $("#section6").show();
  });
  $("form#section6").submit(function(event){
    event.preventDefault();
    var radio4 = ($("input:radio[name=house]:checked").val());
    alert("radio4 set to" + radio4);
    tendency += radio4;
    alert("tendency set to" + tendency);
    $("#section6").hide();
    $("#conclusion").show();
  });
});
