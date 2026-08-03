/* ==========================================================
   login.js — Kishan - Tech Authentication Logic
   Connects to Node.js + MySQL Backend API (http://localhost:3000)
   ========================================================== */

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

// ---------- Password Hide / Show Toggle ----------
toggleBtn.addEventListener('click', () => {
  const isPw = pwInput.type === 'password';
  pwInput.type = isPw ? 'text' : 'password';
  toggleBtn.textContent = isPw ? 'Hide' : 'Show';
  toggleBtn.setAttribute('aria-label', isPw ? 'Hide password' : 'Show password');
});

// ---------- Input Validation Helpers ----------
function validLogin(v){
  // Accepts a valid email address OR a 10-digit phone number
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

// Clear error state on input change
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

// ---------- Form Submission & API Fetch ----------
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;

  // Validate Email / Phone
  if(!validLogin(emailInput.value)){
    setError(emailShell, emailErr, 'Enter a valid email or 10-digit phone number.');
    ok = false;
  } else {
    setError(emailShell, emailErr, '');
  }

  // Validate Password Length
  if(pwInput.value.length < 6){
    setError(pwShell, pwErr, 'Password must be at least 6 characters.');
    ok = false;
  } else {
    setError(pwShell, pwErr, '');
  }

  if(!ok) return;

  // UI Loading State
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-label').textContent = 'Signing in…';

  // Fetch API call to Node.js + MySQL Server
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: pwInput.value
    })
  })
  .then(res => res.json())
  .then(data => {
    // Reset Button State
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-label').textContent = 'Sign In';

    if (data.success) {
      // Show Success Message
      statusBox.classList.add('show');
      statusBox.textContent = 'Signed in — taking you to the home page…';

      // Save session in Browser LocalStorage
      localStorage.setItem('userProfile', JSON.stringify({ name: emailInput.value.split('@')[0], email: emailInput.value, avatar: '' }));

      // Redirect to main index.html
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 1000);
    } else {
      // Display Server Invalid Credentials Message
      setError(pwShell, pwErr, data.message || 'Invalid Email or Password.');
    }
  })
  .catch(err => {
    // Handle Server Offline / Network Error
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-label').textContent = 'Sign In';
    
    setError(pwShell, pwErr, 'Server connection failed. Make sure backend (node server.js) is running!');
  });
});

// ---------- OAuth Button Mock Click Handler ----------
document.querySelectorAll('.auth-oauth button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.borderColor = '#E8C468';
    setTimeout(() => btn.style.borderColor = '', 400);
  });
});
// ---------- Google OAuth Integration ----------
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) { return null; }
}

function handleGoogleResponse(response) {
  const payload = parseJwt(response.credential);
  if (payload) {
    const userProfile = {
      name: payload.name || payload.given_name,
      email: payload.email,
      avatar: payload.picture
    };

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    statusBox.classList.add('show');
    statusBox.textContent = 'Google Sign-In Successful! Redirecting…';

    setTimeout(() => {
      window.location.href = '../index.html';
    }, 1000);
  }
}

window.onload = function () {
  if (window.google) {
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Yahan apna Google Client ID dalein
      callback: handleGoogleResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtnWrapper"),
      { theme: "outline", size: "large", width: "100%", text: "continue_with" }
    );
  }
};
