function responsividade(){
    const larguraTela = window.screen.width;

    if(larguraTela > 425){
        document.querySelector("#imagemHeader").src = "./images/desktop/image-header.jpg";
        document.querySelector("#cerejaFoto").src = "./images/desktop/image-graphic-design.jpg";
        document.querySelector("#laranjaFoto").src = "./images/desktop/image-photography.jpg";
    } else{
        document.querySelector("#imagemHeader").src = "./images/mobile/image-header.jpg";
        document.querySelector("#cerejaFoto").src = "./images/mobile/image-graphic-design.jpg";
        document.querySelector("#laranjajaFoto").src = "./images/mobile/image-photography.jpg";
    }
}

window.onresize = responsividade;
window.onload = responsividade;