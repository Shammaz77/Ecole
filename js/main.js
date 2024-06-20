AOS.init({
    duration: 1000,
});





function toggleCartt() {
  document.querySelector('.sidebar').classList.toggle('open-cart');
}




const numberElements = document.querySelectorAll('.number');

function updateNumbers() {
  const targetNumbers = [130, 40, 2]; // Target numbers for each h1 element

  for (let i = 0; i < numberElements.length; i++) {
    const element = numberElements[i];
    const targetNumber = targetNumbers[i];

    // Increment the current text content towards the target number
    let currentNumber = parseInt(element.textContent, 10);
    if (currentNumber < targetNumber) {
      currentNumber++;
    } else if (currentNumber > targetNumber) {
      currentNumber--;
    }

    // Update text content with plus sign after the number
    element.textContent = `${currentNumber} +`;
  }

  // Update again after a short delay for animation effect
  setTimeout(updateNumbers, 50); // Adjust delay (in milliseconds) as needed
}

updateNumbers();











const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();