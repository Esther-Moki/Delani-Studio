$(document).ready(function(){
  $("#picone").click(function(){
    $("#potato").toggle();
    $("#picone").hide();
  $("#potato").click(function(){
    $("#picone").show();
    $("#potato").hide();
    });
   
  });
});

$(document).ready(function(){
  $("#pictwo").click(function(){
    $("#chips").toggle();
    $("#pictwo").hide();
  $("#chips").click(function(){
    $("#pictwo").show();
    $("#chips").hide();
    });
   
  });
});

$(document).ready(function(){
  $("#picthree").click(function(){
    $("#fries").toggle();
    $("#picthree").hide();
  $("#fries").click(function(){
    $("#picthree").show();
    $("#fries").hide();
    });
   
  });
});

// $(document).ready(function(){
//   $("#empty1").hover(function(){
//     $(".overlay").css("opacity,1");  

//   });
// });

$(document).ready(function() {
  
  $(".empty1").mouseenter  (function(){
   $(".overlay").css("opacity","0.1");
  });
  
  $(".empty1").mouseleave(function(){
   $(".overlay").css("opacity","0");
     });
  
  });





// $(document).ready(function(){
//   $("#picone").click(function(){
//     if($("#potato").toggle()){
//       $("#picone").hide();
//     }
//     else{
//       $ ("#potato").click(function(){
//         $("#picone").toggle();
//         $("potato").hide();

//       });
//     }
//   });
// });













// $(document).ready(function(){
//   $("#picone").click(function(){
//     if( $("#potato").toggle()){
//       $("#picone").hide();
  

    
//   });
// });



// $(document).ready(function() {
//   $("p","img").click(function() {
//     $("img").show();
//   });
// });


// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").toggle();
//     $(".walrus-hidden").toggle();
//   });
// });