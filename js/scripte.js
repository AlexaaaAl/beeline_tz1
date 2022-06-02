//hw-7


function dd_menu(but_id){
  let link_el = document.querySelector('.dd-menu.'+but_id),
      link_svg=document.querySelector('.dd-svg.'+but_id);
  
  if (!link_el.classList.contains('show')){    /**/
    link_el.classList.add('show');
    setTimeout(() => { link_el.style.opacity = 1;}, 1000);
    link_svg.removeAttribute("transform");
    
  }
  else{
    link_el.style.opacity = 0;
    setTimeout(() => { link_el.classList.remove('show')}, 200);
    link_svg.setAttribute("transform", "rotate(180)");
  }
}

//end hw-7




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
