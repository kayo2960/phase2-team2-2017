// JavaScript File
/* global$*/   


/*global google map js*/
function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 40.781523, lng: -73.966675 },
          scrollwheel: false,
          zoom: 14
        });
      }
 
      
/*animation page example*/
/*global$*/

/* Target the item using the class as the selector.*/
/* Single animation*/
$('.box1').animate({left: 500}, 100);
$('.box4').animate({left: 1000}, 300);
/* Chained animation*/
$('.box2').animate({ 
    top: 70,
    left: 100,
    width: 100,
    height: 100,
}).animate({
    top: 50,
    left: 150,
    width: 50,
    height: 50,
}).animate({
    top: 150,
    left: 300,
    width: 300,
    height: 120,
}).animate({
    top: 70,
    left: 10,
    width: 50,
    height: 50,
}).animate({
    top: 350,
    left: 10,
    width: 50,
    height: 50,
});

$('.box3').animate({ 
    top: 200,
    left: 30,
    width: 80,
    height: 100,
}).animate({
    top: 200,
    left: 50,
    width: 50,
    height: 50,
}).animate({
    top: 150,
    left: 300,
    width: 200,
    height: 120,
}).animate({
    top: 170,
    left: 170,
    width: 50,
    height: 50,
}).animate({
    top: 370,
    left: 150,
    width: 50,
    height: 50,
});





/*global windows*/
/*global currentPos*/
 /*global math*/
/*///////////////////////////////////////////////////anime////////////////////////////*/
   
function myMove() {
    var elem = document.getElementById("img1"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}    
    


/*////////////////////////form radio code////////////////////////////*/

function myFunction() {
    var x = document.getElementById("myRadio2").value;
    document.getElementById("results").innerHTML = x;
}

function howFeels() {
  var text;
  var howFeels = document.getElementById("myRadio").value;

  switch(howFeels) {
    // add code here
    case "very good":
    text window.open(src="do.thml");
    break;
    case "very good":
    text window.open(src="see.thml");
    break;
    case "very good":
    text window.open(src="eat.html");
    break;
  }
  document.getElementById("demo").innerHTML = text;
}