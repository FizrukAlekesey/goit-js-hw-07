const textInput = document.querySelector('#name-input');
const textouTput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  event.currentTarget.value.trim() === ''
    ? (textouTput.textContent = 'Anonymous')
    : (textouTput.textContent = event.currentTarget.value.trim());
});