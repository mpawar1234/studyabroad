
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted!');
       
    }
    
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('floatingPassword');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    }
        
   
 
document.addEventListener("DOMContentLoaded", function() {
   
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');
  
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('show');
    });
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
        