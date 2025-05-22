function nextScene() {
  const container = document.getElementById("sceneContainer");

  container.innerHTML = `
    <div class="scene">
      <img src="assets/royal-kalinga.jpg" class="bg-hearts"/>
      <div class="message">
        <h1>Where It All Began 💍</h1>
        <p>We first saw each other at a wedding... in Royal Kalinga.</p>
        <p>I didn’t know then… this stranger would one day become my favorite hello.</p>
        <button onclick="nextScene2()">Next ➤</button>
      </div>
    </div>
  `;
}

function nextScene2() {
  const container = document.getElementById("sceneContainer");

  container.innerHTML = `
    <div class="scene">
      <div class="message">
        <h1>The First Flame 🔥</h1>
        <p>Chats turned to laughter, long calls, and butterflies…</p>
        <p>July 3rd, 2013 – You asked. I said yes.</p>
        <button onclick="nextScene3()">Next ➤</button>
      </div>
    </div>
  `;
}

// You can keep adding scene functions like nextScene3(), nextScene4(), etc.
