//variaveis

var login=document.querySelector("#login");
var password=document.querySelector("#password");
var logar=document.querySelector("#form_login")


function logando(e){
    e.preventDefault();
    if(login.value=="carlos" && password.value=="1234"){

        console.log("Voce esta denetro do sistema")

    } else{
        console.log("Nome ou senha errada")
        //apagando os dados de dentro do campo
        login.value="";
        password.value="";
    }
}
logar.addEventListener("submit",logando)