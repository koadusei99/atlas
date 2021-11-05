const navlist = document.getElementById("navitems");
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const logo = document.getElementById("logo");

toggle.addEventListener("click", () => {
  let disp = window.getComputedStyle(navlist, null).getPropertyValue("display");

  if (disp === "none") {
    nav.style.backgroundColor = "#fff";
    logo.style.color = "#263746";
    toggle.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17035 8.075L15.9231 1.32222C16.2256 1.01973 16.2256 0.529352 15.9231 0.226865C15.6206 -0.0756217 15.1303 -0.0756217 14.8278 0.226865L8.075 6.97965L1.32222 0.227897C1.01973 -0.0745893 0.529352 -0.0745893 0.226865 0.227897C-0.0756217 0.530384 -0.0756217 1.02076 0.226865 1.32325L6.97965 8.07603L0.227897 14.8278C-0.0745893 15.1303 -0.0745893 15.6206 0.227897 15.9231C0.379657 16.0739 0.576841 16.1503 0.775057 16.1503C0.973274 16.1503 1.17149 16.0749 1.32222 15.9231L8.075 9.17035L14.8278 15.9231C14.9795 16.0739 15.1767 16.1503 15.3749 16.1503C15.5732 16.1503 15.7714 16.0749 15.9221 15.9231C16.2246 15.6206 16.2246 15.1303 15.9221 14.8278L9.17035 8.075Z" fill="#212D3D"/>
    </svg>
    `;
    navlist.style.display = "flex";
  } else {
    logo.style.color = "#fff";
    nav.style.backgroundColor = "transparent";
    navlist.style.display = "none";
    toggle.innerHTML = `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="white"/>
    </svg>   
    `;
  }
});
