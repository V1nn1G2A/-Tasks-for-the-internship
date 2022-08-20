const monster = {
  maxHealth: 10,
  name: "Лютый",
  moves: [
      {
          "name": "Удар когтистой лапой",
          "physicalDmg": 3, // физический урон
          "magicDmg": 0,    // магический урон
          "physicArmorPercents": 20, // физическая броня
          "magicArmorPercents": 20,  // магическая броня
          "cooldown": 0,     // ходов на восстановление
          "timeCooldown" : 0
      },
      {
          "name": "Огненное дыхание",
          "physicalDmg": 0,
          "magicDmg": 4,
          "physicArmorPercents": 0,
          "magicArmorPercents": 0,
          "cooldown": 3,     // ходов на восстановление
          "timeCooldown" : 3
      },
      {
          "name": "Удар хвостом",
          "physicalDmg": 2,
          "magicDmg": 0,
          "physicArmorPercents": 50,
          "magicArmorPercents": 0,
          "cooldown": 2,
          "timeCooldown" : 2
      },
  ]
}

const wizard = {
  maxHealth: 0,
  name: "Евстафий",
  moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0,     
            "timeCooldown" : 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4,     
            "timeCooldown" : 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3,     
            "timeCooldown" : 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4,     
            "timeCooldown" : 4
        },
    ]
}

