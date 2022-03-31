// https://goqr.me/qr-code-logo/
//settings

const wrapper = document.querySelector(".wrapper");//div kemel
const qrInput = wrapper.querySelector(".form input");//input
const generateBtn = wrapper.querySelector(".form button");//button
const qrImg = wrapper.querySelector(".qr-code img");//img tag

generateBtn.addEventListener("click", () => { //onclick button
    let qrValue = qrInput.value;
    if (!qrValue) return;//if the input is epmty then return from here //bta3mul stop degre is false yaane empty
    generateBtn.innerHTML = "Generating QR Code...";
    //getting a QR code of user entered value using the qrserver
    //api and passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;//generate QRcode
    qrImg.addEventListener("load", () => { //once QR code img loaded //onload
        wrapper.classList.add("active");//btkaber el div w btezhar el QR code
        generateBtn.innerText = "Generate QR Code";

    });

});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
})




/////////////////////////

//  const wrapper = document.querySelector(".wrapper"),
//  qrInput = wrapper.querySelector(".form input"),
//  generateBtn = wrapper.querySelector(".form button"),
//  qrImg = wrapper.querySelector(".qr-code img");
//  let preValue;

//  generateBtn.addEventListener("click", () => {
//      let qrValue = qrInput.value.trim();
//      if(!qrValue || preValue === qrValue) return;
//      preValue = qrValue;
//      generateBtn.innerText = "Generating QR Code...";
//      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
//      qrImg.addEventListener("load", () => {
//          wrapper.classList.add("active");
//          generateBtn.innerText = "Generate QR Code";
//      });
//  });

//  qrInput.addEventListener("keyup", () => {
//      if(!qrInput.value.trim()) {
//          wrapper.classList.remove("active");
//          preValue = "";
//      }
//  });