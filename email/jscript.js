//Per quello delle mail far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide.
//Dare all'utente un messaggio opportuno.
var btnEmail = document.getElementById('btnEmail');
var email = ["umberto@gmail.com", "mario@gmail.com", "ugo@gmail.com"];
var emailResult = document.getElementById('emailResult');

btnEmail.addEventListener("click",function () {
  var emailUtente = document.getElementById('mainEmail').value;
  var emailTrovata = false;

  for (var i = 0; i < email.length && emailTrovata == false; i++) {
    if (emailUtente == email[i]) {
      emailResult.innerHTML = "la tua email è presente";
      emailTrovata = true;
    } else {
      emailResult.innerHTML = "La tua email è assente";
    }
  }

});
