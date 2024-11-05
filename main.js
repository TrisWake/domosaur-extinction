document.querySelectorAll(`./mess-with-me`).style.fontSize = '40px';
document.querySelectorAll(`./mess-with-me`).style.backgroundColor = 'green'
document.querySelectorAll(`./img.dinosaur`)[1].style.display = 'none'
document.querySelectorAll(`./img.dinosaur`)[0].style.width = '324px'
const spans = document.querySelectorAll('.mess-with-me');

for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function() {
    spans[i].style.color = 'orange';
  });
}

const dinosaurs = document.querySelectorAll('img.dinosaur');

for (let i = 0; i < dinosaurs.length; i++) {
  dinosaurs[i].addEventListener('click', function() {
    dinosaurs[i].style.border = '5px solid red';
  });
}

const featheredDinosaurs = document.querySelectorAll('.feathered-dinosaur');

for (let i = 0; i < featheredDinosaurs.length; i++) {
  featheredDinosaurs[i].addEventListener('click', function() {
    featheredDinosaurs[i].style.opacity = '0.5';
  });
}


const switchButton = document.querySelector('#switch-background-color');
const dinosaurRow = document.querySelector('.dinosaur-row');

switchButton.addEventListener('click', function() {
  dinosaurRow.style.backgroundColor = 'lightblue';
});
