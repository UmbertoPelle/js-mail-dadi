//Per l'esercizio dei dadi creare un mini gioco in cui si lanciano due dadi, uno per il computer e uno per il giocatore e si determina chi ha vinto.
var btnDadi = document.getElementById('btnDadi');

btnDadi.addEventListener("click", function () {
  var risultato = document.getElementById("risultato");
  var dadoUtente = Math.floor(Math.random()*6)+ 1 ;
  var dadoBanco = Math.floor(Math.random()*6)+ 1 ;
  document.getElementById("dadoUtente").innerHTML = "Il tuo numero è il : " + dadoUtente;
  document.getElementById("dadoBanco").innerHTML = "Il numero del banco è il : " + dadoBanco;

  if (dadoBanco > dadoUtente) {
    risultato.innerHTML = "Ha vinto il banco!"
  } else if (dadoUtente > dadoBanco) {
    risultato.innerHTML = "Hai vinto, complimenti !"
  }else{
    risultato.innerHTML = "Pareggio!"
  }

});

//Per quello delle mail far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide.
//Dare all'utente un messaggio opportuno.
var btnEmail = document.getElementById('btnEmail');
var email = ["umberto@gmail.com", "mario@gmail.com", "ugo@gmail.com"];
var emailResult = document.getElementById('emailResult');

btnEmail.addEventListener("click",function () {
  var emailUtente = document.getElementById('mainEmail').value;

  for (var i = 0; i < email.length; i++) {
    if (emailUtente == email[i]) {
      emailResult.innerHTML = "la tua email è presente";
      i = email.length;
    } else {
      emailResult.innerHTML = "La tua email è assente";
    }
  }

});
