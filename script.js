// Get buttons safely
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// If YES button exists → go to next page
if (yesBtn) {
    yesBtn.addEventListener("click", function () {
        window.location.href = "yes.html";
    });
}

// If NO button exists → make it run away
if (noBtn) {
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
}
