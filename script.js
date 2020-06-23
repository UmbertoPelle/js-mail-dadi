//Per l'esercizio dei dadi creare un mini gioco in cui si lanciano due dadi, uno per il computer e uno per il giocatore e si determina chi ha vinto.
var btn = document.getElementById('btnDadi');

btn.addEventListener("click", function () {
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
