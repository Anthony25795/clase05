const contador = () =>{
    const fechaDeseada = new Date('January 1, 2022 00:00:00').getTime();
    const fechaHoy = new Date().getTime();
    const diferencia = fechaDeseada - fechaHoy;
    console.log(diferencia);
    
    //Cálculos
    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60
    const dias = horas * 24;

    //Resultados
    //const diastexto = document.querySelector('.dias');
    //diastexto.innerHTML = Math.floor(diferencia/dias);
    //console.log(Math.floor(diferencia/dias)); //Math.floor funciona para redondear hacia abajo
    document.querySelector('#dias').innerText = Math.floor(diferencia/dias);
    document.querySelector('#horas').innerText = Math.floor(diferencia % dias / horas);
    document.querySelector('#minutos').innerText = Math.floor(diferencia % horas / minutos); //% --> esto es para sacar el residuo de la división 
    document.querySelector('#segundos').innerText = Math.floor(diferencia % minutos / segundos);
}
setInterval(contador, 1000); //refresca la función cada segundo