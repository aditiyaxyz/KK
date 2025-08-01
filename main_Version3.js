// Reveal elements on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add('visible');
    }
  });
});

// Button ripple effect
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let circle = document.createElement('span');
    circle.className = 'ripple';
    circle.style.left = (e.clientX - btn.offsetLeft) + 'px';
    circle.style.top = (e.clientY - btn.offsetTop) + 'px';
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});