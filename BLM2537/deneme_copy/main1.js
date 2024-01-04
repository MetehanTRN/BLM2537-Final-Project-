document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  let count = 0;

  function nextSlide() {
    count++;
    if (count > 2) {
      count = 0;
    }
    updateSlider();
  }

  function prevSlide() {
    count--;
    if (count < 0) {
      count = 2;
    }
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -count * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
  }

  setInterval(nextSlide, 3000); // 3 saniyede bir otomatik geçiş

  // İsteğe bağlı olarak sağ/sol okları kullanarak geçişi kontrol etmek için aşağıdaki kodu kullanabilirsiniz:
  // const nextButton = document.querySelector('.next-button');
  // const prevButton = document.querySelector('.prev-button');

  // nextButton.addEventListener('click', nextSlide);
  // prevButton.addEventListener('click', prevSlide);
});