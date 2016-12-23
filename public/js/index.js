(function() {
   function playSound(e){
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     if (!audio) return; // Stop the function
     audio.currentTime = 0; // rewind to the start of sound
     audio.play();
     key.classList.add('playing');
   }
   
   function removeTransition(e){
     if(e.propertyName !== 'transform') return;
     this.classList.remove('playing');
   }
   
   const keys = document.querySelectorAll('.key');
   
   keys.forEach( key => key.addEventListener('click', function(e){
     console.log(e);
     audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
     audio.currentTime=0;
     audio.play();
     key.classList.add('playing');
   }));
   
   keys.forEach( key => key.addEventListener('transitionend', removeTransition));
   
   window.addEventListener('keydown', playSound);
})();

