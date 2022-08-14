import {Closemenu} from './main.js'

const logincontainer = document.querySelector('.Login-container')
const submitbtn = document.querySelector('.submit-login');
const username = document.querySelector('.username')
const usercategory = document.querySelector('.user-category')
const name = document.querySelector('.name')
const category = document.querySelector('.category')

name.innerText = localStorage.getItem('Name')
category.innerText = localStorage.getItem('Category')

username.value = localStorage.getItem('Name')
usercategory.value = localStorage.getItem('Category')

submitbtn.addEventListener('click', () =>{
localStorage.setItem('Name',username.value)
localStorage.setItem('Category',usercategory.value)
Closemenu()

anime({
  targets: logincontainer,
  opacity: [1,0],
  filter: ['blur(0px)','blur(40px)'],
  translateX: '-100%',
  duration: 1000,
  easing: 'easeInOutCubic',
})

localStorage.setItem('login','done')

name.innerText = localStorage.getItem('Name')
category.innerText = localStorage.getItem('Category')

})

if(localStorage.getItem('login') == 'done'){
    logincontainer.style.display = 'none'
}


document.querySelector('.personalize-icon').addEventListener('click', () =>{
 logincontainer.style.display = 'grid'

  anime({
    targets: logincontainer,
    opacity: [0,1],
    filter: ['blur(40px)','blur(0px)'],
    translateX: '0%',
    duration: 1000,
    easing: 'easeInOutCubic',
  })

})

document.querySelector('.login-avatar').src = document.querySelector('.profile').src

document.querySelector('.avatar-changer').addEventListener('change', (e) =>{
  const filereader = new FileReader()
  filereader.readAsDataURL(e.target.files[0])

  filereader.addEventListener('load', () =>{
    localStorage.setItem('Avatar',filereader.result)
    document.querySelector('.profile').src = localStorage.getItem('Avatar')
    document.querySelector('.login-avatar-img').src = localStorage.getItem('Avatar')
  })


})

document.querySelector('.profile').src = localStorage.getItem('Avatar')
document.querySelector('.login-avatar-img').src = localStorage.getItem('Avatar')

