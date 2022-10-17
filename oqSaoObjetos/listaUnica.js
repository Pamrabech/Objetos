const cliente = [
    {
    nome: "Maria",
    idade: 28,
    cpf: "10808609489",
    email: "maria@hotmail.com",
    dependentes: [{
  
    nome: "Theo",
    idade: "1 ano",
    parentesco: "filho" },

  {
    nome: "Eloa",
    idade: "6 anos",
    parentesco: "filha" 
  }],
      },
      {
        nome: "Marisa",
        idade: 35,
        cpf: "08065498562",
        email: "marisa@hotmail.com",
        dependentes:[{
            nome: "Sofia",
            idade: "9 anos",
            parentesco: "filha",
        }]

      }
   ]

   const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]

   console.table(listaDependentes)

