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

/*==============================================================================*/
/*==============FORM PAGE =======================================================*/
(function(){
            'use strict';
          
            var slider = document.getElementById('slider');
            var label = document.getElementById('label');
            var btn = document.getElementById('btn');
            var result = document.getElementById('result');
            var numbers = document.getElementById('numbers');
            var symbols = document.getElementById('symbols');
            
            function getPassword(){
                var seed_letters = 'abcdefghijklmnopqrstuvwzyx';
                var seed_numbers = '`123456789';
                var seed_symbols = '!@#$%^&*()_+';
                var seed;
                
                var len = slider.value;
                var pwd = '';
                
                seed = seed_letters + seed_letters.toUpperCase();
                if (numbers.checked === true) {
                    seed += seed_numbers;
                }
                
                if (symbols.checked) {
                    seed += seed_numbers;
                }
                
                
               // for (var i = 0; i < len; i++){
                 //   pwd += seed[Math.floor(Math.random() * seed.length)];
               // }
              //   result.value = 'fjkdjfjkasjdfk';
            }
            
                    slider.addEventListener('change',function() {
                        label.innerHTML = this.value;
                    });

                    btn.addEventListener('click',function() {
                        getPassword();
                       // result.value = 'fjkdjfjkasjdfk';
                    });

                    result.addEventListener('click',function() {
                        this.select();
                        
                        getPassword();//uchigawa ni ireta kore
                    });

                    
            
        })();