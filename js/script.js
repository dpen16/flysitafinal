// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

$('.sidemenu').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})

//sidbar
$(".open").click(function(){
	$(".mega-sidebar").addClass("open-sidebar");
  });

  $(".close").click(function(){
	$(".mega-sidebar").removeClass("open-sidebar");
  });

var swiper = new Swiper(".banner-swiper", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    },
});

var swiper = new Swiper(".partner-swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    },
    breakpoints: {
      200: {
        slidesPerView: 2,
        
      },
      320: {
        slidesPerView: 2,
        
      },
      481: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});

// Language-switcher
$(".language-option").each(function() {
  var each = $(this)
  each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
  var allOptions = $(".language-dropdown-menu").children('a');
  each.find(".language-dropdown-menu").on("click", "a", function() {
       allOptions.removeClass('selected');
       $(this).addClass('selected');
       $(this).closest(".language-option").find(".lang-name").html($(this).text());
  });
})

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
  $('.destination-from').select2();
});
$(document).ready(function() {
  $('.destination-to').select2();
});
$(document).ready(function() {
  $('.nationality').select2();
});
 // input Click //
 $('.traveller_input').on('click', function(){
  $('.traveller_list').addClass('traveller_list_current');
});


$('.travel_btn i').on('click', function () {
	$('.traveller_list').removeClass('traveller_list_current');
})

// Date Picker //
flatpickr('#calendar-tomorrow', {
});

// Flight Schedule //

var swiper = new Swiper(".flightSchedule-swiper", {
  spaceBetween: 10,
  loop:true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      200: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 2,
      },
      481: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 8,
        
      },
    },
});
// login password //
$(".toggle-password").click(function() {
  $(this).toggleClass("las la-eye-slash fa-eye las la-eye");
  // var input = $('#password');
    var input = $(this).parent().find(':input');
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});