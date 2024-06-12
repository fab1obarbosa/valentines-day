

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Ana Helena" && password == "euamofabiobarbosa") {
        window.location = "photos.html";
        return false;
    }
    else {
        alerta();
        dica();
        return false;
    }
}

function alerta() {
    swal("Desculpa!", "Não posso deixar, você não parece ser Ana Helena")
}

function dica() {
    var help = document.querySelector(".help-text");
    help.style.color = "#fff";
}
