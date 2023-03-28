//^ Add imports

import '../css/common.css';
import '../css/03-feedback.css'; 
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY);
const parseData = JSON.parse(savedData);
let formData = {};
fillTextarea();

// ^ Add Listeners

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));



// ^Add functions

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Всі поля повинні бути заповнені.');
  }

  console.log(formData);
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillTextarea() {
  if (savedData) {
    parseData.email === undefined
      ? (email.value = '')
      : (email.value = parseData.email);
    parseData.message === undefined
      ? (message.value = '')
      : (message.value = parseData.message);

    formData = parseData;
  }
}
