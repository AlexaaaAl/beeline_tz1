/*$(document).ready( function() {
  let $submenu = $('.submenu');
  let $mainmenu = $('.mainmenu');
  let Arrow=document.getElementById("arrow");
  $submenu.hide();
  $submenu.first().delay(400).slideDown(700);
  Arrow.setAttribute("transform", "rotate(180)");

  //нажатие на пункты меню 
  $mainmenu.on('click', 'li', function() {
    $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
    if (!($(this).next('#arrow').hasAttribute("transform"))) { 
      $(this).next('#arrow').setAttribute("transform", "rotate(180)");
    }else $(this).next('#arrow').removeAttribute("transform");
  
  });
  $mainmenu.children('li:last-child').on('click', function() {
   $mainmenu.fadeOut().delay(500).fadeIn();
  });
});
*/


const res = $(".dd-menu");
$('[rel^="m"]').on("click", menu);

$(document).click((e)=> {
  if ($(e.target).closest(res).length || $(e.target).closest('.knop').length) return;
  res.fadeOut(400);
  // e.stopPropagation();
});

function menu(){
  let link = $(this).attr('rel'),
      el = $('.dd-menu.'+link),
      sv=$('.dd-svg.'+link);
  if(el.css("display") == "none"){
    res.hide();
    el.fadeIn(400);
    sv.attr("transform", "rotate(180)");
  }
  else{
    el.fadeOut(400);
    sv.removeAttr("transform");
  }
}



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
