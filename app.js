
// cathing necessary HTML elements (in this case video) by using id
let vid = document.getElementById("myVideo");
let carVideo = document.getElementById("carVideo");

let carPresentation = document.getElementById("carPresentation");

carPresentation.style.display = "none";
/// This  is perfectly matching first video ending and next is video statring
//  this is pefect code for this satisfied with this accurate trasition ...... :)
vid.addEventListener("ended", myHandler, false);
function myHandler(e) {
  carPresentation.style.display = "block";
  carVideo.style.display = "block";
  document.getElementById("Starting").style.display = "none";
  document.getElementById("StartingContent").style.display = "none";
  carVideo.play();
}

//  nearly perfect playing both videos one after other but not satisfied by this
// not matching exact finishing......look for good...    :)
// document.addEventListener("DOMContentLoaded", () => {
//   vid.onloadedmetadata = function () {
//     videoDurationIs = this.duration;
//     console.log("videoDurationIs(Inside)", videoDurationIs);

//     window.setTimeout(function () {
//       document.getElementById("Starting").style.display = "none";
//       document.getElementById("StartingContent").style.display = "none";
//       carVideo.play();
//     }, videoDurationIs * 1000);
//   };
// });

function skip() {
  carPresentation.style.display = "block";
  document.getElementById("Starting").style.display = "none";
  document.getElementById("StartingContent").style.display = "none";
  carVideo.play();
}

let btn = document.getElementById("skip");
btn.addEventListener("click", skip);

let header = document.getElementById("header");
let body = document.getElementsByTagName("body");


function fixedheader(){
  console.log("before");
  header.style.position = "fixed";
  console.log("after");
}


body.addEventListener("scroll", fixedheader);

