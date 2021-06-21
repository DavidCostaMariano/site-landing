let email = document.querySelector('#email')
let feedback = document.querySelector("#feeback")

function validaEmail()
{
let txtResposta = document.getElementById('emailresposta')
if(email.value.indexOf('@')== -1){
   txtResposta.innerHTML = 'insira um email';
   txtResposta.style.color="red";
}
else{
    txtResposta.innerHTML='email valido';
    txtResposta.style.color="green"
}
}
