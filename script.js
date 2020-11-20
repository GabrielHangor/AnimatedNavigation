const menuBars = document.querySelector(".menu-bars");
const overlay = document.querySelector(".overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");

function toggleNav() {
  // Menu bars open/closed
  menuBars.classList.toggle("change");
  // Add the 'toggle' class to the overlay
  overlay.classList.toggle("overlay-active");

  overlay.classList.contains("overlay-active")
    ? (overlay.classList.remove("overlay-slide-left"),
      overlay.classList.add("overlay-slide-right"),
      // Animate in
      nav1.classList.remove("slide-out-1"),
      nav1.classList.add("slide-in-1"),
      nav2.classList.remove("slide-out-2"),
      nav2.classList.add("slide-in-2"),
      nav3.classList.remove("slide-out-3"),
      nav3.classList.add("slide-in-3"),
      nav4.classList.remove("slide-out-4"),
      nav4.classList.add("slide-in-4"),
      nav5.classList.remove("slide-out-5"),
      nav5.classList.add("slide-in-5"))
    : (overlay.classList.remove("overlay-slide-right"),
      overlay.classList.add("overlay-slide-left"),
      // Animate out
      nav1.classList.remove("slide-in-1"),
      nav1.classList.add("slide-out-1"),
      nav2.classList.remove("slide-in-2"),
      nav2.classList.add("slide-out-2"),
      nav3.classList.remove("slide-in-3"),
      nav3.classList.add("slide-out-3"),
      nav4.classList.remove("slide-in-4"),
      nav4.classList.add("slide-out-4"),
      nav5.classList.remove("slide-in-5"),
      nav5.classList.add("slide-out-5"));
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
