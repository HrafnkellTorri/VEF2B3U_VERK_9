$(document).ready(function() {
    
    $("#Q1").html("150 million kilometers");
    $("#Q2").html("200 million kilometers");

    	function Change() {
    			$("#Q").fadeOut("Slow", function(){
  		 		$("#Q1").html("284,400 km");
  		 		$("#Q2").html("384,400 km");
  		 		$("p").html("What is the distance to the moon?");
  		 		$("div").css("width","235");
  		 		$("div").fadeIn("Slow");
  		 	});}

    	$( "#Q1" ).on("click",function() {
  		 	Change()
  		});

		$( "#Q2" ).on("click",function() {
  		 	Change()
  		});


});