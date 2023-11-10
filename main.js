window.addEventListener("keydown", playing);

function playing(event) {
    const key = document.querySelector("." + event.key);

    if (key == null) return;

    key.classList.add("playing");

    setTimeout(function () {
        key.classList.remove("playing");
    }, 200);
}
