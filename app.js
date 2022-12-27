


var vid = document.getElementById("myVideo");
console.log("vid = ",vid);

// console.log(vid.duration);
let carVideo = document.getElementById("carVideo");


document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
      document.getElementById("Starting").style.display = "none";
      carVideo.play();
      document.getElementById("StartingContent").style.display = "none";     

    },8700);
  });


  
  function skip() {
    document.getElementById("Starting").style.display = "none";
    document.getElementById("StartingContent").style.display = "none";
  }

  document.getElementById("skip").addEventListener("click", skip);

