// A single random dog image from Dog API
function fetchDogImage() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => data.message)
}


const slides = document.querySelectorAll('.slide');

// Fetch 5 dog images
Promise.all([fetchDogImage(), fetchDogImage(), fetchDogImage(), fetchDogImage(), fetchDogImage()])
  .then(images => {
    // Fill each slide with the fetch dog image
    slides.forEach((slide, i) => {
      slide.innerHTML = `<img src="${images[i]}" alt="Slide ${i + 1}">`;
    });
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

