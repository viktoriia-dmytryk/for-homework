// 3. Запам’ятовування улюбленого кольору
// Контекст: На сторінці профілю є випадаючий список з кольорами. Користувач хоче, щоб після повторного відкриття сайту залишався його попередній вибір.
// Базовий HTML:
// Розширене ТЗ:
//     • Збереження та зчитування потрібно реалізувати через JSON.
//     • Якщо даних ще немає, за замовчуванням має використовуватися blue.
//     • У .color-status потрібно відображати актуальний вибір користувача.
//     • Після оновлення сторінки select має показувати збережене значення.
//     • При зміні значення в .color-select потрібно зберігати вибраний колір у localStorage.

import { STORAGE_KEYS } from './js/constants';
import { onColorSelect } from './js/handlers';
import { refs } from './js/refs';
import { getFromLocalStorage } from './js/storage';

refs.colorSelect.addEventListener('change', onColorSelect);
document.addEventListener('DOMContentLoaded', event => {
  refs.colorStatus.textContent =
    getFromLocalStorage(STORAGE_KEYS.COLOR_STATUS) || `Обраний колір: blue`;
  refs.colorSelect.value =
    getFromLocalStorage(STORAGE_KEYS.COLOR_SELECT) || `blue`;
});
