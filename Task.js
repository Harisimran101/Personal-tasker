import { playclick } from "./main.js";

const taskinput = document.querySelector('.task-input');
const createtaskbtn = document.querySelector('.create-task-btn')
const deletetaskbtn = document.querySelector('.delete-task-btn');
const trashbtn = document.querySelector('.trash-all-task');

let currenttasks = []
let selectedtask;

document.querySelector('.task-input-container i').addEventListener('click', () =>{
    taskinput.value = ''
})

trashbtn.addEventListener('click', () =>{

        anime({
            targets: alltasks,
             opacity: [1,0],
             filter: ['blur(0px)','blur(20px)'],
             delay: function(el,i){ 
                return (i * 70) + 100;
             },
             
             complete: function(){
                 alltasks.forEach(function(el,i){
                   alltasks[i].remove()  
                   localStorage.setItem('Mytasks',JSON.stringify([]))
                 })
             }

        })


})

createtaskbtn.addEventListener('click', () =>{

    if(taskinput.value !== ''){
        currenttasks.push(createtask(taskinput.value,'task',document.querySelector('.task-container')))
        localStorage.setItem("Mytasks", JSON.stringify(currenttasks))
        alltasks = document.querySelectorAll('.task')
        taskinput.value = '';
         
    }
})

function createtask(text,cssclass,appendto){
     const task = document.createElement('div')
     task.innerText = text;
     task.classList.add(cssclass);
     appendto.appendChild(task)
     return task.innerText
}

window.addEventListener('load', () =>{


    JSON.parse(localStorage.getItem('Mytasks')).forEach(function(el,i){
         currenttasks.push(el)
         createtask(el,'task',document.querySelector('.task-container'))
    })
})


let alltasks;

    function updatetask(){
        alltasks = document.querySelectorAll('.task');
        alltasks.forEach(function(el,i){
       
           alltasks[i].addEventListener('click', () =>{
              alltasks.forEach(function(el,i){
                alltasks[i].classList.remove('selected-task')
              })
       
              selectedtask = alltasks[i]
              alltasks[i].classList.add('selected-task')
              taskinput.value = alltasks[i].innerText
           })
       })
       
    }

    setTimeout(() =>{
        updatetask()
    },100)

    document.addEventListener('click', () =>{
        updatetask()
    })

window.addEventListener('keydown', (e) =>{
    if(e.code == 'Enter'){
        if(taskinput == document.activeElement){ 
            currenttasks.push(createtask(taskinput.value,'task',document.querySelector('.task-container')))
            localStorage.setItem("Mytasks", JSON.stringify(currenttasks))
            taskinput.value = '';
        }
    }
})

deletetaskbtn.addEventListener('click', () =>{
  
    selectedtask.remove()
})

export function playtaskanim(){
     anime({
        targets: '.task',
        filter: ['blur(20px)','blur(0px)'],
        opacity: [0,1],
        translateY: ['30px','0px'],
        delay: function(el,i){
            return (i * 70) +250
        },
        easing: 'easeInOutCubic'
     })
}