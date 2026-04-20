import { STORAGE_KEYS } from './constants';
import { refs } from './refs';

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
