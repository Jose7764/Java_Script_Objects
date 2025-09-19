let dadosPessoais = {nome: "jose"};
let dadosProfissionais = {profissao: "TI"};

let funcionarioCompleto = {...dadosPessoais, ...dadosProfissionais};

console.log(funcionarioCompleto);