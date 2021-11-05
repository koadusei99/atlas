const navlist = document.getElementById("navitems");
const toggle = document.getElementById("navToggle");

toggle.addEventListener("click", () => {
  let disp = window.getComputedStyle(navlist, null).getPropertyValue("display");

  if (disp === "none") {
    navlist.style.display = "flex";
  } else {
    navlist.style.display = "none";
  }
});
