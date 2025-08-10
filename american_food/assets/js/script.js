function addVisibleWhenInView(element, threshold = 0.2) {
  if (!element) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // Dừng quan sát sau khi visible
      }
    });
  }, { threshold });

  observer.observe(element);
}

// Sử dụng
document.addEventListener('DOMContentLoaded', () => {
  const serviceElement = document.querySelectorAll('.service__description');
  serviceElement.forEach(item=>
    addVisibleWhenInView(item)
  )
});

