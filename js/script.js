// Home Page - Learn More Button
const learnMoreBtn = document.getElementById("learnMoreBtn");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    window.location.href = "about.html";
  });
}

// Gallery - Add Random Image
const addImageBtn = document.getElementById("addImageBtn");
if (addImageBtn) {
  addImageBtn.addEventListener("click", () => {
    const gallery = document.querySelector(".gallery");
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;
    newImg.alt = "Random Project";
    gallery.appendChild(newImg);
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("formResponse").textContent = `✅ Thanks, ${name}! Your message has been received.`;
    contactForm.reset();
  });
}

// Typing effect for form response
function typeWriter(text, elementId, speed = 50) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.textContent = "";
  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

// Update form handler
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    typeWriter(`✅ Thanks, ${name}! Your message has been received.`, "formResponse");
    contactForm.reset();
  });
}
