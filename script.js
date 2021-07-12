const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function createText() {
  const text = inputText.value;
  memeText.innerText = text;
}

inputText.addEventListener('input', createText);
