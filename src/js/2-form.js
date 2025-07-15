const form = document.querySelector('.js-form');
let formData = {
  email: '',
  message: '',
};
const localStorageKey = 'feedback-form-state';
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
const saveLocalStorage = localStorage.getItem(localStorageKey);
if (saveLocalStorage) {
  try {
    formData = JSON.parse(saveLocalStorage);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  } catch (error) {
    console.error('Помилка парсингу:', error);
  }
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = { email: '', message: '' };
});