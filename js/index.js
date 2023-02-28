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

const $ = document;

let landingTitle = $.querySelector('.landing__container-title')
let coursesCount = $.querySelector('#courses-count')
let minutesCount = $.querySelector('#minutes-count')
let usersCount = $.querySelector('#user-count')

window.addEventListener('load',()=>{
    
    
    let landingText ='ما به هر قیمتی دوره آموزشی تولید نمیکنیم '
    
    let countIndex = 0;
   typeWriter(countIndex,landingText)
   numberCunter(40,coursesCount)
   numberCunter(31_320,minutesCount)
   numberCunter(31_071,usersCount)
})

function typeWriter(index,text){
    // console.log(text.length);
    // console.log(index);
    if(index < text.length){
      landingTitle.innerHTML += text[index]
      index++
    }
    
    setTimeout(()=>{
        typeWriter(index,text)
    }      
    ,100)
}

let count = 0;

function numberCunter(max,elem){
    let interval = setInterval(()=>{
       count++
       elem.innerHTML = count
       if(count === max){
        clearInterval(interval)
       }
    },10)
}

