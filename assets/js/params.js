const params = window.location.search;

if (params) {
  if (document.getElementById("cta-button-1")) {
    document
      .getElementById("cta-button-1")
      .setAttribute("href", `https://pay.hotmart.com/X73773857R?off=1dir2qgl${params}`);
  }

  if (document.getElementById("cta-button-2")) {
    document
      .getElementById("cta-button-2")
      .setAttribute("href", `https://pay.hotmart.com/X73773857R?off=1dir2qgl${params}`);
  }
}
