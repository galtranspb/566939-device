var feedback = document.querySelector(".feedback-js");
var feedbackPopup = document.querySelector(".modal-write-us");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var fullname = document.querySelector("[name=fullname]");
var form = feedbackPopup.querySelector("form");
var email = feedbackPopup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("fullname");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (event) {
  event.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storage) {
    fullname.value = storage;
    email.focus();
  } else {
    fullname.focus();
  }
});

feedbackClose.addEventListener("click", function (event) {
  event.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
  if (!fullname.value || !email.value) {
    event.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fullname", fullname.value);
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

//************************************КАРТА*****************************************************

//var mapLink = document.querySelector(".contacts-button-map");
//var mapPopup = document.querySelector(".modal-map");
//var mapClose = mapPopup.querySelector(".modal-close");
//
//mapLink.addEventListener("click", function (event) {
//  event.preventDefault();
//  mapPopup.classList.add("modal-show");
//});
//
//mapClose.addEventListener("click", function (event) {
//  event.preventDefault();
//  mapPopup.classList.remove("modal-show");
//});
//
//window.addEventListener("keydown", function (event) {
//  event.preventDefault();
//  if (event.keyCode === 27) {
//    if (mapPopup.classList.contains("modal-show")) {
//      mapPopup.classList.remove("modal-show");
//    }
//  }
//});
