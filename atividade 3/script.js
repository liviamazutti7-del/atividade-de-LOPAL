let vetor = [];
let contador = 0;

// Recebe 10 números
for (let i = 0; i < 10; i++) {
    vetor.push(parseInt(prompt("Digite o " + (i + 1) + "° número inteiro:")));
}

// Número para procurar
let numeroProcurado = parseInt(prompt("Digite um número para verificar quantas vezes aparece:"));

// Conta quantas vezes aparece
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroProcurado) {
        contador++;
    }
}

alert("O número " + numeroProcurado + " aparece " + contador + " vez(es) no vetor.");

alert("Vetor:"+ vetor);