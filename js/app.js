document.addEventListener("DOMContentLoaded", () => {
    // Auth check
    if (!localStorage.getItem("loggedIn")) {
      window.location.href = "index.html";
    }
  
    const upload = document.getElementById("imageUpload");
    const generateBtn = document.getElementById("generateBtn");
    const preview = document.getElementById("previewImage");
    const results = document.getElementById("resultsSection");
  
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(t => new bootstrap.Tooltip(t));
  
    upload.addEventListener("change", () => {
      if (upload.files.length > 0) {
        const file = upload.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.classList.remove("d-none");
        };
        reader.readAsDataURL(file);
        generateBtn.disabled = false;
      }
    });
  
    generateBtn.addEventListener("click", () => {
      setTimeout(() => {
        results.classList.remove("d-none");
      }, 800);
    });
  });
  