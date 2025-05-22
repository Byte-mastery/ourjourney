let currentScene = 0;
const scenes = document.querySelectorAll('.scene');

function nextScene() {
  if (currentScene < scenes.length - 1) {
    scenes[currentScene].classList.remove('active');
    currentScene++;
    scenes[currentScene].classList.add('active');
  } else {
    document.getElementById("nextBtn").style.display = "none";
  }
}
