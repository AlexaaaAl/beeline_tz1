$(document).ready( function() {
  let $submenu = $('.submenu');
  let $mainmenu = $('.mainmenu');
  let Arrow=document.getElementById("arrow");
  $submenu.hide();
  $submenu.first().delay(400).slideDown(700);
  //нажатие на пункты подменю (js,git и т.д.)
  $submenu.on('click','li', function() {
    if ($submenu.children().hasClass("chosen")){
    $(this).removeClass('chosen');
    }else $(this).addClass('chosen');
  });
  //нажатие на пункты меню 
  $mainmenu.on('click', 'li', function() {
    $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
    if (!Arrow.hasAttribute("transform")) { 
      Arrow.setAttribute("transform", "rotate(180)");
    }else Arrow.removeAttribute("transform");
  
  });
  $mainmenu.children('li:last-child').on('click', function() {
   $mainmenu.fadeOut().delay(500).fadeIn();
  });
});




/*Преобразовать каждую строку в верхний регистр.
1 вариант нахождения всех заголовков внутри базового уровня*/
document.querySelectorAll('.base h5.card-title').forEach((el)=> {
    el.innerHTML =  el.innerHTML.toUpperCase();
  });

/*вариант 2 нахождения всех заголовков внутри базового уровня*/
const base = document.querySelector('section.base');

/*Обрезать строку до 20 символов, и в конце вывести "..." (три точки). */
(()=>{
    let cut = base.getElementsByClassName('card-text');
    for( let i = 0; i < cut.length; i++ ){
      if (cut[i].innerText.length>20){
        cut[i].innerText = cut[i].innerText.slice(0,20) + '...';
      }
    }
  })();
  /*проверка ветви hw-7
*/
