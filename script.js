let currentScene = 0;

function nextScene() {
  const scenes = document.querySelectorAll('.scene');
  scenes[currentScene].classList.remove('active');
  currentScene++;
  if (currentScene < scenes.length) {
    scenes[currentScene].classList.add('active');
  }
}
