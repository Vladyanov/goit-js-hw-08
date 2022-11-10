import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

let dataForStorage = {};

const handleInput = e => {
  if (localStorage.getItem(STORAGE_KEY)) {
    dataForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  dataForStorage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForStorage));
  dataForStorage = {};
};

const insertStorageDataToForm = () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  console.log(savedData);
  if (savedData) {
    if (savedData.email) {
      refs.email.value = savedData.email;
    }
    if (savedData.message) {
      refs.message.value = savedData.message;
    }
  }
};

const handleSubmit = e => {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
};

refs.form.addEventListener('input', throttle(handleInput, 500));
refs.form.addEventListener('submit', handleSubmit);

insertStorageDataToForm();
