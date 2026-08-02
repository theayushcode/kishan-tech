const form       = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const pwInput    = document.getElementById('password');
const emailShell = document.getElementById('emailShell');
const pwShell    = document.getElementById('pwShell');
const emailErr   = document.getElementById('emailErr');
const pwErr      = document.getElementById('pwErr');
const toggleBtn  = document.getElementById('togglePw');
const submitBtn  = document.getElementById('submitBtn');
const statusBox  = document.getElementById('statusBox');

toggleBtn.addEventListener('click', () => {
  const isPw = pwInput.type === 'password';
  pwInput.type = isPw ? 'text' : 'password';
  toggleBtn.textContent = isPw ? 'Hide' : 'Show';
  toggleBtn.setAttribute('aria-label', isPw ? 'Hide password' : 'Show password');
});

function validLogin(v){
  // accepts an email OR a simple 10-digit phone number
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhone = /^[0-9]{10}$/.test(v.replace(/\s|-/g, ''));
  return isEmail || isPhone;
}

function setError(shell, errEl, msg){
  if(msg){
    shell.classList.add('error');
    errEl.textContent = msg;
  } else {
    shell.classList.remove('error');
    errEl.textContent = '';
  }
}

emailInput.addEventListener('input', () => {
  if(emailShell.classList.contains('error') && validLogin(emailInput.value)){
    setError(emailShell, emailErr, '');
  }
});
pwInput.addEventListener('input', () => {
  if(pwShell.classList.contains('error') && pwInput.value.length >= 6){
    setError(pwShell, pwErr, '');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;

  if(!validLogin(emailInput.value)){
    setError(emailShell, emailErr, 'Enter a valid email or 10-digit phone number.');
    ok = false;
  } else {
    setError(emailShell, emailErr, '');
  }

  if(pwInput.value.length < 6){
    setError(pwShell, pwErr, 'Password must be at least 6 characters.');
    ok = false;
  } else {
    setError(pwShell, pwErr, '');
  }

  if(!ok) return;

  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-label').textContent = 'Signing in…';

  // TODO: replace this with a real request to your auth/login endpoint
  setTimeout(() => {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-label').textContent = 'Sign In';
    statusBox.classList.add('show');

    // redirect back to the homepage after a successful sign-in
    setTimeout(() => { window.location.href = '../index.html'; }, 1100);
  }, 1200);
});

document.querySelectorAll('.auth-oauth button').forEach(btn => {
  btn.addEventListener('click', () => {
    // TODO: wire this up to your real OAuth provider flow
    btn.style.borderColor = '#E8C468';
    setTimeout(() => btn.style.borderColor = '', 400);
  });
});