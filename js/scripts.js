//Back End
var username;

//constructs a text string around the username variable to be inserted later
var s1Output = function(username){
  return "What a fantastic name," + username + ", let's keep going!"
};

//setcolor sets the background color for the page based on the user's submitted preference in section 2.
var setcolor = function(favoriteColor){
  document.body.style.backgroundColor = favoriteColor;
};

//constructs a text string around the username variable to be inserted later
var s2Output= function(username){
  return "Well there's no accounting for taste," + username +", but let us continue."
};

var tendency;

// Front End
$(document).ready(function(){
  $("form#section1").submit(function(event){
    event.preventDefault();
    username = ($("#username").val());
    if (username) {
      var s1Outputa = s1Output(username);
      $("#section1").fadeOut();
      $(".s1Outputa").text(s1Outputa);
      $("#section2").fadeIn();
    } else {
    //programmer regrets the alert format failsafe for not entering data but was unable to determine from the lesson a more elegant means of doing so.  This repeats in each section.
      alert("Please choose a name before proceeding.")
    }
  });

  $("form#section2").submit(function(event){
    event.preventDefault();
    var favoriteColor = ($("#color").val());
    //here we call the setcolor function as defined in the upper section.
    $(setcolor(favoriteColor));
    //what follows is a first fumbling attempt at recreating the mad lib insertion format by building a string of text using the s1output function in the business logic section2
    var s2Outputa = s2Output(username);
    $("#section2").fadeOut();
    $(".s2Outputa").text(s2Outputa);
    $("#section3").fadeIn();
  });

//each of the following form sections operates roughly the same, adding to the variable tendency based on input submitted//

  $("form#section3").submit(function(event){
    event.preventDefault();
    var radio1 = ($("input:radio[name=clothes]:checked").val());
    if (radio1) {
      tendency = radio1;
      $("#section3").fadeOut();
      //the following line represents the programmer -finally- remembering that he could insert the username directly into the DOM by referencing a class that would insert at multiple locations.
      $(".s3Outputa").text(username);
      $("#section4").fadeIn();
    } else {
      alert("Please choose an option before proceeding.")
    }
  });
  $("form#section4").submit(function(event){
    event.preventDefault();
    var radio2 = ($("input:radio[name=location]:checked").val());
    if (radio2) {
      tendency += radio2;
      $("#section4").fadeOut();
      $("#section5").fadeIn();
  } else {
      alert("Please choose an option before proceeding.")
  }
  });
  $("form#section5").submit(function(event){
    event.preventDefault();
    var radio3 = ($("input:radio[name=bus]:checked").val());
    if (radio3) {
      tendency += radio3;
      $("#section5").fadeOut();
      $("#section6").fadeIn();
    } else {
      alert("Please choose an option before proceeding.")
    }
  });
  $("form#section6").submit(function(event){
    event.preventDefault();
    var radio4 = ($("input:radio[name=house]:checked").val());
    if (radio4) {
      tendency += radio4;
      $("#section6").fadeOut();
      $("#conclusion").fadeIn();
      //this section evaluates the tendency variable based on whether the values submitted in previous sections are present in it, and then opens appropriate sections of information if they are.//
      var aVar = (tendency.match(/A/g));
      var bVar = (tendency.match(/B/g));
      var cVar = (tendency.match(/C/g));
      var dVar = (tendency.match(/D/g));
      if (aVar != null){
        $("#php").fadeIn()};
      if (bVar != null){
        $("#java").fadeIn()};
      if (cVar != null){
        $("#cSharp").fadeIn()};
      if (dVar != null){
        $("#ruby").fadeIn()};
    } else {
      alert("Please choose an option before proceeding.")
    }
  });
});
