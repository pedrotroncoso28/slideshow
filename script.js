// Array of 5 random cat images from Cataas
const images = [
  'https://cataas.com/cat?random=1',
  'https://cataas.com/cat?random=2',
  'https://cataas.com/cat?random=3',
  'https://cataas.com/cat?random=4',
  'https://cataas.com/cat?random=5'
];

// Select all slides
const slides = document.querySelectorAll('.slide');

// Fill each slide with a cat image
slides.forEach((slide, i) => {
  slide.innerHTML = `<img src="${images[i]}" alt="Slide ${i + 1}">`;
});

// Handle navigation button
const buttons = document.querySelectorAll('.nav button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    slides.forEach(s => s.classList.remove('active'));
    button.classList.add('active');
    const slideNumber = button.getAttribute('data-slide');
    document.querySelector(`#slide-${slideNumber}`).classList.add('active');
  });
});
