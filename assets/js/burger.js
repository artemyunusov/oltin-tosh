$(".burger").click(function () {
  $(this).toggleClass('burger-clicked');
  $('.mask').toggleClass('mob-active');
  $('.nav-mob').toggleClass('mob-active');
  $(document.body).toggleClass('oh');
});

let mask = document.querySelector('.mask');
// let modalShow = document.querySelectorAll('.product-btn-span');
// let modalShow2 = document.querySelector('.intro-btn-2');
// let modalShow3 = document.querySelector('.intro-btn-3');
// let modalShow4 = document.querySelector('.single-btn');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal-close');
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-mob');
let menuFixed = document.querySelector('.nav-fixed');
let menu = document.querySelector('.nav');
// let links = document.querySelectorAll('.nav-link');
// let mobLinks = document.querySelectorAll('.nav-fixed-link');
// let introBtn = document.querySelectorAll('.slider-btn a');
// let aboutBtn = document.querySelector('.about-btn a');
// let dleftBtn = document.querySelector('.duplex-left-btn a');
// let drightBtn = document.querySelector('.duplex-right-btn a');
// let tabBtn = document.querySelector('.portfolio-btn a');

// for(let i = 0; i < introBtn.length; i++){
//   introBtn[i].addEventListener('click', function(e){

//     // console.log(e.target);
//     e.preventDefault();
//     scrollToTarget(e.target.hash);
//   })
// }

// aboutBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

// tabBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

// dleftBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

// drightBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

menuFixed.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-fixed-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
    if(mask.classList.contains('mob-active')){
      mask.classList.remove('mob-active');
      document.body.classList.remove('oh');
      burger.classList.remove('burger-clicked');
      nav.classList.remove('mob-active');
    }
  }
})

menu.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
  }
})

function scrollToTarget(id){
  let target = document.querySelector(id);
  let pos = target.offsetTop - 20;

  window.scrollTo({
    top: pos,
    behavior: "smooth"
  })
}



// mediaBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   scrollToTarget(mediaBtn.hash);
// })

// let mobSub = document.querySelector('.nav-fixed-pos');
// let mobSubTarget = document.querySelector('.nav-fixed-sub');

// mobSub.addEventListener('click', function(e){

//   // e.preventDefault();

//   if(e.target.parentNode.classList.contains('nav-fixed-pos')){

//     mobSubTarget.classList.toggle('sub-menu-show');
//   }
// })

// $(function(){

//   $('.faq .faq-text:first').show();

//   $('.faq .faq-title').on('click', function(){
//     $('.faq-title').removeClass('active');
//     $(this).addClass('active');
//     let answer = $(this).next();
    
//     $('.faq .faq-text:visible').not(answer).slideUp(400);
//     answer.slideDown(400);
//   });
  
// });

// $(function(){

//   $('.single-more').on('click', function(){

//     let answer = $('.single-text');
//     answer.slideToggle(400);
//   });
  
// });

// modalShow1.addEventListener('click', function(e){
//   e.preventDefault();

//   modal.classList.add('modal-show');
//   mask.classList.add('mob-active');

// })

// modalShow2.addEventListener('click', function(e){
//   e.preventDefault();

//   modal.classList.add('modal-show');
//   mask.classList.add('mob-active');

// })

// modalShow3.addEventListener('click', function(e){
//   e.preventDefault();

//   modal.classList.add('modal-show');
//   mask.classList.add('mob-active');

// })

modalClose.addEventListener('click', function(){
  
  modal.classList.remove('modal-show');
  mask.classList.remove('mob-active');

})

// modalShow4.addEventListener('click', function(e){
//   e.preventDefault();

//   modal.classList.add('modal-show');
//   mask.classList.add('mob-active');

// })



let mainCatalog = document.querySelector(".main-catalog");
let itemChoose = document.querySelector(".modal-input-dis");

mainCatalog.addEventListener("click", function(e){
  let target = e.target;
  let targetParent = e.target.parentNode.parentNode;

  if(target.classList.contains("product-btn-span")){
    e.preventDefault();

    // console.log(targetParent);

    itemChoose.value = "Choosen item: " + targetParent.querySelector('.product-id span').innerText;
    modal.classList.add('modal-show');
    mask.classList.add('mob-active');
  };
})