// uncheck menutoggle checkbox if #contact-us-link is clicked
document.getElementById("contact-us-link").addEventListener("click", (e) => {
  document.getElementById("menu-toggle-check").checked = false;
});
