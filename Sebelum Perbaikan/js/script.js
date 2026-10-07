function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-200px";
  } else {
    menu.style.left = "0px";
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#side-menu a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(); 
    });
  });
});


const texts = [
  "Mahasiswa Ilmu Komputer",
  "Web Developer · UI/UX Designer · Photography",
  `"Keberhasilan tidak akan dicapai jika tidak gagal, kegagalan tidak didapati jika tidak mencoba."`
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typing-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1200); 
  } else {
    setTimeout(type, 60);
  }
}
document.addEventListener('DOMContentLoaded', type);
