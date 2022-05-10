$(document).ready( function() {
var $submenu = $('.submenu');
var $mainmenu = $('.mainmenu');
$submenu.hide();
$submenu.first().delay(400).slideDown(700);
$submenu.on('click','li', function() {
$submenu.siblings().find('li').removeClass('chosen');
$(this).addClass('chosen');
});
$mainmenu.on('click', 'li', function() {
$(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
});
$mainmenu.children('li:last-child').on('click', function() {
$mainmenu.fadeOut().delay(500).fadeIn();
});
});

/*Преобразовать каждую строку в верхний регистр.*/
document.querySelectorAll('h5.card-title').forEach(function(el) {
    el.innerHTML =  el.innerHTML.toUpperCase();
  });

/*Обрезать строку до 20 символов, и в конце вывести "..." (три точки). */
(function(){
    var cut = document.getElementsByClassName('card-text');
    for( var i = 0; i < cut.length; i++ ){
      if (cut[i].innerText.length>20){
        cut[i].innerText = cut[i].innerText.slice(0,20) + '...';
      }
    }
  })();