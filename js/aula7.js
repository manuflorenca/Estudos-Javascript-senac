const bodyTable = document.querySelector(".bodyTable");
const formulario = document.querySelector("#formulario");


const listaElementos=[]
 for (var i=0;i<formulario.lenght;i++){
    listaElementos.push(
        {name:formulario[i].name,
        tag:formulario[i]
        }
    )
 }

 console.log(listaElementos)

const pessoas = [{
    id:1,
    nome:"Carlos",
    sobrenome:"Silva",
    cargo:"Programador"

},
{
    id:2,
    nome:"Maria",
    sobrenome:"Rocha",
    cargo:"Front-end"

},
{
    id:3,
    nome:"Tereza",
    sobrenome:"Silva",
    cargo:"Suporte de TI"

}
]

pessoas.map((pessoa)=>{
    bodyTable.innerHTML+= `<tr>
<th scope="row">${pessoa.id}</th>
<td>${pessoa.nome}</td>
<td>${pessoa.sobrenome}</td>
<td>${pessoa.cargo}</td>
</tr>`
})


 