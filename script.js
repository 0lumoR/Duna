let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 15000);

function nextImage(){
    count++;
    if(count > 3){
        count = 1;
    }

    // Corrigindo a concatenação para formar o ID corretamente
    document.getElementById("radio" + count).checked = true;
}
