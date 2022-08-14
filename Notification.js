function message(img){
    const notification = new Notification('Hi Haris',{
        body: 'Kaam kerna pare gaa for Car😍',
        icon: img
    });
}

Notification.requestPermission().then(permission =>{
    


})

document.querySelector('.goal-option').addEventListener('click', () =>{
        message(document.querySelector('.profile').src)

})
