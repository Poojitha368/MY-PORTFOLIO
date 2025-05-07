var typed = new Typed(".multiple-text", {
  strings: [
    "FrontEnd Development ",
    "Backend Development",
    "Machine Learning",
    "Data Science",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Projects-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".AboutMe").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Skills-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function blood() {
  open("https://github.com/Poojitha368/BLOOD-AID");
}
function bloodlive() {
  open("https://blood-aid-vbll.onrender.com");
}
function crop() {
  open("https://github.com/Poojitha368/Crop-disease-recognition");
}
function croplive() {
  open("https://crop-disease-recognition-ky2zaryzwy5ysvgh2hajba.streamlit.app/");
}
function edugrader() {
  open("https://github.com/Poojitha368/Edugrader-gemini-api");
}
function edugraderlive() {
  open("https://github.com/Poojitha368/Edugrader-gemini-api");
}
function customer() {
  open("https://github.com/Poojitha368/customer-segmentation");
}
function customerlive() {
  open("https://customer-segmentation-yodpb5nv2jjfp39smyzmhf.streamlit.app/");
}
function loksabha() {
  open("https://github.com/Poojitha368/Loksabha_election_DataAnalysis");
}
function loksabhalive() {
  open("https://app.powerbi.com/view?r=eyJrIjoiNjBjOTY1NzctZDIyMS00Mjg1LTlkNDktODhhODg3YmY5ZjRmIiwidCI6ImFhZjQxMmNjLTEwY2EtNGRhNC1iZjE2LTYxMjJlNmZjNjQ4NiJ9&pageName=1ed3ff675d20c4bca1ee");
}

function resume() {
  // open(
  //   "https://drive.google.com/file/d/1llfXFyEGJ_GwRqmJCMiBXTC1a-Ec0YFv/view?usp=sharing"
  // );
  window.open('https://drive.google.com/file/d/1llfXFyEGJ_GwRqmJCMiBXTC1a-Ec0YFv/view?usp=sharing', '_blank');
}
