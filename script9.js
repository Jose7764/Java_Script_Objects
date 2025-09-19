

let garfo ={
    produto:{
        nome: "garfo",
        preco: 15
    },
   
    quantidade: 10
}

let culer ={
    produto:{
        nome: "culer",
        preco: 4
    },
    quantidade: 6
}
let carrinhoDeCompras = [garfo];
carrinhoDeCompras.push(culer);

console.log(garfo.produto.nome);
console.log(culer.produto.preco);

