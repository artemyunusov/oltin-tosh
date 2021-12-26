$(function(){

  $('.main-p li:first').show();

  $('.main-p .main-p-name').on('click', function(){
    $('.main-p-name').removeClass('active');
    $(this).addClass('active');
    let answer = $(this).next();
    
    $('.main-p .main-p-name-list:visible').not(answer).slideUp(400);
    answer.slideDown(400);
  });
  
});

let socksGroup = document.querySelectorAll("#socks-group");
let linenGroup = document.querySelectorAll("#linen-group");
let shirtGroup = document.querySelectorAll("#shirt-group");
let boxesGroup = document.querySelectorAll("#boxes-group");

let menSocks = document.querySelectorAll("#socks-man");
let womenSocks = document.querySelectorAll("#socks-woman");
let kidSocks = document.querySelectorAll("#socks-kid");

let menLinen = document.querySelectorAll("#linen-man");

let menShirt = document.querySelectorAll("#shirt-man");

let menBoxes = document.querySelectorAll("#boxes-man");

let menSocksTitle = document.querySelector("#socks-man-title");
let menLinenTitle = document.querySelector("#linen-man-title");
let menShirtTitle = document.querySelector("#shirt-man-title");
let menBoxesTitle = document.querySelector("#boxes-man-title");
let womenSocksTitle = document.querySelector("#socks-woman-title");
let kidSocksTitle = document.querySelector("#socks-kid-title");
let sportSockstTitle = document.querySelector("#socks-sport-title");
let catalogType = document.querySelector(".catalog-type");
let catalogName = document.querySelector(".catalog-name");

menSocksTitle.addEventListener("click", function(e){
  removeAll();
  menSocks.forEach((el) => {
    el.style.display = "block";
  });
  catalogName.innerHTML = "Paypoq";
  catalogType.innerHTML = "Erkaklar uchun";
})

womenSocksTitle.addEventListener("click", function(e){
  removeAll();
  womenSocks.forEach((el) => {
    el.style.display = "block";
  });
  catalogName.innerHTML = "Paypoq";
  catalogType.innerHTML = "Ayollar uchun";
})

kidSocksTitle.addEventListener("click", function(e){
  removeAll();
  kidSocks.forEach((el) => {
    el.style.display = "block";
  });
  catalogName.innerHTML = "Paypoq";
  catalogType.innerHTML = "Bolalar uchun";
})

menLinenTitle.addEventListener("click", function(e){
  removeAll();
  menLinen.forEach((el) => {
    el.style.display = "block";
  });
  catalogName.innerHTML = "Belyo";
  catalogType.innerHTML = "Erkaklar uchun";
})

menShirtTitle.addEventListener("click", function(e){
  removeAll();
  menShirt.forEach((el) => {
    el.style.display = "block";
  });
  catalogName.innerHTML = "Mayka";
  catalogType.innerHTML = "Erkaklar uchun";
})

menBoxesTitle.addEventListener("click", function(e){
  removeAll();
  menBoxes.forEach((el) => {
    el.style.display = "block";
  });
  catalogName.innerHTML = "Trusik";
  catalogType.innerHTML = "Erkaklar uchun";
})

function removeAll(){
  menSocks.forEach((el) => {
    el.style.display = "none";
  });
  womenSocks.forEach((el) => {
    el.style.display = "none";
  });
  kidSocks.forEach((el) => {
    el.style.display = "none";
  });
  menLinen.forEach((el) => {
    el.style.display = "none";
  });
  menBoxes.forEach((el) => {
    el.style.display = "none";
  });
  menShirt.forEach((el) => {
    el.style.display = "none";
  });
}

// menSocks.forEach((el) => {
//   el.style.display = "none";
// });
// womenSocks.forEach((el) => {
//   el.style.display = "none";
// });
// kidSocks.forEach((el) => {
//   el.style.display = "none";
// });
// menLinen.forEach((el) => {
//   el.style.display = "none";
// });
// menBoxes.forEach((el) => {
//   el.style.display = "none";
// });
// menShirt.forEach((el) => {
//   el.style.display = "none";
// });