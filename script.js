const dialog = document.querySelector('#figure-dialog');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('p');

document.querySelectorAll('[data-zoom]').forEach((button) => {
  button.addEventListener('click', () => {
    const figure = button.closest('figure');
    dialogImage.src = button.dataset.zoom;
    dialogImage.alt = figure.querySelector('img').alt;
    dialogCaption.textContent = button.dataset.caption;
    dialog.showModal();
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const copyButton = document.querySelector('#copy-link');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('https://reckozmh.github.io/LINK/');
    const original = copyButton.innerHTML;
    copyButton.textContent = 'Link copied';
    window.setTimeout(() => { copyButton.innerHTML = original; }, 2200);
  } catch {
    window.location.href = 'https://reckozmh.github.io/LINK/';
  }
});
