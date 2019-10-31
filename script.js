let displayedImage = document.querySelector('.full-img');
let thumbBar = document.querySelector('.thumb-bar');

let btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++) {
  let newImage = document.createElement('img');
  newImage.setAttribute('src', 'pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
} 

  
/* Wiring up the Darken/Lighten button */

  