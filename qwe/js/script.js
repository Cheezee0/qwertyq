let text = document.getElementById("text");
let kks = document.querySelector(".kks");
text.onclick = function myFunction() {
    setTimeout(() =>{
        kks.style.display = 'flex'
        setTimeout(() => {
            kks.style.opacity = 100;
        
            
        },100)
    })
}