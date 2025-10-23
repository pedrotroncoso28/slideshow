
const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg'
];

// Select all slides
const slides = document.querySelectorAll('.slide');

// Fill each slide with an image
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