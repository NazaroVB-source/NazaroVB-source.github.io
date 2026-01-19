// Havalı etkileşimler: mouse parallax + partiküller on click
(() => {
  const svg = document.getElementById('hero-svg');
  const group = document.getElementById('svg-group');
  const btn = document.getElementById('magic-btn');
  const container = document.body;

  // Parallax: fare hareketine göre küçük translate
  function onMove(e){
    const rect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = (e.clientX - cx) / rect.width; // -0.5..0.5-ish
    const dy = (e.clientY - cy) / rect.height;
    const tx = dx * 18; // x translate
    const ty = dy * 12; // y translate
    // rotate hafif
    const rx = dy * -6;
    const ry = dx * 6;
    group.style.transform = `translate(${tx}px, ${ty}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  // Partiküller: element oluştur, animate via requestAnimationFrame
  function spawnParticles(x, y, color = null){
    const count = 14;
    for(let i=0;i<count;i++){
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      const size = 6 + Math.random()*12;
      p.style.width = p.style.height = size + 'px';
      const hue = color || (120 + Math.random()*200);
      p.style.background = `radial-gradient(circle at 30% 30%, #fff 0%, hsl(${hue}deg 90% 60%) 35%)`;
      container.appendChild(p);

      // random velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 40 + Math.random() * 160;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 30; // slight upward bias

      const life = 700 + Math.random() * 500;
      const start = performance.now();

      function frame(now){
        const t = (now - start) / life;
        if(t >= 1){
          p.remove();
          return;
        }
        // ease out
        const ease = 1 - Math.pow(1 - t, 3);
        p.style.transform = `translate(${vx * ease}px, ${vy * ease + 0.5 * 200 * t * t}px) scale(${1 - 0.8 * t})`;
        p.style.opacity = String(1 - t);
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
  }

  // Event listeners
  window.addEventListener('mousemove', onMove);
  // mobile: do small parallax on touchmove
  window.addEventListener('touchmove', (e) => {
    if(e.touches && e.touches[0]) onMove(e.touches[0]);
  }, {passive:true});

  // Button click spawns particles at button center
  btn.addEventListener('click', (ev) => {
    const r = ev.currentTarget.getBoundingClientRect();
    spawnParticles(r.left + r.width/2, r.top + r.height/2);
    // small pulse
    ev.currentTarget.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.06)' },
      { transform: 'scale(1)' }
    ], { duration: 420, easing: 'cubic-bezier(.2,.9,.2,1)'});
  });

  // small idle animation for sparkles
  const sparkles = document.getElementById('sparkles');
  if(sparkles){
    let dir = 1;
    setInterval(()=>{
      const s = 0.98 + Math.random()*0.04;
      sparkles.style.transform = `scale(${s}) translateY(${(Math.random()-0.5)*2}px)`;
    }, 700 + Math.random()*800);
  }

})();
