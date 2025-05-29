    const toggleBtn = document.getElementById('toggleBtn');
    const mobileNav = document.getElementById('mobileNav');

    toggleBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });