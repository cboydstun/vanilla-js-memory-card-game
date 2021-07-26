let cardArr = [
  `src/images/1.jpg`,
  `src/images/2.jpg`,
  `src/images/3.jpg`,
  `src/images/4.png`,
  `src/images/5.jpg`,
  `src/images/6.jpg`,
  `src/images/7.jpg`,
  `src/images/8.jpg`
];

cardArr = cardArr.concat(cardArr);
cardArr = cardArr.sort((a, b) => Math.random() - 0.5);

let desk = document.querySelector(`#desk`);

for (let i = 0; i < cardArr.length; i++) {
  let card = document.createElement(`div`);
  card.id = `${cardArr[i]}`;
  card.classList.add(`card`);
  card.onclick = flipCard;
  desk.appendChild(card);

  let front = document.createElement(`div`);
  front.classList.add(`front`);
  front.style.background = `url(${cardArr[i]})`;
  card.appendChild(front);

  let back = document.createElement(`div`);
  back.classList.add(`back`);
  card.appendChild(back);
}

let firstCard;
let secondCard;
let flippedCard = false;

function flipCard(event) {
  if (this.classList.contains(`flip`)) {
    event.preventDefault();
  } else {
    this.classList.add(`flip`);
    if (!flippedCard) {
      flippedCard = true;
      firstCard = this;
      return;
    }
    secondCard = this;
    if (firstCard.id !== secondCard.id) {
      firstCard.classList.remove(`flip`);
      firstCard = secondCard;
      secondCard = null;
      return;
    }
    firstCard.onclick = null;
    secondCard.onclick = null;
    flippedCard = false;
    return;
  }
}
