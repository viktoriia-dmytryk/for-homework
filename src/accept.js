import * as basicLightbox from 'basiclightbox';
import { onFirstLoad } from './js/handlers';
// Підтвердження повноліття через BasicLightbox
// Контекст: При відкритті сайту потрібно показати
//  модальне вікно з підтвердженням віку. Результат
// зберігається в localStorage, щоб не показувати повторно.

// Розширене ТЗ:
// При першому заході відкривається модалка через
// BasicLightbox:
// текст: “Вам уже є 18 років?”
// кнопки: “Так” / “Ні”
// При натисканні:
// “Так” → зберегти adult в localStorage, закрити модалку
// “Ні” → зберегти minor, показати повідомлення
// “Доступ обмежено”

// Дані зберігати під ключем:

// 'user-age-status'
// При завантаженні сторінки:
// якщо є дані в localStorage → модалку не показувати
// відобразити статус у .age-status
// Всі кнопки обробляти через addEventListener

document.addEventListener('DOMContentLoaded', onFirstLoad);
