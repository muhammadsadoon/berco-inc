const heroSectionVideoEl = document.getElementsByTagName("video")[0];
function showAnimation() {
    setTimeout(() => {
        heroSectionVideoEl.style.display = "none";
    }, 7200);
}
window.onload =  showAnimation();