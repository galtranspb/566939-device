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

//************************************окно карты*****************************************************

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {  
  if (event.keyCode === 27) {
    event.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

//**************************карта через гугл апи***********************

function initMap() {
  var element = document.querySelector(".map");
  var options = {
    zoom: 16,
    center: {
      lat: 55.687295,
      lng: 37.530025
    }
  };

  var myMap = new google.maps.Map(element, options);

  var markers = [{
    coordinates: {
      lat: 55.687295,
      lng: 37.530025
    },
    image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    info: "<h3>Улица Строителей 15</h3>"
  }]

  for(var i = 0; i < markers.length; i++)
    {
        addMarker(markers[i]);
    }

  function addMarker(properties) {
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap
    });

    if (properties.image) {
      marker.setIcon(properties.image);
    }
    if (properties.info) {
      var InfoWindow = new google.maps.InfoWindow({
        content: properties.info
      });
      marker.addListener("click", function () {
        InfoWindow.open(myMap, marker);
      });
    }
  }
}
