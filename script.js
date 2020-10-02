window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop function running

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    console.log(this)
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));