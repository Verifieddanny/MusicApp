//code for icons
const home = document.querySelector(".home");
const library = document.querySelector(".library");
const radio = document.querySelector(".radio");
const video = document.querySelector(".video");

const home2 = document.querySelector(".home2");
const lib2 = document.querySelector(".library2");
const radio2 = document.querySelector(".radio2");
const video2 = document.querySelector(".video2");

const collection = document.querySelector(".content3");
const radioPage = document.querySelector(".content4");
const videoPage = document.querySelector(".content5");
const hero = document.querySelector(".hero");
const artist = document.querySelector(".artist");
const homeTx = document.querySelector(".homeTx");
const libraryTx = document.querySelector(".libTx");
const radioTx = document.querySelector(".radTx");
const videoTx = document.querySelector(".videoTx");
const navText = document.querySelectorAll(".navText");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const progressBar = document.querySelector(".seek_slider");
const volumeBar = document.querySelector(".volume_slider");
const displayAlbum = document.querySelector(".playHere");
const title = document.querySelector(".big2");
const singer = document.querySelector(".small2");
//function stacks
const homeFunc = function () {
  if ((home.style.backgroundImage = `url('./items/home.png')`)) {
    home.style.backgroundImage = `url('./items/Vector.png')`;
  }

  library.classList.remove("show");
  radio.classList.remove("show");
  video.classList.remove("show");
  content.classList.remove("hidden");
  body.classList.remove("body");
  playListPage.classList.remove("show");
  collection.classList.remove("show");
  radioPage.classList.remove("show");
  videoPage.classList.remove("show");
  hero.classList.add("add");
  artist.classList.add("add");

  if (!homeTx.classList.contains("shows")) {
    homeTx.classList.add("shows");
    homeTx.classList.remove("homeTxs");
  }
  libraryTx.classList.remove("shows");
  radioTx.classList.remove("shows");
  videoTx.classList.remove("shows");

  if ((home2.style.backgroundImage = `url('./items/home.png')`)) {
    home2.style.backgroundImage = `url('./items/Vector.png')`;
  }
  lib2.classList.remove("show");
  radio2.classList.remove("show");
  video2.classList.remove("show");
};

const libraryFunc = function () {
  if ((home.style.backgroundImage = `url('./items/Vector.png')`)) {
    home.style.backgroundImage = `url('./items/home.png')`;
  }

  library.classList.add("show");
  radio.classList.remove("show");
  video.classList.remove("show");

  //navigating to collection

  collection.classList.add("show");
  body.classList.remove("body");
  content.classList.add("hidden");
  playListPage.classList.remove("show");
  radioPage.classList.remove("show");
  videoPage.classList.remove("show");
  if (!homeTx.classList.contains("homeTxs")) {
    homeTx.classList.add("homeTxs");
    homeTx.classList.remove("shows");
  }
  libraryTx.classList.add("shows");
  radioTx.classList.remove("shows");
  videoTx.classList.remove("shows");

  if ((home2.style.backgroundImage = `url('./items/Vector.png')`)) {
    home2.style.backgroundImage = `url('./items/home.png')`;
  }

  lib2.classList.add("show");
  radio2.classList.remove("show");
  video2.classList.remove("show");
};

const radioFunc = function () {
  if ((home.style.backgroundImage = `url('./items/Vector.png')`)) {
    home.style.backgroundImage = `url('./items/home.png')`;
  }

  library.classList.remove("show");
  radio.classList.add("show");
  video.classList.remove("show");

  //navigating to radio page

  radioPage.classList.add("show");
  body.classList.remove("body");
  content.classList.add("hidden");
  playListPage.classList.remove("show");
  collection.classList.remove("show");
  videoPage.classList.remove("show");
  if (!homeTx.classList.contains("homeTxs")) {
    homeTx.classList.add("homeTxs");
    homeTx.classList.remove("shows");
  }
  libraryTx.classList.remove("shows");
  radioTx.classList.add("shows");
  videoTx.classList.remove("shows");

  if ((home2.style.backgroundImage = `url('./items/Vector.png')`)) {
    home2.style.backgroundImage = `url('./items/home.png')`;
  }

  lib2.classList.remove("show");
  radio2.classList.add("show");
  video2.classList.remove("show");
};

