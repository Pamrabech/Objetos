const cliente = {
    nome: "João",
    idade: 28,
    cpf: "10808675489",
    email: "joão@hotmail.com",
    dependentes: [ 
  {
    nome: "Julia",
    idade: "3 anos",
    parentesco: "filha" },

  {
    nome: "Noah",
    idade: "6 anos",
    parentesco: "filho" }
    
  ], 

    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
}

let relatorio = ""; 

for (let info in cliente)
{
  if(typeof cliente[info] === "object" || typeof 
  cliente[info] === "function")
 

  {
    continue 
  }
    else{
      relatorio += ` 
      ${info} ===> ${cliente[info]}`
    }
}

console.log(relatorio)



