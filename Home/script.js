var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 8) {
    counter = 1;
  }
}, 3000);

function gotolink(link){
  console.log(link.value)
  location.href = link.value;
}


