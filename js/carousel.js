document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const videos = document.querySelectorAll(".video-card video");

  if (!carousel || !prevBtn || !nextBtn) return;

  let autoScrollInterval;
  const scrollGap = 40;
  const autoScrollDelay = 6000; // 6s = slow + romantic

  function getScrollAmount() {
    return carousel.offsetWidth + scrollGap;
  }

  /* ------------------------
     Video safety: only one plays
     ------------------------ */
  videos.forEach(video => {
    video.addEventListener("play", () => {
      videos.forEach(v => {
        if (v !== video) v.pause();
      });
    });
  });

  /* ------------------------
     Manual controls
     ------------------------ */
  nextBtn.addEventListener("click", () => {
    stopAutoScroll();
    carousel.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth"
    });
    restartAutoScroll();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoScroll();
    carousel.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth"
    });
    restartAutoScroll();
  });

  /* ------------------------
     Auto scroll logic
     ------------------------ */
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      const atEnd =
        Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >=
        carousel.scrollWidth - 5;

      if (atEnd) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        carousel.scrollBy({
          left: getScrollAmount(),
          behavior: "smooth"
        });
      }
    }, autoScrollDelay);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  function restartAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
  }

  /* ------------------------
     Pause on hover (premium UX)
     ------------------------ */
  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);

  /* ------------------------
     Start autoplay after layout settles
     ------------------------ */
  setTimeout(startAutoScroll, 800);

  /* ------------------------
     Recalculate on resize
     ------------------------ */
  window.addEventListener("resize", () => {
    restartAutoScroll();
  });
});
