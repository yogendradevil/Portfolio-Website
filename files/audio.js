var item = document.getElementById("home-button");
var music = new Audio('..\\audio\\Once Upon A Time - Vikram 128 Kbps (1).mp3');

item.addEventListener("mouseover", playMusic, false);
item.addEventListener("mouseout", pauseMusic, false);

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
    music.currentTime = 0;
}