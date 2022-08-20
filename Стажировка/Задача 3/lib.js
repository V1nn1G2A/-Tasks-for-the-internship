(function() {
  
  this.start = function() {
    let comment = document.querySelector('.form__comment'),
      button = document.querySelector('.form__button'),
      userAnswerInput = document.querySelector('.form__answer')

    const answer = getRandomAnswer();

    let quanityAttempts = countsAttempts();

    function getRandomInt(min, max) { //Создание рандомного числа
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function getRandomAnswer() { //Создание ответа
      let numbersCount = getRandomInt(3, 6);

      let answer = '';
      
      for (let index = 0; index < numbersCount; index++) {
        let randomNumber;
    
        while (true) {
          randomNumber = getRandomInt(0, 9);
          
          if (index == numbersCount - 1) {
            if (randomNumber === 0) {
              continue;
            }
          }

          if (!answer.includes(randomNumber)) {
            break;
          }
        }
    
        answer = answer.concat(randomNumber);
      }
    
      return function() {
        return answer;
      }
    }

    console.log(answer());//для подсказки

    function countsAttempts() {//счетчик попыток
      quanityAttemptsClosuer = 10;

      return function() {
        return quanityAttemptsClosuer--;
      }
    }

    function checkNumber(num) {
      return !isNaN(parseFloat(num)) && isFinite(num)
    }
    
    
    function checkAnswer(num) {
      if (!checkNumber(num)) {
        userAnswerInput.value = '';
        return 'Введите число';
      }
      
      if (num === answer()) {
        userAnswerInput.value = '';
        return 'Верно';
      }

      let matchedPlaces = [],
        matchedNumbers = [];

      for (let index = 0; index < num.length; index++) {
        let findResult = answer().indexOf(num[index]);

        if (findResult === index) {
          matchedPlaces.push(num[index]);
        } else if (findResult !== -1) {
          matchedNumbers.push(num[index]);
        }
      }
      
      let matchedPlacesComment = 'Цифр на своих местах: ' + matchedPlaces.length + ' (',
        matchedNumbersComment = 'Cовпавших цифр не на своих местах : ' + matchedNumbers.length + ' (';

      for (let index = 0; index < matchedPlaces.length; index++) {
        matchedPlacesComment += (index ? ' и ' : '') + matchedPlaces[index]; 
      }
      
      for (let index = 0; index < matchedNumbers.length; index++) {
        matchedNumbersComment += (index ? ' и ' : '') + matchedNumbers[index]; 
      }

      matchedPlacesComment += ' )';
      matchedNumbersComment += ' )';

      return matchedPlacesComment + matchedNumbersComment;
    }
    
    function gameRandomNumber() {
      let num = userAnswerInput.value;
      
      if (quanityAttempts() !== 0) {
        comment.textContent = checkAnswer(num);
      } else {
        comment.textContent = 'Попытки закончились';
      }
    }

    button.addEventListener('click', gameRandomNumber);
  }
})()