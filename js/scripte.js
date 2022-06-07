
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
      setTimeout(() => {link_el.classList.remove('show')}, 200);
      link_svg.removeAttribute("transform");
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
let allDT="";
  const load = () => {
    document.getElementById("lec").innerHTML =""+document.querySelectorAll("[data-type]").length + " лекций"; 
  }
  window.onload = load;
  function lec_click(but)
  {
  let id = but.id;
  let parent = document.getElementById("lec_content");
  parent.innerHTML="";
  if (id!="lec"){
    allDT=document.querySelectorAll(`[data-type='${id}']`);
    for (var i in allDT) {
      let lec_child= allDT[i].cloneNode(true);
      parent.appendChild(lec_child);
    }
  }else{
    allDT=document.querySelectorAll(`[data-type]`);
    for (var i in allDT) {
      let lec_child= allDT[i].cloneNode(true);
      parent.appendChild(lec_child);
    }
  }
  }
 
