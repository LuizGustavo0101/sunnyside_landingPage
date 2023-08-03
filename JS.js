function responsividade(){
    const larguraTela = window.screen.width;

    if(larguraTela > 425){
        document.querySelector("#imagemHeader").src = "./images/desktop/image-header.jpg";
    } else{
        document.querySelector("#imagemHeader").src = "./images/mobile/image-header.jpg";
    }
}

window.onresize = responsividade;