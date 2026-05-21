/* ── THEME TOGGLE ── */
const btn   = document.getElementById('themeBtn');
const thumb = document.getElementById('toggleThumb');
const html  = document.documentElement;
 
function temaInicial() {
  const salvo = localStorage.getItem('theme');
  if (salvo) return salvo;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
 
const saved = temaInicial();
html.setAttribute('data-theme', saved);
thumb.textContent = saved === 'dark' ? '☀️' : '🌙';
 
btn.addEventListener('click', () => {
  const curr = html.getAttribute('data-theme');
  const next = curr === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  thumb.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
});
 
/* ── COPY EMAIL ── */
const copyBtn   = document.getElementById('copyEmailBtn');
const copyLabel = document.getElementById('copyLabel');
const toast     = document.getElementById('toast');
let toastTimer;
 
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('augustogaiposilva@gmail.com')
    .then(() => {
      copyBtn.classList.add('copied');
      copyLabel.textContent = '✓ Copiado!';
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyLabel.textContent = 'Clique para copiar';
        }, 400);
      }, 2500);
    })
    .catch(() => {
      copyLabel.textContent = 'Erro ao copiar';
      setTimeout(() => { copyLabel.textContent = 'Clique para copiar'; }, 2000);
    });
});
 
/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
 
revealEls.forEach(el => observer.observe(el));
 
/* ── TYPING SUBTITLE (EXTRA) ── */
const phrases = [
  'Estudante de Engenharia de Software no IBMEC.',
  'Interesse em algoritmos e IA.',
  'Medalhista OBMEP 2023 🥉',
  'Sempre buscando novas oportunidades.',
];
 
const typingEl = document.getElementById('typingText');
let phraseIdx = 0, charIdx = 0, deleting = false;
 
function type() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typingEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
    setTimeout(type, 48);
  } else {
    typingEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 24);
  }
}
 
setTimeout(type, 800);