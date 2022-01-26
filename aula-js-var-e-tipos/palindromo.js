function verificacao(string){
    if (!string) return "Valor incorreto";
    
    return string.split("").reverse().join("") === string;
}

console.log(verificacao("ama"));

