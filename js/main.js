const myPhoto = document.getElementById("myPhoto");
document.getElementById("file").addEventListener("change", function (e) {
  var _URL = window.URL || window.webkitURL;
  myPhoto.src = URL.createObjectURL(event.target.files[0]);
  var file, img;
  if ((file = this.files[0])) {
    img = new Image();
    img.onload = function () {
      document.querySelector(".imgsize").style.display = "block";
      document.querySelector(".imgrow .sizew").innerHTML = this.width;
      document.querySelector(".imgcolumn .sizew").innerHTML = this.height;
    };
    img.onerror = function () {
      alert("not a valid file: " + file.type);
    };
    img.src = _URL.createObjectURL(file);
  }
});
