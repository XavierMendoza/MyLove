const buttons = document.querySelectorAll(".audio-btn");

buttons.forEach(btn => {
  const audio = new Audio(btn.dataset.audio);
  let playing = false;

  btn.addEventListener("click", () => {
    if (!playing) {
      audio.play();
      btn.textContent = "❚❚ Pause";
    } else {
      audio.pause();
      btn.textContent = "▶ Listen";
    }
    playing = !playing;
  });

  audio.addEventListener("ended", () => {
    playing = false;
    btn.textContent = "▶ Listen";
  });
});
