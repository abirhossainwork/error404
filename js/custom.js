$(document).ready(function () {
	
});
$(window).scroll(function(){
	var plxScroll = $(this).scrollTop();
	$('.parallax-1').css('transform', 'translate3d(0px, '+ ((plxScroll * -0.2)) +'px, 0px)');
	$('.parallax-2').css('transform', 'translate3d(0, '+ ((plxScroll * 0.6)) +'px, 0)');
});
//scroll nav srink and top btn function

//top btn
$top_to_btn = 300;

$('.top').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 500);
});
$(window).scroll(function () {
	$scrolling = $(this).scrollTop();
	if ($scrolling >= 400) {
		$('header').addClass('nav_fix');
	} else {
		$('header').removeClass('nav_fix');
	}
	// top btn effect
	if ($scrolling >= $top_to_btn) {
		$('.top').fadeIn();
	} else {
		$('.top').fadeOut();
	}
})
// Set the date we're counting down to
var countDownDate = new Date("Mar 15, 2019 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "<span> Days</span> " + hours + "<span> Hour</span> "
  + minutes + "<span> Minute</span> " + seconds + "<span> Second</span> ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//active on scroll
$(document).ready(function(){
  var scrollLink = $('.scroll');
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
//	  console.log(scrollbarLocation)
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 150;
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  });
});
//snake


$(window).load(function(){
	var winwid = $(window).innerWidth();
	
	if( winwid <= 768){
//		$('.animatable').removeClass('animatable').removeClass('animated');
		$('.animationDelay').removeClass('animationDelay');
		$('.animationDelayMed').removeClass('animationDelayMed');
		$('.bounceInRight').removeClass('bounceInRight').addClass('fadeInUp');
		$('.bounceInLeft').removeClass('bounceInLeft').addClass('fadeInUp');
		$('footer .animatable').removeClass('animatable').removeClass('animated');
	}
	console.log(winwid);
});