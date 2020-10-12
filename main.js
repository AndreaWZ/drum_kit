window.onload = function(){

};

window.addEventListener("keydown", function(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("buttonEffect");

}); 

window.addEventListener("keyup", function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("buttonEffect");
})