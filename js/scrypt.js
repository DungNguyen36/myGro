// smooth scroll
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//jquery toggle active
$("#search-btn").click(function() {
  $('.search-form').toggleClass('active');
  $('.shopping-box').removeClass('active');
  $('.login-form').removeClass('active');
  $('#mynavbar').removeClass('active');
});
$("#cart-btn").click(function() {
  $('.shopping-box').toggleClass('active');
  $('.search-form').removeClass('active');
  $('.login-form').removeClass('active');
  $('#mynavbar').removeClass('active');
});
$("#user-btn").click(function() {
  $('.login-form').toggleClass('active');
  $('.search-form').removeClass('active');
  $('.shopping-box').removeClass('active');
  $('#mynavbar').removeClass('active');
});
$("#menu-btn").click(function() {
  $('#mynavbar').toggleClass('active');
  $('.shopping-box').removeClass('active');
  $('.login-form').removeClass('active');
  $('.search-form').removeClass('active');
});

$(document).scroll(function() {
  $('.search-form').removeClass('active');
  $('.shopping-box').removeClass('active');
  $('.login-form').removeClass('active');
  $('#mynavbar').removeClass('active');
})


//swiperjs
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});

// //toggle active
// let searchform = document.querySelector('.search-form');
//
// document.querySelector('#search-btn').onclick = () =>{
//   searchform.classList.toggle('active');
// }


//remove cart item
var removeCartItemButton = document.getElementsByClassName('fa-trash');
for (var i = 0; i < removeCartItemButton.length; i++){
  var button = removeCartItemButton[i];
  button.addEventListener('click', function(event) {
    var clickedButton = event.target;
    clickedButton.parentElement.remove();
  })
}
