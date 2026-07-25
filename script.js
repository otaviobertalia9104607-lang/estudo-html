const estado ={

    mes: new Date().getMounth(),
    ano: new Date().getFullYear();
};

function proximoMes() {
   console.log("teste");
    if(estado.mes === 11){
        //caso especial: altera o estado.ano e 0 o estado.mes
        estado.mes = 0;
        estado.ano = estado.ano + 1;
    } else{
        //caso normal: o estado.ano permanece o mesmo e soma 1 no estado.mes
        estado.mes = estado.mes + 1;
       }
}
function mesAnterior(){
if(estado.mes === 0) {
        //caso especial: subtrai 1 do estado.ano e altera o estado.mes para 11
        estado.mes = 11;
        estado.ano = estado.ano - 1;
    } else{
        //caso normal: o estado.ano permanece o mesmo e subtraí 1 no estado.mes
        estado.mes = estado.mes - 1;
       }
}

cont somaMes = document.getElementById("somaMes");
const subtraiMes = document.getElementById("subtraiMes");

somaMes.addEventListener("click",proximoMes)
