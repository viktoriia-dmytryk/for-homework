// Поточний час у шапці сторінки

import { addLeaddingZero } from './js/helpers';
import { refs } from './js/refs';

// Контекст:
// У шапці сайту потрібно постійно показувати актуальний час
// без перезавантаження сторінки.

// Розширене ТЗ:
// · Створи функцію, яка отримує поточний час через new Date().
// · У .current-time потрібно виводити години, хвилини та секунди
// у форматі HH:MM:SS.
// · Час має оновлюватися щосекунди через setInterval.
// · Початкове значення потрібно відмалювати одразу після завантаження
// сторінки, не чекаючи першої секунди.
// · Для чисел з однією цифрою потрібно додавати нуль на початок.

const getCurrentTime = () => {
  const nowTime = new Date();
  const hours = addLeaddingZero(nowTime.getHours());
  const minutes = addLeaddingZero(nowTime.getMinutes());
  const seconds = addLeaddingZero(nowTime.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};

const updateClock = () => {
  refs.timeClock.textContent = getCurrentTime();
};

setInterval(updateClock, 1000);
