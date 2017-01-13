//Back End
var username;

var s1Output = function(username){
  return "What a fantastic name," + username + ", let's keep going!"
};

var setcolor = function(favoriteColor){
  document.body.style.backgroundColor = favoriteColor;
};

var s2Output= function(username){
  return "Well there's no accounting for taste," + username +", but let us continue."
};

var tendency;

var count = function(string,char) {
  return string.match(/char/g).length;
};

// Front End
$(document).ready(function(){
  $("form#section1").submit(function(event){
    event.preventDefault();
    username = ($("#username").val());
    var s1Outputa = s1Output(username);
    $("#section1").hide();
    $(".s1Outputa").text(s1Outputa);
    $("#section2").show();
  });

  $("form#section2").submit(function(event){
    event.preventDefault();
    var favoriteColor = ($("#color").val());
    $(setcolor(favoriteColor));
    var s2Outputa = s2Output(username);
    $("#section2").hide();
    $(".s2Outputa").text(s2Outputa);
    $("#section3").show();
  });
  $("form#section3").submit(function(event){
    event.preventDefault();
    var radio1 = ($("input:radio[name=clothes]:checked").val());
    tendency = radio1;
    $("#section3").hide();
    $(".s3Outputa").text(username);
    $("#section4").show();
  });
  $("form#section4").submit(function(event){
    event.preventDefault();
    var radio2 = ($("input:radio[name=location]:checked").val());
    tendency += radio2;
    $("#section4").hide();
    $("#section5").show();
  });
  $("form#section5").submit(function(event){
    event.preventDefault();
    var radio3 = ($("input:radio[name=bus]:checked").val());
    tendency += radio3;
    $("#section5").hide();
    $("#section6").show();
  });
  $("form#section6").submit(function(event){
    event.preventDefault();
    var radio4 = ($("input:radio[name=house]:checked").val());
    tendency += radio4;
    $("#section6").hide();
    $("#conclusion").show();
    alert(tendency);
    var aVar = (tendency.match(/A/g));
    var bVar = (tendency.match(/B/g));
    var cVar = (tendency.match(/C/g));
    var dVar = (tendency.match(/D/g));
    if (aVar != null){
      $("#php").show()};
    if (bVar != null){
      $("#java").show()};
    if (cVar != null){
      $("#cSharp").show()};
    if (dVar != null){
      $("#ruby").show()};
  });
});
