export function shuffleTasks(list) {
  const shuffledList = [...list];
  for (let i = shuffledList.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // random 0 - i
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }
  return shuffledList;
}

export function printOperator(operatorValue) {
  let operatorText = '';
  switch (operatorValue) {
    case 0: operatorText = '+';
      break;
    case 1: operatorText = '-';
      break;
    case 2: operatorText = 'x';
      break;
    case 3: operatorText = '/';
      break;
    default: operatorText = '+';
  }
  return operatorText;
}

export function calculate(num1, num2, operatorValue) {
  let calculatedAnswer = null;
  if (typeof (num1) === 'number' && typeof (num2) === 'number') {
    switch (operatorValue) {
      case 0: calculatedAnswer = num1 + num2;
        break;
      case 1: calculatedAnswer = num1 - num2;
        break;
      case 2: calculatedAnswer = num1 * num2;
        break;
      case 3:
        calculatedAnswer = (num2 !== 0) ? num1 / num2 : calculatedAnswer = null;
        break;
      default: calculatedAnswer = null;
    }
  }
  return calculatedAnswer;
}

export function createMessage(num1, num2, currentOperator, correctAnswer) {
  return `${num1} ${printOperator(currentOperator)} ${num2} = ${correctAnswer}`;
}
