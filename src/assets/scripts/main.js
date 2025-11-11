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

// const menu = document.querySelector('.menu');
// const menunav = document.querySelector('.menunav');
// menu.addEventListener('click',function(){
//   menunav.style.display = "initial"
// })