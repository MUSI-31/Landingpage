document.getElementById('regform').addEventListener('submit',function(e){
    e.preventDefault();

    document.getElementById('emailerror').textContent="";
    document.getElementById('passerror').textContent = "";

    let isValid=true;
    const email = document.getElementById('email').value.trim();
    if (email === "") {
        document.getElementById('emailerror').textContent = "Please enter your email";
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailerror').textContent = "Please enter a valid email address";
            isValid = false;
        }
    }

    const password = document.getElementById('password').value.trim();
    const upper = /[A-Z]/;
    const special = /[!@#$%^&*(),.{}|<>]/;
    if (password === "") {
        document.getElementById('passerror').textContent = "Please enter your password";
        isValid = false;
    } else if (!upper.test(password)) {
        document.getElementById('passerror').textContent = "Password must contain at least one uppercase letter";
        isValid = false;
    } else if (!special.test(password)) {
        document.getElementById('passerror').textContent = "Password must contain at least one special character";
        isValid = false;
    }

    
    if (isValid) {
        console.log({
            email: email,
            password: password
        });
    const btn = document.getElementById("signInBtn");
    btn.addEventListener("click", () => {
      // Add fade-out effect
      document.body.classList.add("fade-out");

      // Navigate to next page after transition
      setTimeout(() => {
        window.location.href = "main.html";
      }, 100);
    });

    }
});