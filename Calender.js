const date = new Date();

var month = date.getMonth();
var year = date.getFullYear();
const daysInMonth = new Date(year, month, 0).getDate();
console.log(daysInMonth)

const num = document.querySelector('.num')
for(let i = 0; i < daysInMonth; i++){
   const datenum = document.createElement('div');
   datenum.innerText = i + 1;
   num.appendChild(datenum)
}

const elems = document.querySelectorAll('.num div')

elems[date.getDate() -1].classList.add('active')

elems.forEach(function(el,i){
elems[i].addEventListener('click', (e) =>{
  
  elems.forEach(function(el,i){
    elems[i].classList.remove('active')
  })
  
  e.target.classList.add('active')
})

})

export function playcalenderanim(){

  anime({
    targets: elems,
    opacity: [0,1],
    filter: ['blur(13px)','blur(0px)'],
    translateY: ['40px','0px'],
    delay: function(el,i){
         return (i * 40) + 130
    },
    easing: 'easeInOutExpo'
})


}


