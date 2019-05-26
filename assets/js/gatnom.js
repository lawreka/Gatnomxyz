$(document).ready(function(){

  document.getElementById("openmodal").addEventListener("click", openModal);

  document.getElementById("closemodal").addEventListener("click", closeModal);

  var i = 0;
  var txt = 'A magazine that writes itself.'; /* The text */
  var speed = 50;
  function typeWriter() {
  if (i < txt.length) {
    document.getElementById("subheader").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  }

  function clearText(){
    document.getElementById("subheader").innerHTML = "";
    i = 0;
  }

  function openModal(){
    console.log("open!");
    event.preventDefault();
    $("#modal").toggleClass("hidden");
    typeWriter();
  }

  function closeModal(){
    console.log("close!");
    event.preventDefault();
    $("#modal").toggleClass("hidden");
    clearText();
  }

});
