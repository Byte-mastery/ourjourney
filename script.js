const scenesData = [
  {
    title: "Hi Jaan",
    text: "Click below to see our journey.",
    img: "https://cdn.pixabay.com/photo/2017/08/06/22/59/heart-2598386_1280.png"
  },
  {
    title: "Where It All Began",
    text: "We met at a wedding. I didn’t know then that this stranger would one day become my favorite hello.",
    img: "https://cdn.pixabay.com/photo/2016/03/31/20/58/couple-1295130_1280.png"
  },
  {
    title: "The First Flame",
    text: "From chats to laughter, to long calls and butterflies — we became each other’s person.\nJuly 3rd, 2013: You asked. I said yes.",
    img: "https://cdn.pixabay.com/photo/2019/08/19/18/00/chat-4418835_1280.png"
  },
  {
    title: "Almost, But Not Yet",
    text: "Years passed… We met only a few times. But love? It never faded.",
    img: "https://cdn.pixabay.com/photo/2018/03/07/14/39/train-3201140_1280.png"
  },
  {
    title: "The Day Distance Lost",
    text: "After 6 years of waiting, I finally saw your eyes not through a screen, but across the table.",
    img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/candle-1835611_1280.png"
  },
  {
    title: "A Year of Us",
    text: "June 2019 – May 2020: We lived in the same city, shared sunsets, and built dreams.",
    img: "https://cdn.pixabay.com/photo/2017/07/31/11/20/sunset-2558489_1280.png"
  },
  {
    title: "Time, Again",
    text: "November 13th, 2023: Celebrating your birthday — one of my favorite memories.\n\nDecember 18th, 2024: Distance returns, but so does our strength. You’re in Dubai. I’m in Odisha. But our love is in both places.",
    img: "https://cdn.pixabay.com/photo/2017/08/01/11/40/cake-2561453_1280.png"
  },
  {
    title: "The Promise",
    text: "One day, after two years, our story will reach its next chapter: togetherness forever.",
    img: "https://cdn.pixabay.com/photo/2016/03/31/19/40/home-1295140_1280.png"
  },
  {
    title: "Until Then…",
    text: "In every timezone, I love you. In every waiting moment, I choose you. In every heartbeat, I carry you.",
    img: "https://cdn.pixabay.com/photo/2017/02/01/10/55/note-2020867_1280.png"
  }
];

const storyContainer = document.getElementById("story-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentScene = 0;

function renderScene(index) {
  storyContainer.innerHTML = "";

  const sceneData = scenesData[index];
  const sceneDiv = document.createElement("div");
  sceneDiv.classList.add("scene", "active");

  const img = document.createElement("img");
  img.src = sceneData.img;
  img.alt = sceneData.title;
  img.className = "scene-illustration";

  const title = document.createElement("h1");
  title.textContent = sceneData.title;

  const text = document.createElement("p");
  text.innerHTML = sceneData.text.replace(/\n/g, "<br>");

  sceneDiv.appendChild(img);
  sceneDiv.appendChild(title);
  sceneDiv.appendChild(text);

  storyContainer.appendChild(sceneDiv);

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === scenesData.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentScene > 0) {
    currentScene--;
    renderScene(currentScene);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentScene < scenesData.length - 1) {
    currentScene++;
    renderScene(currentScene);
  }
});

renderScene(currentScene);
