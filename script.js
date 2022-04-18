let songIndex = 0;
let audioElement = new Audio("/source/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songsItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "/source/songs/1.mp3",
    coverPath: "/source/covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "/source/songs/2.mp3",
    coverPath: "/source/covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "/source/songs/3.mp3",
    coverPath: "/source/covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "/source/songs/4.mp3",
    coverPath: "/source/covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "/source/songs/5.mp3",
    coverPath: "/source/covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "/source/songs/6.mp3",
    coverPath: "/source/covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "/source/songs/7.mp3",
    coverPath: "/source/covers/7.jpg",
  },

  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "/source/songs/8.mp3",
    coverPath: "/source/covers/8.jpg",
  },

  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "./source/covers/9.mp3",
    coverPath: "/source/covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "/source/songs/10.mp3",
    coverPath: "/source/covers/10.jpg",
  },
];
songsItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play/pause click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      console.log(e.target);
      songIndex = parseInt(e.target.id);
      console.log(songIndex);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `/source/songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `/source/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `/source/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
