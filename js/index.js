const swiper = new Swiper('.swiper', {
    speed:800,
    loop:true,
    spaceBetween: 20,

    breakpoints:{
       576:{
        slidesPerView : 1
       },
       768:{
        slidesPerView : 2
       },
       1200:{
        slidesPerView : 3
       },

    }
})

