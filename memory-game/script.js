const namesHeros = {
  ralf: './assets/img/ralf.jpg',
  rapuncel: './assets/img/rapuncel.jpg',
  simba: './assets/img/simba.jpg',
  ariel: './assets/img/ariel.jpg',
  monsters: './assets/img/monsters.jpg',
  mouse: './assets/img/mouse.jpg',
  olaf: './assets/img/olaf.jpg',
  nemo: './assets/img/nemo.jpg',
  ratatuy: './assets/img/ratatuy.jpg',
  tachki: './assets/img/tachki.jpg',
  moana: './assets/img/moana.jpg',
  winie: './assets/img/winie.jpg',
  gaika: './assets/img/gaika.jpg',
  ponochka: './assets/img/ponochka.jpg',
  gin: './assets/img/gin.jpg',
  goofey: './assets/img/goofey.jpg',
};

const cardsWrapper = document.querySelector('.main__cards');

const score = document.querySelector('.gameOver__score');
const audio = document.querySelector('audio');
const choice = document.querySelector('.choice');
const over = document.querySelector('.gameOver');
const resultsEl = document.querySelector('.gameOver__results');
const button = document.querySelector('.gameOver__button');
const src1 = './assets/sound/click.mp3';
const src3 = './assets/sound/ringing.mp3';
const src2 = './assets/sound/open.mp3';
const footer = document.querySelector('.footer');

let pairsNameAddress = Object.entries(namesHeros);
let hasTurnCard = false;
let isPlay = false;
let lock = false;
let firstCard, secondCard;
let arr = [];
let counter = 0;

function createElement(tag, classAdd, nameAttr, attrAdd) {
  tag = document.createElement(tag);
  tag.classList.add(classAdd);
  tag.setAttribute(nameAttr, attrAdd);
  return tag;
}
function createCard(nameHero) {
  let div = createElement('div', 'main__card', 'data-character', nameHero[0]);
  div.append(createElement('img', 'main__card-face', 'src', nameHero[1]));
  div.append(
    createElement('img', 'main__card-back', 'src', './assets/img/back2.png')
  );
  return div;
}
function soundClick(src) {
  var audio = new Audio();
  audio.src = src;
  audio.autoplay = true;
}

function turnCard(event) {
  if (lock) return;
  const target = event.target.parentElement;
  target.classList.add('main__card_turn');
  if (!hasTurnCard) {
    hasTurnCard = true;
    firstCard = target;
  } else {
    hasTurnCard = false;
    secondCard = target;
    checkEquality();
  }
}

function turnOff() {
  firstCard.removeEventListener('click', turnCard);
  secondCard.removeEventListener('click', turnCard);
  soundClick(src2);
  arr.push(firstCard);
  arr.push(secondCard);
}

function deleteTurn() {
  lock = true;
  setTimeout(() => {
    firstCard.classList.remove('main__card_turn');
    secondCard.classList.remove('main__card_turn');
    resetLock();
  }, 1000);
}

function resetLock() {
  hasTurnCard = lock = false;
  firstCard = secondCard = null;
}

function checkEquality() {
  if (firstCard.dataset.character == secondCard.dataset.character) {
    firstCard.classList.add('hide');
    secondCard.classList.add('hide');
    turnOff();
  } else {
    deleteTurn();
  }
}

function getTime(timeStamp) {
  const date = new Date(timeStamp);

  return (
    ('0' + date.getDate()).slice(-2) +
    '.' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '.' +
    date.getFullYear() +
    '/' +
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2)
  );
}

function gameOver() {
  const valueFromLocalStorage = localStorage.getItem('result');
  let results = valueFromLocalStorage ? JSON.parse(valueFromLocalStorage) : [];
  resultsEl.innerHTML = '';
  results.forEach(({ counter, timeStamp }) => {
    resultsEl.insertAdjacentHTML(
      'afterbegin',
      `<li>${getTime(timeStamp)} - ${counter}</li>`
    );
  });

  score.innerHTML = `Score: ${footer.innerHTML}`;
  over.classList.add('gameOver_visible');

  if (results.length > 11) {
    results.shift();
  }
  results.push({ timeStamp: new Date().getTime(), counter: footer.innerHTML });
  localStorage.setItem('result', JSON.stringify(results));
  counter = 0;
  arr = [];
}

function choiceImages(allImages, numberOfCards) {
  let arrNew = [];
  while (arrNew.length < numberOfCards) {
    let random = Math.floor(Math.random() * allImages.length);
    if (!arrNew.includes(allImages[random])) {
      arrNew.push(allImages[random]);
    }
  }
  return arrNew;
}

function addCards(numberOfCards) {
  choiceImages(pairsNameAddress, numberOfCards).forEach((nameHero) => {
    let card1 = createCard(nameHero);
    let card2 = createCard(nameHero);
    cardsWrapper.append(card1);
    cardsWrapper.append(card2);
  });
  cardsWrapper.style.width = (130 + 5) * (numberOfCards / 2) + 'px';
}

function fillingWithCards(cards) {
  cards.forEach((cardEl) => {
    cardEl.addEventListener('click', (event) => {
      soundClick(src1);
      turnCard(event);
      counter += 1;
      if (counter % 2 === 0) {
        footer.innerHTML = counter / 2;
      }
      if (arr.length == cards.length) {
        soundClick(src3);
        cardsWrapper.innerHTML = ''; //добавила
        over.classList.remove('hidden');
        setTimeout(gameOver, 2000);
      }
    });
    const reorder = Math.floor(Math.random() * cards.length);
    cardEl.style.order = reorder;
  });
}

choice.addEventListener('click', (event) => {
  choice.classList.add('hidden');
  footer.classList.remove('hide');
  cardsWrapper.classList.remove('hidden');
  if (event.target.classList.contains('choice__easy')) addCards(8);
  else if (event.target.classList.contains('choice__average')) addCards(12);
  else addCards(16);
  const cards = document.querySelectorAll('.main__card');
  fillingWithCards(cards);
});

button.addEventListener('click', () => {
  choice.classList.remove('hidden');
  over.classList.remove('gameOver_visible');
  over.classList.add('hidden');
  cardsWrapper.innerHTML = '';
  cardsWrapper.classList.add('hidden');
  footer.innerHTML = 0;
});
