const VARIANT = 10;
const INDEX = VARIANT - 1;

const input = document.querySelector('input');
const tds = document.querySelectorAll('td');

let color;

tds[INDEX].addEventListener('mouseover', function (event) {
  color = randomizeColor();
  applyColor(event);
});

tds[INDEX].addEventListener('click', (event) => {
  color = input.value;
  applyColor(event);
});

tds[INDEX].addEventListener('dblclick', () => {
  const rowMax = (Math.round(VARIANT / 6) || 1) * 6;
  let index = INDEX;

  while (index < rowMax) {
    tds[index].style.backgroundColor = color;
    index += 2;
  }
});

function randomizeColor() {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
}

function applyColor(event) {
  event.target.style.backgroundColor = color;
}
