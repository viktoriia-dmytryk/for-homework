import { STORAGE_KEYS } from './js/constants';
import { onNotificationsCheckbox } from './js/handlers';
import { refs } from './js/refs';
import { getFromLocalStorage } from './js/storage';
//  Перемикач показу сповіщень
// Контекст: У налаштуваннях акаунта є чекбокс, який вмикає або вимикає
// сповіщення. Потрібно, щоб стан чекбокса зберігався між відкриттями сторінки.
// Базовий HTML:
// Розширене ТЗ:
//     • Дані потрібно зберігати й читати через JSON.
//     • Якщо значення ще не збережене, чекбокс має бути неактивним.
//     • У .notifications-status потрібно показувати, увімкнені сповіщення чи ні.
//     • Після оновлення сторінки чекбокс має відновлювати попередній стан.
//     • При зміні стану .notifications-toggle потрібно зберігати boolean-значення в
// localStorage.
document.addEventListener('DOMContentLoaded', () => {
  refs.notificationsCheckbox.checked =
    getFromLocalStorage(STORAGE_KEYS.CHECKBOX_NOTIFICATIONS) || false;
  refs.notificationsStatus.textContent =
    getFromLocalStorage(STORAGE_KEYS.STATUS_NOTIFICATIONS) ||
    'Сповіщення вимкнені';
});
refs.notificationsCheckbox.addEventListener('change', onNotificationsCheckbox);
