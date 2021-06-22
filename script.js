const formData = document.querySelector("#form-doc");

const memberName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const image = document.querySelector("#formFile");
const box = document.querySelector("#templates");
const img = document.querySelector("#images");
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

  //   document.querySelector(".gpdf").classList.add("d-block");
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
        <div class="contain" id="templates">
            <div class="render-field">

                <header>
                    <div class="header-content">
                        <div class="logo_tvinm">
                            <img src="logo.png" alt="">
                        </div>
                        <div class="header-data">
                            <h4 class="page-header mb-2 fw-bold">Thambatty Vivekanandar Illaignar narpani mandram</h4>
                            <h6>Nundhala Post, The Nilgiris 643003</h6>

                        </div>
                        <div class="logo_nyk">
                            <img src="nyks_logo.jpg" alt="">
                        </div>
                    </div>
                </header>
                <div class="bg"></div>
                <div class="main-template" id="templates">
                    <div class="title pt-2 pb-5">
                        <h2 class="text-center fw-bold">
                            Member Details
                        </h2>
                    </div>
                    <div class="profile-img">
                        <img class="p-img" src="${localStorage.getItem(
                          "img"
                        )}" alt="">
                    </div>
                    <div class="row section-pad">
                        <div class="col-11">
                            <div class="row details">
                                <div class="col-4 mb-4">
                                    <h6 class="key">Name</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>

                                <div class="col-5 mb-4">
                                    <h6 class="value">${myForm[1]}</h6>
                                </div>

                                <div class="col-4 mb-4">
                                    <h6 class="key">Date of Birth</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[2]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Blood Group</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[3]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Gender</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[4]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Father's Name</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[5]}</h6>
                                </div>

                                <div class="col-4 mb-4">
                                    <h6 class="key">Mother's Name</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[6]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Address</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6 class="address">${myForm[7]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Contact Number</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[8]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Aadhar Number</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[9]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Email Id</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6 class="email-data">${myForm[10]}</h6>
                                </div>
                                <div class="col-4 mb-4">
                                    <h6 class="key">Position</h6>
                                </div>
                                <div class="col-1">
                                    <h6>:</h6>
                                </div>
                                <div class="col-5 mb-4">
                                    <h6>${myForm[11]}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>

                        <div class="row justify-content-between">
                            <div class="col-3">
                                <h6 class="fw-bold">President Sign</h6>
                            </div>
                            <div class="col-3 text-end">
                                <h6 class="fw-bold">Member Sign</h6>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
      `;
  html2pdf(template, { html2canvas: { scale: 4 } });
  sessionStorage.clear();
  setTimeout(function () {
    window.location.reload(1);
  }, 5000);
}
