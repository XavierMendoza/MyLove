const startDate = new Date("2020-05-19T00:00:00");

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("weeks").textContent = weeks;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours % 24;
  document.getElementById("minutes").textContent = minutes % 60;
  document.getElementById("seconds").textContent = seconds % 60;
}

setInterval(updateTimer, 1000);
updateTimer();
