resetval = document.querySelector('button');
resetval.addEventListener('click',resetvalue);

function resetvalue() {
  var lastnamevalue = document.getElementById('lastname').value = "";
  var firstname = document.getElementById('firstname').value = "";
  var city = document.getElementById('city').value = "";
}
