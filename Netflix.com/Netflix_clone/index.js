const btn = document.getElementById("signInBtn");
    btn.addEventListener("click", () => {
      // Add fade-out effect
      document.body.classList.add("fade-out");

      // Navigate to next page after transition
      setTimeout(() => {
        window.location.href = "singin.html";
      }, 500);
    });



    
const faqs = document.querySelectorAll(".faq-question");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const parent = faq.parentElement;

    // Close other open boxes
    document.querySelectorAll(".faq").forEach(f => {
      if (f !== parent) f.classList.remove("active");
    });

    // Toggle current box
    parent.classList.toggle("active");
  });
});