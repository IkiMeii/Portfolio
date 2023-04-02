fetch("header.html")
  .then((response) => response.text())
  .then((text) => {
    const header = document.querySelector("header");
    header.innerHTML = text;
  });