function getRandomInt(min, max) { //Создание рандомного числа
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkNumber = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const enterHP = () => {
  let maxHealthUser = Number(document.querySelector('.form__health').value);

  if (!checkNumber(maxHealthUser)) {
    document.querySelector('.form__comment').textContent = 'Введите число';
    return;
  }

  wizard.maxHealth = maxHealthUser;
  document.querySelector('.form').style.display = 'none';
  document.querySelector('.kick-name').style.display = 'flex';
  document.querySelector('.fight-button').style.display = 'flex';
  document.querySelector('.health').style.display = 'flex';

  monsterHealthText.textContent = "Здоровье монстра:  " + monster.maxHealth;
  userHealthText.textContent = "Ваше здоровье: " + wizard.maxHealth;

  
  setMonsterMoves();
}

const checkCooldown = (cooldown, timeCooldown) => {
  return timeCooldown === cooldown;
}

const mosterHit = (numberMoves) => {
  let physDamage = monster.moves[0].physicalDmg - wizard.moves[numberMoves].physicArmorPercents,
    magicDamage = monster.moves[0].magicDmg - wizard.moves[numberMoves].magicArmorPercents;

  wizard.maxHealth -= (physDamage > 0) ? physDamage : 0;
  wizard.maxHealth -= (magicDamage > 0) ? magicDamage : 0;

  monster.moves[0].timeCooldown == 0;
}

const mosterFire = (numberMoves) => {
  let physDamage = monster.moves[1].physicalDmg - wizard.moves[numberMoves].physicArmorPercents,
    magicDamage = monster.moves[1].magicDmg - wizard.moves[numberMoves].magicArmorPercents;

  wizard.maxHealth -= (physDamage > 0) ? physDamage : 0;
  wizard.maxHealth -= (magicDamage > 0) ? magicDamage : 0;

  monster.moves[1].timeCooldown == 0;
}

const mosterTaleHit = (numberMoves) => {
  let physDamage = monster.moves[2].physicalDmg - wizard.moves[numberMoves].physicArmorPercents,
    magicDamage = monster.moves[2].magicDmg - wizard.moves[numberMoves].magicArmorPercents;

  wizard.maxHealth -= (physDamage > 0) ? physDamage : 0;
  wizard.maxHealth -= (magicDamage > 0) ? magicDamage : 0;

  monster.moves[2].timeCooldown == 0;
}

const userHit = (monsterMoves) => {
  let physDamage = wizard.moves[0].physicalDmg - monster.moves[monsterMoves].physicArmorPercents,
    magicDamage = wizard.moves[0].magicDmg - monster.moves[monsterMoves].magicArmorPercents;

    monster.maxHealth -= (physDamage > 0) ? physDamage : 0;
    monster.maxHealth -= (magicDamage > 0) ? magicDamage : 0;

  wizard.moves[0].timeCooldown = 0;
}

const userFootKick = (monsterMoves) => {
  let physDamage = wizard.moves[1].physicalDmg - monster.moves[monsterMoves].physicArmorPercents,
    magicDamage = wizard.moves[1].magicDmg - monster.moves[monsterMoves].magicArmorPercents;

    monster.maxHealth -= (physDamage > 0) ? physDamage : 0;
    monster.maxHealth -= (magicDamage > 0) ? magicDamage : 0;

  wizard.moves[1].timeCooldown = 0;
}

const userFireball = (monsterMoves) => {
  let physDamage = wizard.moves[2].physicalDmg - monster.moves[monsterMoves].physicArmorPercents,
    magicDamage = wizard.moves[2].magicDmg - monster.moves[monsterMoves].magicArmorPercents;

    monster.maxHealth -= (physDamage > 0) ? physDamage : 0;
    monster.maxHealth -= (magicDamage > 0) ? magicDamage : 0;

  wizard.moves[2].timeCooldown = 0;
}

const userMagicBlock = (monsterMoves) => {
  let physDamage = wizard.moves[3].physicalDmg - monster.moves[monsterMoves].physicArmorPercents,
    magicDamage = wizard.moves[3].magicDmg - monster.moves[monsterMoves].magicArmorPercents;

    monster.maxHealth -= (physDamage > 0) ? physDamage : 0;
    monster.maxHealth -= (magicDamage > 0) ? magicDamage : 0;

  wizard.moves[3].timeCooldown = 0;
}

const setMonsterMoves = () => {
  numberMoves = getRandomInt(0,2);
  
  while (!checkCooldown(monster.moves[numberMoves].cooldown, monster.moves[numberMoves].timeCooldown)) {
    numberMoves = getRandomInt(0,2);
  }
  
  kickNameField.textContent = 'Монстор наносит удар: ' + monster.moves[numberMoves].name + ' Наносите удар:';
}

const fight = (userNumberMoves, monsterMoves) => {
    switch (userNumberMoves) {
      case -1:
        return;
        break;
      case 0:
        userHit(monsterMoves);
        break;
      case 1:
        userFootKick(monsterMoves);
        break;
      case 2:
        userFireball(monsterMoves);
        break;
      case 3:
        userMagicBlock(monsterMoves);
        break;
      default:
        break;
    }
  
    switch (monsterMoves) {
      case 0:
        mosterHit(userNumberMoves)
        break;
      case 1:
        mosterFire(userNumberMoves)
        break;
      case 2:
        mosterTaleHit(userNumberMoves)
        break;
      default:
        break;
    }
  
    if (monster.maxHealth <= 0) {
      monsterHealthText.textContent = "Вы победили!";
      userHealthText.textContent = "";
    } else if (wizard.maxHealth <= 0) {
      monsterHealthText.textContent = "Вы проиграли!";
      userHealthText.textContent = "";
    } else {
      monsterHealthText.textContent = "Здоровье монстра:  " + monster.maxHealth;
      userHealthText.textContent = "Ваше здоровье: " + wizard.maxHealth;
    }

    for (let index = 0; index < 3; index++) {
      if (wizard.moves[index].timeCooldown !== wizard.moves[index].cooldown ) {
        wizard.moves[index].timeCooldown++;
      }
      if (monster.moves[index].timeCooldown !== monster.moves[index].cooldown ) {
        monster.moves[index].timeCooldown++;
      }
    }
    
    if (wizard.moves[3].timeCooldown !== wizard.moves[3].cooldown ) {
      wizard.moves[3].timeCooldown++;
    }

    setMonsterMoves();
}