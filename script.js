function generateQR(event) {
  event.preventDefault();

  let qrText = document.getElementById("qrText").value.trim();

  if (qrText === "") {
    alert("Please enter some text or a URL");
    return;
  }


  let qrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;

  // Display QR code
  document.getElementById("qrResult").innerHTML = `
    <img src="${qrAPI}" alt="QR Code">
  `;

}
