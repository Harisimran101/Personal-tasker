
setInterval(() =>{
    const date = new Date()

    document.querySelector('.current-time').innerText = date.getHours() + ":" + date.getMinutes()
},10)
