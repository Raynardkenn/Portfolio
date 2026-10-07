const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('side-menu');
    const menuLinks = document.querySelectorAll('#side-menu a');

    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
      });
    });

    const texts = [
      "Information Technology Student",
      "Cloud Computing & Full-Stack Development",
      "Designing clarity in a cluttered world."
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

      const typingElem = document.getElementById('typing-text');
      if (typingElem) {
        typingElem.textContent = letter;
      }
      
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500); 
      } else {
        setTimeout(type, 50);
      }
    }
    document.addEventListener('DOMContentLoaded', type);

    // TOGGLE SEE MORE / SHOW LESS PROJECTS
  const toggleBtn = document.getElementById('toggleProjectsBtn');
  const extraProjects = document.querySelectorAll('.extra-project');
  let isExpanded = false;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      
      extraProjects.forEach(card => {
        card.style.display = isExpanded ? 'flex' : 'none';
      });

      if (isExpanded) {
        toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Show Less';
      } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> See More Projects';
      }
    });
  }