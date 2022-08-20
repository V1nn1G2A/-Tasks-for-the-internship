const enterHPButton = document.querySelector('.form__button');
enterHPButton.addEventListener('click', enterHP);
const kickNameField = document.querySelector('.kick-name');
const monsterHealthText = document.querySelector(".monster--health"),
  userHealthText = document.querySelector(".user--health");

let numberMoves;

const setNumberMoves = (num) => {
  if (!checkCooldown(wizard.moves[num].cooldown, wizard.moves[num].timeCooldown)) {
    alert('Удар перезаряжается, выберите другой')

    return -1;
  }

  return num;
}

document.querySelector('.fight-button__hit').addEventListener('click', () => {fight(setNumberMoves(0), numberMoves);})
document.querySelector('.fight-button__kick').addEventListener('click', () => {fight(setNumberMoves(1), numberMoves);})
document.querySelector('.fight-button__fireball').addEventListener('click', () => {fight(setNumberMoves(2), numberMoves);})
document.querySelector('.fight-button__magic-block').addEventListener('click', () => {fight(setNumberMoves(3), numberMoves);})