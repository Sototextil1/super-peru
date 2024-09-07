function countdownTimeStart(){

var countDownDate = new  Date().getTime()+60000*main_timer_value;

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
  document.getElementById("ced-timer-cart").innerHTML = minutes + ":" + seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ced-timer-cart").innerHTML = countdownTimeStart();
    }
}, 1000);
}

countdownTimeStart();

// $(document).ready(function(){
// 	var img_height = $(".ced_list--items img").outerHeight();
// 	var img_width = $(".ced_list--items img").outerWidth();
// 	console.log(img_height, img_width);
// 	$(".video-wrapper iframe").css({"width": img_width, "height": img_height});
// });