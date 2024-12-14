
    const cards = document.querySelectorAll('.card');
    const radios = document.querySelectorAll('.radio');

    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        radios.forEach(r => r.classList.remove('checked'));

        card.classList.add('active');
        radios[index].classList.add('checked');
      });
    });