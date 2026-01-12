const transition = document.querySelector('.transition');


if (!sessionStorage.getItem('transitionShown')) {
  transition.classList.add("active");
  setTimeout(() => {
    transition.classList.remove("active");
    sessionStorage.setItem('transitionShown', 'true');
  }, 1200);
}


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").endsWith(".html")) {
      e.preventDefault(); 
      transition.classList.add("active");
      setTimeout(() => {
    
        sessionStorage.removeItem('transitionShown');
        window.location.href = link.href;
      }, 800); 
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".skill-box");
  const popup = document.querySelector(".popup");
  const popupTitle = document.getElementById("popup-title");
  const popupText = document.getElementById("popup-text");
  const closeBtn = document.querySelector(".close");

  boxes.forEach(box => {
    box.addEventListener("click", () => {
      popupTitle.textContent = box.textContent;
      popupText.textContent = box.getAttribute("data-text");
      popup.style.display = "flex";
      popup.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    popup.classList.remove("show");
  });
});

