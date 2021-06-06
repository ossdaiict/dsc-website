// send a POST request to form2channel on form submission
// and then show a toast displaying its success / failure

const contactForm = document.querySelector("footer form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://showcase.api.linx.twenty57.net/Form2Channel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      { key: "formto_googlesheets", value: "dsc@daiict.ac.in" },
      {
        key: "Email",
        value: document.getElementById("SenderEmail").value,
      },
      {
        key: "Name",
        value: document.getElementById("SenderName").value,
      },
      {
        key: "Message",
        value: document.getElementById("SenderMessage").value,
      },
    ]),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject({
          statusText: response.statusText,
          status: response.status,
        });
      }
    })
    .then((data) => {
      if (data.Success == true) {
        // init and show the toast showing success
        var s = new bootstrap.Toast(document.getElementById("successToast"));
        s.show();
      } else {
        // shouldn't happen, but there is no information about the error if happens
        return Promise.reject();
      }
    })
    .catch((error) => {
      var errToast = document.getElementById("alertToast");

      if (error.status != null) {
        var errBody = document.querySelector("#alertToast .toast-body");
        errBody.innerHTML += `${error.status}: ${error.statusText}`;
      }
      // init and show the toast showing failure
      var er = new bootstrap.Toast(errToast);
      er.show();
    });
});
