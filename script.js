//what we do toggle function//
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

//end of the what we do toggle function//

//beginning of jquery hover effect on the portfolio part//
$(document).ready(function() {
  $(".empty1").mouseenter(function(){
   $(".overlayone").css("opacity","0.3");
  });
  $(".empty1").mouseleave(function(){
   $(".overlayone").css("opacity","0");
     });
});
$(document).ready(function() {
  $(".empty2").mouseenter(function(){
   $(".overlaytwo").css("opacity","0.7");
  });
  $(".empty2").mouseleave(function(){
   $(".overlaytwo").css("opacity","0");
     });
});
$(document).ready(function() {
  $(".empty3").mouseenter(function(){
   $(".overlaythree").css("opacity","0.4");
  });
  $(".empty3").mouseleave(function(){
   $(".overlaythree").css("opacity","0");
     });
});
$(document).ready(function() {
  $(".empty4").mouseenter(function(){
   $(".overlayfour").css("opacity","0.5");
  });
  $(".empty4").mouseleave(function(){
   $(".overlayfour").css("opacity","0");
     });
});
$(document).ready(function() {
  $(".firstpart").mouseenter(function(){
   $(".overlayfive").css("opacity","0.6");
  });
  $(".firstpart").mouseleave(function(){
   $(".overlayfive").css("opacity","0");
     });
});
  $(document).ready(function() {
    $(".secondpart").mouseenter  (function(){
     $(".overlaysix").css("opacity","0.6");
    });
    $(".secondpart").mouseleave(function(){
     $(".overlaysix").css("opacity","0");
       });
});
$(document).ready(function() {
  $(".thirdpart").mouseenter  (function(){
   $(".overlayseven").css("opacity","0.6");
  });
  $(".thirdpart").mouseleave(function(){
   $(".overlayseven").css("opacity","0");
     });
});
$(document).ready(function() {
  $(".fourthpart").mouseenter  (function(){
   $(".overlayeight").css("opacity","0.6");
  });
  $(".fourthpart").mouseleave(function(){
   $(".overlayeight").css("opacity","0");
     });
});

//end of jquery hover effect on the portfolio part//

//beginning of form validation for the contact us part//
 function validate(){
   var nameInput=document.getElementById("username");
   var emailInput=document.getElementById("useremail");
   var userInput=document.getElementById("usertext");
   var form=document.getElementById("form");

  if(nameInput.value==""){
    alert("Please write your name");
    return false;
   } 
 if(emailInput.value==""){
  alert("Please write your email");
  return false;
  }
  if(userInput.value==""){
    alert("Please write your message");
    return false;
    } 
    alert("Dear "+nameInput.value+"\n Your message has been received.");
}

//end of form validation for the contact us part//

 


 





















