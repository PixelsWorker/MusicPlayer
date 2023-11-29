let audio = document.getElementById('audioPlayer');

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

function setVolume() {
  audio.volume = document.getElementById('volumeSlider').value;
}

