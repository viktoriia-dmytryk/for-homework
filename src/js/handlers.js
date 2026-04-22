import { STORAGE_KEYS } from './constants';
import { refs } from './refs';
import { saveToLocalStorage } from './storage';

export function onNameInput(event) {
  const userName = event.target.value.trim();
  refs.welcomeText.textContent = `Привіт, ${userName}`;
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userName));
  if (userName === '') {
    refs.welcomeText.textContent = `Привіт, гість!`;
  }
}

export function initWelcomeTaskPage(event) {
  try {
    const storageUserName = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
    refs.welcomeText.textContent = storageUserName
      ? `Привіт, ${storageUserName}`
      : `Привіт, гість!`;

    refs.nameInput.value = storageUserName;
  } catch (error) {
    console.log(error);
  }
}

export function onColorSelect(event) {
  const colorValue = event.target.value;

  refs.colorStatus.textContent = `Обраний колір: ${colorValue}`;
  saveToLocalStorage(STORAGE_KEYS.COLOR_SELECT, colorValue);
  saveToLocalStorage(STORAGE_KEYS.COLOR_STATUS, refs.colorStatus.textContent);
}

export function onNotificationsCheckbox(event) {
  const checkboxValue = event.target.checked;
  saveToLocalStorage(STORAGE_KEYS.CHECKBOX_NOTIFICATIONS, checkboxValue);
  refs.notificationsStatus.textContent = checkboxValue
    ? 'Сповіщення увімкнені'
    : 'Сповіщення вимкнені';

  saveToLocalStorage(
    STORAGE_KEYS.STATUS_NOTIFICATIONS,
    refs.notificationsStatus.textContent
  );
}
