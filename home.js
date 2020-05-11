$(document).ready(function () {
  $(".class1").click(function () {
    $(".delan1").toggle();
    $(".paragraph1").toggle();
  });

  $(".class2").click(function () {
    $(".delan2").toggle();
    $(".paragraph2").toggle();
  });

  $(".class3").click(function () {
    $(".delan3").toggle();
    $(".paragraph3").toggle();
  });

  $(".asset1").hover(
    function () {
      $(".work1").show("");
    },
    function () {
      $(".work1").hide("");
    }
  );
  $(".asset2").hover(
    function () {
      $(".work2").show("");
    },
    function () {
      $(".work2").hide("");
    }
  );
  $(".asset3").hover(
    function () {
      $(".work3").show("");
    },
    function () {
      $(".work3").hide("");
    }
  );
  $(".asset4").hover(
    function () {
      $(".work4").show("");
    },
    function () {
      $(".work4").hide("");
    }
  );
  $(".asset5").hover(
    function () {
      $(".work5").show("");
    },
    function () {
      $(".work5").hide("");
    }
  );
  $(".asset6").hover(
    function () {
      $(".work6").show("");
    },
    function () {
      $(".work6").hide("");
    }
  );
  $(".asset7").hover(
    function () {
      $(".work7").show("");
    },
    function () {
      $(".work7").hide("");
    }
  );
  $(".asset8").hover(
    function () {
      $(".work8").show("");
    },
    function () {
      $(".pt8").hide("");
    }
  );

});

function myFunction(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name == "" || email == "" || message == ""){
  alert ("Please enter your name, email and add a commment!");
  }
  else alert( name + " ,thanks for your message, it is well received.");
  }
  