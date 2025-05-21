document.getElementById('playSound').addEventListener('click', function () {
  var audio = new Audio('./src/js/sound.mp3');
  audio.loop = true;
  audio.play().catch(function (error) {
    console.error("Audio playback failed:", error);
  });
});
