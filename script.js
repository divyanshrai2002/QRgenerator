function generateQR(event) {
  event.preventDefault(); // Stop form  reloading page

  let qrText = document.getElementById("qrText").value.trim();

  if (qrText === "") {
    alert("Please enter some text or a URL");
    return;
  }

  // Free QR code API
  let qrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;

  // Display QR code
  document.getElementById("qrResult").innerHTML = `
    <img src="${qrAPI}" alt="QR Code">
  `;

  // Hide the form after QR is generated
  document.querySelector("form").style.display = "none";
}
