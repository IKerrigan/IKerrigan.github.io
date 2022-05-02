// Завдання 1

const nameH = document.getElementById('name');
const bornDataP = document.querySelector('#born-data');

const colors = {
  YELLOW: 'yellow',
  WHITE: 'white',
  GREEN: 'green',
  BLUE: 'blue',
};

function createChangeColor(el, index) {
  const backgroundColorConfig = [colors.GREEN, colors.BLUE];
  const textColorConfig = [colors.WHITE, colors.YELLOW];

  return function changeColor() {
    el.style.backgroundColor = backgroundColorConfig[index];
    el.style.color = textColorConfig[index];

    backgroundColorConfig.reverse();
    textColorConfig.reverse();
  };
}

bornDataP.onclick = createChangeColor(bornDataP, 0);
nameH.onclick = createChangeColor(nameH, 1);

// Завдання 2

const IMAGE_ADJUSTMENT = 50;

const addButton = document.getElementById('add-button');
const enlargeButton = document.getElementById('enlarge-button');
const minifyButton = document.getElementById('minify-button');
const removeButton = document.getElementById('remove-button');

function getImage() {
  const images = document.getElementsByClassName('image');
  return images[images.length - 1];
}

const initialImage = getImage();

function add() {
  const image = getImage();

  if (image) {
    image.insertAdjacentHTML('afterend', initialImage.outerHTML);
  } else {
    const link = document.getElementById('image-link');
    link.insertAdjacentHTML('afterbegin', initialImage.outerHTML);
  }
}

function changeImgSize(multiplier = 1) {
  const image = getImage();

  if (image) {
    const currentHeight = image.clientHeight;
    const currentWidth = image.clientWidth;

    image.style.height = currentHeight + multiplier * IMAGE_ADJUSTMENT + 'px';
    image.style.width = currentWidth + multiplier * IMAGE_ADJUSTMENT + 'px';
  }
}

function enlarge() {
  changeImgSize();
}

function minify() {
  changeImgSize(-1);
}

function remove() {
  const image = getImage();

  if (image) {
    image.remove();
  }
}

addButton.onclick = add;
enlargeButton.onclick = enlarge;
minifyButton.onclick = minify;
removeButton.onclick = remove;
