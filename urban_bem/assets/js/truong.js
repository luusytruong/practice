const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const sliderContainer = $(".banner__list");
if (sliderContainer) {
  const totalSlides = sliderContainer.children.length;
  const btnNext = $("#btn-next");
  const btnPrev = $("#btn-prev");
  let index = 0;
  let interval;

  function updateSlide() {
    autoSlide();
    const width = sliderContainer.getBoundingClientRect().width;
    sliderContainer.style.transform = `translateX(-${index * width}px)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
  }

  function autoSlide() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
  }

  window.addEventListener("resize", updateSlide);
  window.addEventListener("load", updateSlide);

  if (btnNext) btnNext.addEventListener("click", nextSlide);
  if (btnPrev)
    btnPrev.addEventListener("click", () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlide();
    });
}
