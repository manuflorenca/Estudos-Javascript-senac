
for(var i=0;i<10;i++){
    console.log(`Estou no loop ${i}`)

}


// var cont=1
// while (cont<10){
//     console.log(cont)
//     cont ++;
// }

// do{
//     console.log(cont)
//     cont++;
    
// }

escola = dict()

estudante = [{
    "nome":"Carlos",
    "nota":[10,9,6,10]
},

{
    "nome":"Pedro",
    "nota":[3,4,1,2]
},
{
    "nome":"Manuela",
    "nota":[10,5,3,8]
},
{
    "nome":"Felipi",
    "nota":[0,0,3,2]
}]

for dicionario in estudante:
    print("Nome do estudante: ")
    print(dicionario["nome"])
    print("Média: ")
    print(sum(dicionario["nota"])/(len(dicionario["nota"])))
    print("-" * 50)
