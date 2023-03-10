const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      response.json().then((userData) => localStorage.setItem("userId", userData.user.id) );
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signUpFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-sign-up').value.trim();
  const email = document.querySelector('#email-sign-up').value.trim();
  const password = document.querySelector('#password-sign-up').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      response.json().then((userData) => localStorage.setItem("userId", userData.id) );
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.sign-up-form')
  .addEventListener('submit', signUpFormHandler);
