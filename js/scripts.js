//Back End
var s1Output = function(username){
  return "What a fantastic name," + username + ", let's keep going!"
};

var s1outputa;

var setcolor = function(favoriteColor){
//  alert("attempting to set favorite color to background " + favoriteColor)
  document.body.style.backgroundColor = favoriteColor;
};

// Front End
$(document).ready(function(){
  $("form#section1").submit(function(event){
    event.preventDefault();
    var username = ($("#username").val());
//    alert("username set to " + username);
    s1Outputa = s1Output(username);
//    alert(s1Outputa);
    $("#section1").hide();
    $(".s1Outputa").text(s1Outputa);
    $("#section2").show();
  });
  $("form#section2").submit(function(event){
    event.preventDefault();
    var favoriteColor = ($("#color").val());
//    alert("favorite color set to" + favoriteColor);
    $(setcolor(favoriteColor));
    $("#section2").hide();
    $("#section3").show();
  });
  $("form#section3").submit(function(event){
    event.preventDefault();
    var favoriteColor = ($("#color").val());
//    alert("favorite color set to" + favoriteColor);
    $(setcolor(favoriteColor));
    $("#section4").hide();
    $("#section5").show();
});
