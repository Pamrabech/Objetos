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

const propsClientes = Object.keys(cliente);

console.log(propsClientes);

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}
        `);
    }
}
     //         values vem o resultado dos valores
// console.log(Object.values(cliente))

     // tras o valor dentro das chaves
//console.log(Object.entries(cliente))
oferecerSeguro(cliente)