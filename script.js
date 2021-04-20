var buttons = document.querySelectorAll('.buttonFilter');
var images = document.querySelectorAll('.imageFilter');

for (const button of buttons) {
  button.addEventListener('click', function (event) {
    const animal = this.getAttribute('animal');
    for (const image of images) {
      // Show the animal if the 'Show All' button was pressed, or if the button
      // for this particular animal was pressed.
      if (animal === 'all' || image.getAttribute('class').includes(animal)) {
        image.style.display = 'inline-block';
      }
      else {
        image.style.display = 'none';
      }
    }
    event.preventDefault();
  });
}

