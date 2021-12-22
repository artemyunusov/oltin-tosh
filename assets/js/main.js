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