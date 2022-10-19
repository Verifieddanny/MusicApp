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

controls.addEventListener("click", function () {
  if (!pause.classList.contains("show")) {
    plays.classList.add("hidden");
    pause.classList.add("show");
  } else {
    plays.classList.remove("hidden");
    pause.classList.remove("show");
  }
});

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

//Navigation text active
