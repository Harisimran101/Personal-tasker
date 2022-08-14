const profile = document.querySelector('.profile');
const closeicon = document.querySelector('.close-icon');



closeicon.addEventListener('click', () =>{
  
 Closemenu()
})

export function Closemenu(){
  anime({
    targets: '.user-info',
    translateX: ['0%','-110%'],
    duration: 850,
    delay: 30,
    easing: 'easeInOutCubic'
 })

 anime({
  targets: '.bottom-icons',
  opacity: [1,0],
  delay: function(el,i){
    return (i * 100) + 550
  },
  easing: 'easeInOutQuart'
  })
  

}

function Openmenu(){

  anime({
    targets: '.user-info',
    translateX: ['-110%','0%'],
    duration: 850,
    delay: 30,
    easing: 'easeInOutCubic'
 })

anime({
targets: '.bottom-icons',
scale: [0,1],
translateY: ['50px','0px'],
opacity: [0,1],
delay: function(el,i){
  return (i * 100) + 550
},
easing: 'easeInOutQuart'
})

}


profile.addEventListener('click', () =>{
  Openmenu()
})



document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
	  Closemenu()
	}
});

var x = document.getElementById("myAudio"); 

export function playclick() { 
  setTimeout(() =>{
    x.play(); 

  },100)
} 


function textToAudio() {
  let msg = '';
  
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  const synth = window.speechSynthesis;

  const voices = synth.getVoices();
console.log(voices)
  speech.text = msg;
  speech.volume = 4;
  speech.rate = 0.7;
  speech.pitch = 3;
  
  window.speechSynthesis.speak(speech);
}

setTimeout(() =>{
  textToAudio()
},500)

