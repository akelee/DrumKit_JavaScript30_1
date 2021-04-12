function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

//for animation of keys
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 

//when pressing a key that isn't defined

if(!audio) return; //stop the functionfrom running altogether

audio.currentTime = 0; //so we don't have to wait till one sound completely stops playing before hitting it again to make sounds. Rewinds to start
audio.play();
key.classList.add('playing');

}
    //use querySelector as we are looking for only 1. If looking for many, querySelectAll


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound); 