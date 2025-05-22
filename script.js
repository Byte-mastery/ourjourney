let currentScene = 0;
const scenes = document.querySelectorAll('.scene');

function startJourney() {
  scenes[currentScene].classList.add('hidden');
  currentScene++;
  scenes[currentScene].classList.remove('hidden');
}

function nextScene() {
  if (currentScene < scenes.length - 1) {
    scenes[currentScene].classList.add('hidden');
    currentScene++;
    scenes[currentScene].classList.remove('hidden');
  }
}
