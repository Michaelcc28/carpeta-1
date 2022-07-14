const SUUUUUUBtn = document.querySelector("#SUUUUUUBtn");

/*SUUUUUUBtn.style.background = "pink";*/

SUUUUUUBtn.addEventListener("click",function () {
    alert("Como se que a la primera pusiste que SUUUUUU ahora te lees lo que tengo que decir (MODO CAMILO) Se que nos conocimos hace muy poco y que no sabes cual es mi segundo nombre xd pero es Alejandro bueno en fin, pero en si quiero ser tu bebeito fiu fiu por que primero me caes del pvtas contigo puedo ser yo muismo y me aguantas mis pendejadas xd, segundo eres una motomami osea que no eres facil del conquistar y pues hasta hice un programa para ti jaja, tercero como dijo el Duki NO TENGAS MIEDO BABY ESTO RECIEN EMPIEZA lo que quiero decir con esa parte es que me des una oportunidad y veras como te dare todo el amor comprencion y ternura que nesecitas (no puse comas por que este programa detecta las comas algoritmos xd) bueno ya para terminar, pues te quiero mucho y besitos en las patas de pollo :3 ")

});

const NOOOOBtn = document.querySelector("#NOOOOBtn");

NOOOOBtn.addEventListener("mouseover", function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NOOOOBtn.style.setProperty("top",randomY+"%");
    NOOOOBtn.style.setProperty("left",randomX+"%");
    NOOOOBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);


})





