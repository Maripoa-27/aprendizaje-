ganador = (resultado) => {
    var dado = Math.floor(Math.random() * 6) + 1;
    var numeroGanador = 6;
    console.log(dado);
    dado == numeroGanador ? resultado("Ganaste!") : resultado("Perdiste :(")
}

ganador((r) => console.log(r))