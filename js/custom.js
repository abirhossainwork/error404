$(document).ready(function () {
	
});
$(window).scroll(function(){
	var plxScroll = $(this).scrollTop();
	$('.parallax-1').css('background-position', ' 0px '+ ((plxScroll * -0.2)) +'px');
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
});


$(".color_picker i").on('click', function() {
	$(".color_picker").toggleClass('r0');
});
$(".color_picker div.red").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#ff4e3d");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(255, 78, 61, 0.80)");
});
$(".color_picker div.blue").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#3d8fff");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(61, 143, 255, 0.80)");
});
$(".color_picker div.green").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#22c622");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(34, 198, 34, 0.8)");
});
$(".color_picker div.golden").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#ff9e3d");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(255, 158, 61, 0.80)");
});
$(".color_picker div.yellow").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#fff83d");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(255, 248, 61, 0.80)");
});
$(".color_picker div.gray").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#999999");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(153, 153, 153, 0.80)");
});