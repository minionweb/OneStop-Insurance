/* Demo only: accept any non-empty email/password and go to Plans */
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const agree = document.getElementById('agree');
const loginBtn = document.getElementById('loginBtn');

document.getElementById('year').textContent = new Date().getFullYear();

const togglePw = document.getElementById('togglePw');
togglePw.addEventListener('click', () => {
  const isHidden = pwInput.getAttribute('type') === 'password';
  pwInput.setAttribute('type', isHidden ? 'text' : 'password');
  togglePw.textContent = isHidden ? 'Hide' : 'Show';
  togglePw.setAttribute('aria-pressed', String(isHidden));
});

function validate(){
  const ok = emailInput.value.trim().length>0 && pwInput.value.trim().length>0 && agree.checked;
  loginBtn.disabled = !ok; return ok;
}
['input','change','blur'].forEach(evt => form.addEventListener(evt, validate));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!validate()) return;
  const email = emailInput.value.trim();
  sessionStorage.setItem('demoUser', email || 'agent@example.com');
  window.location.href = 'plans.html';
});

const forgot = document.getElementById('forgot');
forgot.addEventListener('click', (e)=>{ e.preventDefault(); alert('Demo: password reset is disabled.'); });

document.getElementById('createAccount').addEventListener('click', (e)=>{ e.preventDefault(); alert('Demo: account creation is not enabled.'); });
