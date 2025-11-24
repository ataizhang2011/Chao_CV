/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

$('.menu').click(function(){
  $('.menunav').show();
});
$('.btn_x').click(function(){
  $('.menunav').hide();
});
$('.menunav').click(function(){
  $(this).hide();
  $('.menu').show();
});
$('.cvcompleto').click(function(){
  $('.menu').hide();
  $('.menunav').hide();
  $('.nav_cv').animate({
    left:0
  },2000);  
});
$('.desino').click(function(){
  $('.menunav').hide();
});
$('.contacto').click(function(){
  $('.menunav').hide();
});
$('.btn_x_cv').click(function(){
  $('.nav_cv').css('left','-500px');
  $('.menu').show();
});
$('.nav_cv').click(function(){
  $(this).hide();
  $('.menu').show();
});
$('.flecha').hide();
$(document).scroll(function(){
  if($(document).scrollTop() > 80){
     $('.flecha').show();    
  }else{
    $('.flecha').hide();
  }
});

// $('.flecha').hover(function(){
//   $(this).css('transform','scale(1.1)')
// },function(){
//    $(this).css('transform','scale(1.0)')
// });

// const menu = document.querySelector('.menu');
// const menunav = document.querySelector('.menunav');
// menu.addEventListener('click',function(){
//   menunav.style.display = "initial"
// })