let operazioneRiuscita = document.getElementById("prova");
console.log(operazioneRiuscita);
if(operazioneRiuscita){
    setTimeout(rimuovi, 3000);
}
function confermaEliminazione(){
    confirm("Confermare l'eliminazione dell'elemento?");
}
function rimuovi(){
    operazioneRiuscita.remove();
}