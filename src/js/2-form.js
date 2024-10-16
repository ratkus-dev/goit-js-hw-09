let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form'),
  emailInput = form.elements.email,
  messageInput = form.elements.message,
  storage_key = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', populateForm);

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(storage_key, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storage_key);
  event.target.reset();
  formData = { email: '', message: '' };
});

function populateForm() {
  const savedData = localStorage.getItem(storage_key);

  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}
