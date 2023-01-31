$(document).ready(
    function(){
        $(window).scroll(function(){
            if(this.scrollY > 40){
                $('.navbar').addClass('sticky');
                $('.logo').addClass('sticky');
                $('.menu').addClass('sticky');
            }else{
                $('.navbar').removeClass('sticky');
                $('.logo').removeClass('sticky');
                $('.menu').removeClass('sticky');
            }
        })
    }
);
function myFunction(x) {
    x.classList.toggle("change");
    $('.navbar .menu').toggleClass('active');
  }
//typing script
var typed = new Typed(".typing",{
    strings: ["provide remote monitoring and support of ill patients in the ICU.","improve the overall efficiency of healthcare delivery.", "reduce the burden on healthcare providers by automation."],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
});

$('.carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1000:{
            items: 3,
        }
    }
    
});