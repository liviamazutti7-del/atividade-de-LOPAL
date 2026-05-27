let vetorAleatorio = [];

for (let i = 0; i < 7; i++) {
    vetorAleatorio.push(Math.floor(Math.random() * 100) + 1);
}

alert("Números gerados:" + vetorAleatorio);