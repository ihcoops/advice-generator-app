const generateButton = document.querySelector('.btn');
const idText = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice');

generateButton.addEventListener('click', () => {
  generate();
});

function generate () {
  fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    idText.innerHTML = `ADVICE #`+data.slip.id;
    adviceText.innerHTML = `"` + data.slip.advice + `"`;
  })
  .catch(error => {
  });
}