const videoFunc = function () {
  if ((home.style.backgroundImage = `url('./items/Vector.png')`)) {
    home.style.backgroundImage = `url('./items/home.png')`;
  }

  library.classList.remove("show");
  radio.classList.remove("show");
  video.classList.add("show");

  //navigating to video page
  videoPage.classList.add("show");
  body.classList.remove("body");
  content.classList.add("hidden");
  playListPage.classList.remove("show");
  collection.classList.remove("show");
  radioPage.classList.remove("show");
  if (!homeTx.classList.contains("homeTxs")) {
    homeTx.classList.add("homeTxs");
    homeTx.classList.remove("shows");
  }
  libraryTx.classList.remove("shows");
  radioTx.classList.remove("shows");
  videoTx.classList.add("shows");

  if ((home2.style.backgroundImage = `url('./items/Vector.png')`)) {
    home2.style.backgroundImage = `url('./items/home.png')`;
  }

  lib2.classList.remove("show");
  radio2.classList.remove("show");
  video2.classList.add("show");
};
home.addEventListener("click", homeFunc);
homeTx.addEventListener("click", homeFunc);

library.addEventListener("click", libraryFunc);
libraryTx.addEventListener("click", libraryFunc);

radio.addEventListener("click", radioFunc);
radioTx.addEventListener("click", radioFunc);

video.addEventListener("click", videoFunc);
videoTx.addEventListener("click", videoFunc);

// music player and volume tab
const progress = document.querySelector(".seek_slider");
const volume = document.querySelector(".volume_slider");

progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #facd66 0%, #facd66 ${value}%, rgba(255, 255, 255, 0.04) ${value}%, rgba(255, 255, 255, 0.04) 100%)`;
});

volume.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #facd66 0%, #facd66 ${value}%, rgba(255, 255, 255, 0.04) ${value}%, rgba(255, 255, 255, 0.04) 100%)`;
});

//navigating to the playlist

const content = document.querySelector(".content");

const playListPage = document.querySelector(".content2");

const playList = document.querySelector(".list2");
const body = document.querySelector("body");

playList.addEventListener("click", function () {
  content.classList.add("hidden");
  playListPage.classList.add("show");
  body.classList.add("body");
});

//toggle on play button

const controls = document.querySelector(".playing");
const plays = document.querySelector(".plays2");
const pause = document.querySelector(".pause");

//hamburger menu and nav items
const hamBurger = document.querySelector(".hamBurger");
const navCont = document.querySelector(".navCont");
const navItems = document.querySelectorAll(".navItems");
const header = document.querySelector("header");

hamBurger.addEventListener("click", function () {
  navCont.classList.add("show");
  header.classList.add("hidden");
});
navCont.addEventListener("click", function () {
  navCont.classList.remove("show");
  header.classList.remove("hidden");
});

//ProgressBar initial

// let myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// let requestOptions = {
//   method: "get",
//   headers: myHeaders,
//   redirect: "follow",
// };

// fetch(
//   "https://v1.nocodeapi.com/verifieddanny/spotify/JORuPQILyrQJCjkI/recentlyPlayed",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

