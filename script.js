const formData = document.querySelector("#form-doc");

const memberName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const image = document.querySelector("#formFile");
const box = document.querySelector("#templates");
const img = document.querySelector("#images");
var modalToggle = document.getElementById("staticBackdrop");
let imgSrc;

let loadFile = function (event) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // console.log(reader.result);
    localStorage.setItem("img", reader.result);
    // console.log(localStorage.getItem("img"));
  });

  reader.readAsDataURL(image.files[0]);
  console.log("asdf");
  document
    .querySelector("#liveimg")
    .setAttribute("src", URL.createObjectURL(event.target.files[0]));
};

document.addEventListener("DOMContentLoaded", sessionStorage.clear());

formData.addEventListener("submit", function (e) {
  e.preventDefault();
  const formArr = [];
  for (let i = 0; i < e.target.length - 1; i++) {
    formArr.push(e.target[i].value);
  }
  console.log(e);

  formArr.push();

  sessionStart(formArr);
});

// box.innerHTML = template;

function sessionStart(arr) {
  localStorage.myForm = JSON.stringify(arr);
}

function GeneratePdf() {
  let myForm = JSON.parse(localStorage.myForm);
  const template = `
        
            <div class="render-field">

                <header>
                    <div class="header-content">
                        <div class="logo_tvinm">
                            <img src="logo.png" alt="">
                        </div>
                        <div class="header-title">
                            <p class="page-header mb-2 fw-bold">Thambatty <br/> Vivekanandar Illaignar narpani mandram</p>
                            <p>Nunthala Post, The Nilgiris 643003</p>

                        </div>
                        <div class="logo_nyk">
                            <img src="nyks_logo.jpg" alt="">
                        </div>
                    </div>
                </header>
                <div class="header-bg"></div>
                <div class="template-body">
                    <div class="body-title">
                        <p class="text-center fw-bold">
                            Member Details
                        </p>
                    </div>
                    <div class="profile-img">
                        <img src="${localStorage.getItem("img")}" alt="">
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="row details">
                                <div class="col-4">
                                    <p class="key">Name</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>

                                <div class="col-5">
                                    <p class="value">${myForm[1]}</p>
                                </div>

                                <div class="col-4">
                                    <p class="key">Date of Birth</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[2]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Blood Group</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[3]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Gender</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[4]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Father's Name</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[5]}</p>
                                </div>

                                <div class="col-4">
                                    <p class="key">Mother's Name</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[6]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Address</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p class="address">${myForm[7]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Contact Number</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[8]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Aadhar Number</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[9]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Email Id</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p class="email-data">${myForm[10]}</p>
                                </div>
                                <div class="col-4">
                                    <p class="key">Position</p>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-5">
                                    <p>${myForm[11]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <footer>

                        <div class="row justify-content-between">

                            <div class="col-12 text-end">
                                <p class="fw-bold">Member Signature</p>
                            </div>
                        </div>
                        <div class="bg-bottom"></div>
                    </footer>
                    
                    </div>
                    
                    `;

  //   html2pdf(template, { html2canvas: { scale: 4 } });
  //   var element = document.getElementById("element-to-print");

  html2pdf(template, {
    margin: 0,
    filename: `${myForm[1]}.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 4, logging: true, dpi: 300, letterRendering: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  });

  sessionStorage.clear();
  setTimeout(function () {
    window.location.reload();
    myModal.hide(modalToggle);
  }, 5000);
}
