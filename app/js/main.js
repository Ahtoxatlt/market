$(function(){
    const swiper = new Swiper('.slider-one-cart', {
        spaceBetween: 50,
        navigation: {
            nextEl: '.slider-btn-next',
            prevEl: '.slider-btn-prev',
          },
      });

      var mixer = mixitup('.release__cart');

      const sliderCart = new Swiper('.slider-swiper-cart', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 28,
        navigation: {
            nextEl: '.slider-cart-btn-next',
            prevEl: '.slider-cart-btn-prev',
          },
      });

      const sliderFeedback = new Swiper('.feedback__inner-cart', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 28,
        navigation: {
            nextEl: '.feedback__btn-next',
            prevEl: '.feedback__btn-prev',
          },
      });
});

$(function () {
 
    $(".rate-star").rateYo({
      
      rating: 4.5,
    starWidth: "15px",
    spacing: "1px",
    readOnly: true,
    });
   
  });