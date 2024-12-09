document.querySelector('.contacts-form').addEventListener('submit', function (event) {
    
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let errorMessage = '';
  
    if (fullName === '') {
      errorMessage += 'Please enter your full name.\n';
    }
  
    if (email === '') {
      errorMessage += 'Please enter your email.\n';
    } else if (!emailPattern.test(email)) {
      errorMessage += 'Please enter a valid email address.\n';
    }
  
    if (errorMessage) {
      alert(errorMessage);
      event.preventDefault();
    }
  });