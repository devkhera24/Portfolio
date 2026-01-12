const transition = document.querySelector('.transition');

// Check if we should show the transition
if (!sessionStorage.getItem('transitionShown')) {
  transition.classList.add("active");
  setTimeout(() => {
    transition.classList.remove("active");
    sessionStorage.setItem('transitionShown', 'true');
  }, 1200);
}

// Navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").endsWith(".html")) {
      e.preventDefault(); // prevent instant navigation
      transition.classList.add("active");
      setTimeout(() => {
        // Clear flag for next page
        sessionStorage.removeItem('transitionShown');
        window.location.href = link.href;
      }, 800); // matches animation duration
    }
  });
});

