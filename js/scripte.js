
//hw-7
const res = document.querySelector(".dd-menu");
document.querySelector('[rel^="m"]').addEventListener("click", menu);


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

let allDGLection; 

let buttons = document.querySelectorAll('[type="button"]');
buttons.forEach((btn) => {
  btn.addEventListener('click', all_lection);
});

function  all_lection(e)
{
let id = e.target.id;
let lectionContent = document.getElementById("lec_content");
lectionContent.innerHTML="";

if (id!="lec"){
  allDGLection=document.querySelectorAll(`[data-group='${id}']`);
  for (let lection of allDGLection) {
    lectionContent.appendChild(lection.cloneNode(true));
  }
}else{
  allDGLection=document.querySelectorAll(`[data-group]`);
  for (let lection of allDGLection) {
    lectionContent.appendChild(lection.cloneNode(true));
  }
}
}
const lectionLength = document.querySelectorAll("[data-group]").length;
  const load = () => {
    switch (lectionLength) {
      case 1:
        document.getElementById("lec").innerHTML =lectionLength + " лекция"; 
        break;
      case 2:
      case 3:
      case 4:    
        document.getElementById("lec").innerHTML =lectionLength + " лекции"; 
        break;
      default:
        document.getElementById("lec").innerHTML =document.querySelectorAll("[data-group]").length + " лекций"; 
    }
    buttons[3].click(); //а так можно делать?????????

  }
  window.onload = load;
 
 