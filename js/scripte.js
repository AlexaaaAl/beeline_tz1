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

//hw-7
const res = document.querySelector(".dd-menu");
document.querySelector('[rel^="m"]').addEventListener("click", menu);
/*
document.addEventListener('click', (e) => {
  if ($(e.target).closest(res).length || $(e.target).closest('.knop').length) return;
  res.fadeOut(400);
  // e.stopPropagation();
});*/

function menu(){
  let link =this.getAttribute('rel'),
      el = document.querySelector('.dd-menu.'+link),
      sv=document.querySelector('.dd-svg.'+link);
  
  if (!el.classList.contains('show')){
    /*if(el.style.display  == "none"){
    res.hidden = false;
    el.style.display = 'inline-block';*/
    el.classList.add('show');
    setTimeout(() => {el.style.opacity = 1;}, 1);
    sv.setAttribute("transform", "rotate(180)");
  }
  else{
    
    el.style.opacity = 0;
    setTimeout(() => {el.classList.remove('show')}, 200);
    sv.removeAttribute("transform");
    /*res.hidden = true;
    el.style.display = 'none';
    sv.removeAttr("transform");*/
  }
}

//end hw-7


/* //jqery
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
*/


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


//все лекции hw-8
let html=document.querySelectorAll("[data-type='html']"),
    css=document.querySelectorAll("[data-type='css']"),
    js=document.querySelectorAll("[data-type='js']"),
    allDT=document.querySelectorAll("[data-type]"),
    all_lecDt="",
    all_html="",
    all_js="",
    all_css="";
let lectLen=allDT.length ;

for (let elem of html) {
  //alert(elem.innerHTML);
  all_html+= "<div class='card' style='width: 18rem;'>"+elem.innerHTML+"</div>"; 
}
for (let elem of allDT) {
  //alert(elem.innerHTML);
  all_lecDt+= "<div class='card' style='width: 18rem;'>"+elem.innerHTML+"</div>"; 
}
for (let elem of css) {
  //alert(elem.innerHTML);
  all_css+= "<div class='card' style='width: 18rem;'>"+elem.innerHTML+"</div>"; 
}
for (let elem of js) {
  //alert(elem.innerHTML);
  all_js+= "<div class='card' style='width: 18rem;'>"+elem.innerHTML+"</div>"; 
}
document.getElementById("lec_content").innerHTML = all_lecDt; 


document.getElementById("lec").innerHTML =""+lectLen+ " лекций"; 

let button = document.getElementById('lec'),
    buttonhtml = document.getElementById('all_html'),
    buttoncss = document.getElementById('all_css'),
    buttonjs = document.getElementById('all_js');

button.addEventListener('click', function() {
  document.getElementById("lec_content").innerHTML = ""; 
  document.getElementById("lec_content").innerHTML = all_lecDt;  
});
buttonhtml.addEventListener('click', function() {
  document.getElementById("lec_content").innerHTML = ""; 
  document.getElementById("lec_content").innerHTML = all_html;  
});
buttoncss.addEventListener('click', function() {
  document.getElementById("lec_content").innerHTML = ""; 
  document.getElementById("lec_content").innerHTML = all_css;  
});
buttonjs.addEventListener('click', function() {
  document.getElementById("lec_content").innerHTML = ""; 
  document.getElementById("lec_content").innerHTML = all_js;  
});
