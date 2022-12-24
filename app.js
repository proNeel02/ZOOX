document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
      document.getElementById("Starting").style.display = "none";
      document.getElementById("StartingContent").style.display = "none";
    }, 7000);
  });


  
  function skip() {
    document.getElementById("Starting").style.display = "none";
    document.getElementById("StartingContent").style.display = "none";
  }

  document.getElementById("skip").addEventListener("click", skip);


