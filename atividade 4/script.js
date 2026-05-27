let vetor = [];
let vetorSemDuplicatas = [];

// Recebe 10 números
for (let i = 0; i < 10; i++) {
    vetor.push(parseInt(prompt("Digite o " + (i + 1) + "° número:")));
}

// Remove duplicados
for (let i = 0; i < vetor.length; i++) {

    if (!vetorSemDuplicatas.includes(vetor[i])) {
        vetorSemDuplicatas.push(vetor[i]);
    }
}

console.log("Vetor original:", vetor);
console.log("Vetor sem duplicatas:", vetorSemDuplicatas);

alert("Vetor original: " + vetor);
alert("Vetor sem duplicatas: " + vetorSemDuplicatas);