//https://musica-api.up.railway.app/popular
const getMusic = async function () {
  try {
    const musicArr = await fetch("https://musica-api.up.railway.app/popular");
    const music = await musicArr.json();

    const audioElements = [];
    const musicEl = [];
    const getMus1 = await Promise.all(
      music.map(async (mus) => {
        await musicEl.push(mus);
      })
    );

    const getMus = await Promise.all(
      music.map(async (mus) => {
        const audio = new Audio(mus.audio);
        audioElements.push(audio);
        await audio.load();
        return audio;
      })
    );

    let currentIndex = 0;

    controls.addEventListener("click", function () {
      audioElements[currentIndex].play();

      audioElements[currentIndex].addEventListener("ended", function () {
        currentIndex++;
        if (currentIndex < audioElements.length) {
          audioElements[currentIndex].play();
        }
      });

      displayAlbum.style.backgroundImage = `url(${musicEl[currentIndex].cover})`;
      title.textContent = musicEl[currentIndex].title;
      singer.textContent = musicEl[currentIndex].artist;

      if (!pause.classList.contains("show")) {
        plays.classList.add("hidden");
        pause.classList.add("show");
        for (let i = 0; i < getMusic.length; i++) {
          audioElements[i].play();
        }
      } else {
        plays.classList.remove("hidden");
        pause.classList.remove("show");
        audioElements[currentIndex].pause();
      }
    });

    // Add the ended event listener for each audio element
    audioElements.forEach(function (audioEl, index) {
      audioEl.addEventListener("ended", function () {
        // Move to the next song
        currentIndex = (currentIndex + 1) % audioElements.length;

        // Play the next song
        audioElements[currentIndex].play();

        // Update the display
        displayAlbum.style.backgroundImage = `url(${musicEl[currentIndex].cover})`;
        title.textContent = musicEl[currentIndex].title;
        singer.textContent = musicEl[currentIndex].artist;
      });
    });

    // Add the click event listener for the next button
    next.addEventListener("click", function () {
      // Pause the current song
      audioElements[currentIndex].pause();

      // Move to the next song
      currentIndex = (currentIndex + 1) % audioElements.length;

      // Play the next song
      audioElements[currentIndex].currentTime = 0;
      audioElements[currentIndex].play();

      // Update the display
      displayAlbum.style.backgroundImage = `url(${musicEl[currentIndex].cover})`;
      title.textContent = musicEl[currentIndex].title;
      singer.textContent = musicEl[currentIndex].artist;
    });

    // Add the click event listener for the previous button
    prev.addEventListener("click", function () {
      // Pause the current song
      audioElements[currentIndex].pause();

      // Move to the previous song
      currentIndex =
        (currentIndex - 1 + audioElements.length) % audioElements.length;

      // Play the previous song
      audioElements[currentIndex].currentTime = 0;
      audioElements[currentIndex].play();

      // Update the display
      displayAlbum.style.backgroundImage = `url(${musicEl[currentIndex].cover})`;
      title.textContent = musicEl[currentIndex].title;
      singer.textContent = musicEl[currentIndex].artist;
    });

    audioElements.forEach((audio, index) => {
      audio.addEventListener("timeupdate", function () {
        if (index === currentIndex) {
          // Calculate the progress value as a percentage of the audio duration
          const progress = (audio.currentTime / audio.duration) * 100;

          // Set the value of the seek slider to the progress value
          progressBar.value = progress;
          progressBar.style.background = `linear-gradient(to right, #f7db98 0%, #f7db98 ${progress}%, #00000056 ${progress}%, #00000056 100%)`;
        }
      });
    });

    let currentVolume = 1;

    volumeBar.addEventListener("input", function () {
      const volumeValue = this.value;
      volumeBar.style.background = `linear-gradient(to right, #f7db98 0%, #f7db98 ${progress}%, #00000056 ${progress}%, #00000056 100%)`;
      const volumePercent = volumeValue / 100;

      // Limit the volume value to be within the allowed range of 0 to 1
      currentVolume = Math.max(0, Math.min(1, volumePercent));

      audioElements[currentIndex].volume = currentVolume;
    });

    let currentProgress;
    progressBar.addEventListener("input", function () {
      const progressVal = this.value;
      console.log("shayoo");
      const progessPercent = progressVal / 100;
      currentProgress = Math.max(0, Math.min(1, progessPercent));
      audioElements[currentIndex].currentTime = progessPercent;
    });
    document.addEventListener("keydown", function (event) {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlayPause();
      }
      displayAlbum.style.backgroundImage = `url(${musicEl[currentIndex].cover})`;
      title.textContent = musicEl[currentIndex].title;
      singer.textContent = musicEl[currentIndex].artist;
    });

    function togglePlayPause() {
      if (audioElements[currentIndex].paused) {
        audioElements[currentIndex].play();
        plays.classList.add("hidden");
        pause.classList.add("show");
      } else {
        audioElements[currentIndex].pause();
        plays.classList.remove("hidden");
        pause.classList.remove("show");
      }
    }
  } catch (err) {
    console.log(err);
  }
};
getMusic();

// controls.addEventListener("click", function () {
//   if (!pause.classList.contains("show")) {
//     plays.classList.add("hidden");
//     pause.classList.add("show");
//     for (let i = 0; i < getMusic.length; i++) {
//       audioElements[i].play();
//     }
//   } else {
//     plays.classList.remove("hidden");
//     pause.classList.remove("show");
//   }
// });

/*
 const getMus = await Promise.all(music.map(async (mus) => await mus.audio));

    const audioElements = getMus.map((audioUrl) => {
      const audio = new Audio(audioUrl);
      audio.addEventListener("ended", () => {
        // handle track ended event
      });
      return audio;
    });

    controls.addEventListener("click", function () {
      audioElements.forEach((audio) => audio.play());
    });
    console.log(getMus);
  } catch (err) {
    console.log(err);
  }
};
getMusic();

*/
