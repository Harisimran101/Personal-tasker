import {playcalenderanim} from './Calender.js'
import { playclick } from './main.js';
import { playtaskanim } from './Task.js';

const optionbtns = document.querySelectorAll('.option-btn')
const optionscreens = document.querySelectorAll('.option');
const abouticon = document.querySelector('.about-icon');

abouticon.addEventListener('click', () =>{
   anime({
    targets: '.about-popup',
    translateY: ['200%','0px'],
    filter: ['blur(28px)','blur(0px)'],
    opacity: [0,1],
    easing: 'easeInOutCubic',
    complete: function(){
    }

   })


})

let currentscreen = 2

optionscreens[currentscreen].style.display = 'flex'

optionbtns.forEach(function(el,i){
  document.querySelector('.row-2').appendChild(optionscreens[i])

    optionbtns[i].addEventListener('click', () =>{

      playclick()
      playtaskanim()
      playcalenderanim()

        optionscreens.forEach(function(el,i){
             anime({
                targets: optionscreens[i],
                translateX: ['0%','150%'],
                duration: 850,
                easing: 'easeInOutCubic',
                complete: function(){
                 optionscreens[i].style.display = 'none'
                }
             })

        })

        anime({
            targets: optionscreens[i],
            translateX: ['150%','0%'],
            duration: 850,
            easing: 'easeInOutCubic',
            complete: function(){
                optionscreens[i].style.display = 'flex';
               } 
         })

        optionscreens[i].style.display = 'flex'
      
    })

    
})
