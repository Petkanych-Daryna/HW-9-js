// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const nameArray = ["Mango", "Poly", "Ajax"];

function logItems(array) {
  for (let i = 0; i < nameArray.length; i++) {
    const element = nameArray[i];
    console.log(`${i + 1} - ${nameArray[i]}`);
  }
}

logItems();

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

console.log(calculateEngravingPrice("Hello world!", 5))


// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  const longs = string.split(" ");
  let longString = "";

  for (const long of longs) {
      if (long.length > longString.length) {
        longString = long;
      }
  }

  return longString;
}

console.log(findLongestWord("car open world keys train"));

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
  return string.length <= 40 ? string : string.slice(0, 40) + "...";
}

console.log(formatString("This is a short string")); 

console.log(formatString("This is a very long string that exceeds forty characters in length")); 

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

console.log(checkForSpam("Get the best SALE now!"));
console.log(checkForSpam("Hello, how are you today?"));
console.log(checkForSpam("Win a free iPhone, no spam involved!"));

// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число (або натисніть Cancel для завершення):");

    if (input === null) {
        break;
    }

    const number = Number(input);

    if (isNaN(number)) {
        alert("Було введено не число, спробуйте ще раз.");
        continue;
    }

    numbers.push(number);
}

if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }

    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Жодного числа не було введено.");
}
