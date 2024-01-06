console.log("Welcome to spotify");
let audioElement = new Audio("songs/audio1.mp3");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myrogressBar = document.getElementById("myProgressBar");
let playPause=document.getElementsByClassName('songListPlay')[0];
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "US (Official Audio)",
    filePath: "songs/audio1.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "Just Listen",
    filePath: "songs/audio2.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "East Side FLow Sidhu Moosewala (Official Audio)",
    filePath: "songs/audio3.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "Famous Sidhu Moosewala (Official Audio)",
    filePath: "songs/audio4.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "G-SHIT Sidhu Moosewala (Official Audio)",
    filePath: "songs/audio5.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "INVINSIBLE (Offical Audio)",
    filePath: "songs/audio6.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "Karan Aujla IT AIN'T LEGAL (Official Audio)",
    filePath: "songs/audio7.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "These days Sidhu Moosewala (Official Audio",
    filePath: "songs/audio8.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "Tunki Arun Justa (Official Audio)",
    filePath: "songs/audio9.mp3",
    coverPath: "covers/sidhu.webp",
  },
  {
    songName: "Zindabad Yarriyan (Official Audio)",
    filePath: "songs/audio10.mp3",
    coverPath: "covers/sidhu.webp",
  },
];

songItem.forEach((element, i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
  }
});
audioElement.addEventListener("timeupdate", () => {
  console.log("timeUpdate");
  // UPDATE SEEKBAR
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  console.log(progress);
  myrogressBar.value = progress;
});

myrogressBar.addEventListener("change", () => {
  audioElement.currentTime = (myrogressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();

      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/audio${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  audioElement.src = `songs/audio${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex--;
  }
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = `songs/audio${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
