const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const insertImg = document.getElementById('meme-image');
const insertMeme = document.getElementById('meme-insert');

function createText() {
  const text = inputText.value;
  memeText.innerText = text;
}

inputText.addEventListener('input', createText);

/** Ref: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
 * https://developer.mozilla.org/en-US/docs/Web/API/FileReader */
function loadFile(event) {
  const selectImg = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = function onLoad() {
    insertImg.setAttribute('src', reader.result);
  };
  reader.readAsDataURL(selectImg);
}

insertMeme.addEventListener('change', loadFile);
