const heroSectionVideoEl = document.getElementsByTagName("video")[0];
let isVideo = true;
function showAnimation() {
    setTimeout(() => {
        heroSectionVideoEl.style.display = "none";
    }, 7200);
}
function showAnimation2() {
    if (isVideo) {
        isVideo = false;
        document.getElementById("vedio2").src = "./assets/video/clip5-reversed.mp4"
        document.getElementById("vedio2").play()
    } else {
        isVideo = true;
        document.getElementById("vedio2").src = "./assets/video/clip5.mp4"
        document.getElementById("vedio2").play()
    }
}
window.onload = showAnimation();
window.onload = setInterval(() => showAnimation2(), 12000);