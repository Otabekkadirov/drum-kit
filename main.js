window.addEventListener("keydown", playing);

function playing(event) {
    const key = document.querySelector("div." + event.key);
    const audio = document.querySelector("audio." + event.key);
    if (key == null) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function () {
        key.classList.remove("playing");
    }, 200);
}
