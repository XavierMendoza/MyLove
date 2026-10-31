// Only the love-letter interaction needs JavaScript; the world is animated with CSS.
const letterToggle = document.getElementById('letter-toggle');
const letterContent = document.getElementById('love-letter-content');
const letterScene = document.getElementById('letter-scene');

if (letterToggle && letterContent && letterScene) {
  letterToggle.addEventListener('click', () => {
    const isOpen = letterToggle.getAttribute('aria-expanded') !== 'true';
    letterToggle.setAttribute('aria-expanded', String(isOpen));
    letterToggle.textContent = isOpen ? 'Close My Letter' : 'Open My Letter';
    letterContent.hidden = !isOpen;
    letterScene.classList.toggle('is-open', isOpen);
  });
}
