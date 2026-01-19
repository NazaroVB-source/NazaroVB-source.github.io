(() => {
  const svg = document.getElementById('hero-svg');
  const group = document.getElementById('svg-group');
  const btn = document.getElementById('magic-btn');

  // Mouse Parallax Efekti
  window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    group.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Tıklayınca Partikül Patlama Efekti
  function spawnParticles(x, y) {
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      document.body.appendChild(p);
      
      const size = Math.random() * 10 + 5;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;

      const destX = (Math.random() - 0.5) * 300;
      const destY = (Math.random() - 0.5) * 300;

      p.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      }).onfinish = () => p.remove();
    }
  }

  btn.addEventListener('click', (e) => {
    spawnParticles(e.clientX, e.clientY);
  });
})();
