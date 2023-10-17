const playListContainer =
  document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currAndTotalTime = document.getElementsByClassName(
  "currentAndTotalTime"
)[0];
const currentProgress =
  document.getElementsByClassName("currentProgressBar")[0];
const playButton = document.getElementsByClassName("play")[0];
const pauseButton = document.getElementsByClassName("pause")[0];
const previousButton = document.getElementsByClassName("backward")[0];
const nextButton = document.getElementsByClassName("forward")[0];
const tracks = [
  { trackId: "music/track1.mp3", title: "Myo Gyi - Nyi Lay" },
  { trackId: "music/track2.mp3", title: "Raymond - Bar Lo Nay Thay Lae" },
  { trackId: "music/track3.mp3", title: "Aung Myint Myat - Min Mathi Thaw" },
];

for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
    currentPlayingIndex = i;
    playMusic();
  });
  trackTag.classList.add("trackItem");
  const title = (i + 1).toString() + ". " + tracks[i].title;
  trackTag.textContent = title;
  playListContainer.append(trackTag);
}

let durationTag = "00:00";
let duration = 0;
audioTag.addEventListener("loadeddata", () => {
  duration = Math.floor(audioTag.duration);
  durationTag = minuteAndSecond(duration);
});

audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeTag = minuteAndSecond(currentTime);
  const currentTimeTagAndTotalTimeTag = currentTimeTag + " / " + durationTag;
  currAndTotalTime.textContent = currentTimeTagAndTotalTimeTag;
  currentProgressBar(currentTime);
});
let isPlaying = false;
let currentPlayingIndex = 0;
playButton.addEventListener("click", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  isPlaying = true;
  if (currentTime === 0) {
    playMusic();
  } else {
    audioTag.play();
    playAndPauseButton();
  }
});

pauseButton.addEventListener("click", () => {
  isPlaying = false;
  audioTag.pause();
  playAndPauseButton();
});

previousButton.addEventListener("click", () => {
  if (currentPlayingIndex === 0) {
    return;
  }
  currentPlayingIndex -= 1;
  playMusic();
});
nextButton.addEventListener("click", () => {
  if (currentPlayingIndex === tracks.length - 1) {
    return;
  }
  currentPlayingIndex += 1;
  playMusic();
});

//using function to avoid dry(don't reperat yourself)
const minuteAndSecond = (time) => {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  const minuteText = minute < 10 ? "0" + minute.toString() : minute; //using ternary operator
  const secondText = second < 10 ? "0" + second.toString() : second;
  return minuteText + ":" + secondText;
};

//currentProgressBarFunction
const currentProgressBar = (currentTime) => {
  const currentProgressWidth = (300 / duration) * currentTime + "px";
  currentProgress.style.width = currentProgressWidth;
};

//playandpausebutton function
const playAndPauseButton = () => {
  if (isPlaying) {
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
  } else {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
  }
};

const playMusic = () => {
  const songIdToPlay = tracks[currentPlayingIndex].trackId;
  audioTag.src = songIdToPlay;
  audioTag.play();
  isPlaying = true;
  playAndPauseButton();
};
