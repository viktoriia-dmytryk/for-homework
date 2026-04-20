import { initWelcomeTaskPage, onNameInput } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initWelcomeTaskPage);
refs.nameInput.addEventListener('input', onNameInput);
