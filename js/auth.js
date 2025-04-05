document.addEventListener("DOMContentLoaded", () => {
    // Default hardcoded users
    const defaultUsers = [
      { email: "meg@gmail.com", password: "meg" },
      { email: "rach@gmail.com", password: "rach" }
    ];
  
    // Initialize user storage if not present
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  
    // LOGIN
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const users = JSON.parse(localStorage.getItem("users")) || [];
          
            const match = users.find(user => user.email === email && user.password === password);
            if (match) {
              localStorage.setItem("loggedIn", "true");
              localStorage.setItem("loggedInEmail", email);
              window.location.href = "home.html";
            } else {
              document.getElementById("loginError").classList.remove("d-none");
            }
          });          
    }
  
    // SIGN UP
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
          
            if (password !== confirmPassword) {
              alert("Passwords do not match.");
              return;
            }
          
            if (password.length < 4) {
              alert("Password must be at least 4 characters long.");
              return;
            }
          
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const alreadyExists = users.some(user => user.email === email);
          
            if (alreadyExists) {
              alert("Email already registered.");
              return;
            }
          
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("signupSuccess").classList.remove("d-none");
            signupForm.reset();
          });
          
    }
  });
  