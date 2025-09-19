function guerreiro (nome){
    this.nome = nome;
}

guerreiro.prototype.atacar = function(){
     console.log(`O guerreiro ${this.nome} atacou`);
}

let guerreiro1 = new guerreiro("Arthur");
let guerreiro2 = new guerreiro("Lancelot");

guerreiro1.atacar();
guerreiro2.atacar();