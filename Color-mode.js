const darkmode = document.querySelector('.dark-mode-icon')
const darkmodeicon = document.querySelector('.dark-mode-icon i')

darkmode.addEventListener('click', (e) =>{


    if(localStorage.getItem('color-scheme') == 'light'){
        darkmodeicon.classList = 'bi bi-brightness-high-fill';
        darkmode.style.background = 'white'  
        localStorage.setItem('color-scheme','dark')
        document.querySelector(':root').style.setProperty('--primary', 'white')


    }

   else if(localStorage.getItem('color-scheme') == 'dark'){
        darkmodeicon.classList = 'bi bi-moon-stars-fill';
        localStorage.setItem('color-scheme','light')
        document.querySelector(':root').style.setProperty('--primary', '#131313')

        darkmode.style.background = document.querySelector(':root').style.getPropertyValue('--light')  
    }

//    darkmodeicon.classList = 'bi bi-brightness-high-fill';
  
  })
  

window.addEventListener('load', () =>{

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      localStorage.setItem('color-scheme','light')
     }
  
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('color-scheme','dark')
     }
  
  })
  
  