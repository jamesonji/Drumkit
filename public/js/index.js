(function() {
   window.addEventListener('keydown', function(e){
     console.log(e.keyCode);
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     if (!audio) return; // Stop the function
     audio.currentTime = 0; // rewind to the start of sound
     audio.play();
   })
})();
