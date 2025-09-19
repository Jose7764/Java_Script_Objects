let lanche ={
    nome: "X-Burger",
    preco: 15.00,
    ingredientes: ["pão","hambúrguer","queijo","alface"],
    vegano: false
}

console.log("o lanche "+ lanche.nome + " custa " + lanche.preco);

lanche.preco = 17.50;

console.log(lanche);