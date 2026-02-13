const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const song = document.getElementById("loveSong");

yesBtn.addEventListener("click", function() {
    result.style.display = "block";
    song.play();
});

noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
