$(document).ready(function () {
	
});
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
  $(":root").get(0).style.setProperty("--prc", "#08c");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(0, 136, 204, 0.80)");
});
$(".color_picker div.green").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#a0ce4e");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(160, 206, 78, 0.80)");
  $("#about .about-skill .prog .prog-bar:after").css("color : #000");
});
$(".color_picker div.golden").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#f3c26b");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(243, 194, 107, 0.80)");
});
$(".color_picker div.yellow").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#ffc10f");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(255, 213, 0, 0.80)");
});
$(".color_picker div.gray").on('click', function() {
  $(":root").get(0).style.setProperty("--prc", "#999999");
  $(":root").get(0).style.setProperty("--prcfi", "rgba(153, 153, 153, 0.80)");
});
var mixer = mixitup('.row.filter');
//$('.row.filtered').mixItUp();
$('.slid').slick({
  dots: false,
  infinite: true,
	autoplay: true,
  speed: 300,
  nextArrow: '<ul><li><i class="fa fa-chevron-right right_arrow"></i></li></ul>',
  prevArrow: '<ul><li><i class="fa fa-chevron-left left_arrow"></i></li></ul>',
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: true,
      }
    }
  ]
});
$(document).ready(function(){
    $('.venobox').venobox({
		framewidth: '80vw',
	}); 
});
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 1000) {
			$(".prog-bar").each(function () {
				$each_bar_width = $(this).attr('aria-valuenow');
				$(this).width($each_bar_width + '%');
			});
		}
	});
});