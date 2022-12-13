//Admin Login
admin_u = "admin@icnf.com";
admin_p = "admin123";

//Login
function validar() {
    email = document.querySelector("#email").value;
    pass = document.querySelector("#password").value;

    registo_user = localStorage.email;
    registo_pass = localStorage.pass;


    if (email=="") {
        document.querySelector('#wrong').style.visibility = "visible";;
    }else{
        if (email==admin_u && pass==admin_p) {
            alert("Bem vindo admin!");
            window.location="PrincipalNovo.html";

        }else if (email==registo_user && pass==registo_pass) {
            alert("Bem vindo user!");
            window.location="PrincipalNovo.html";
        }else{
            document.querySelector('#wrong').style.visibility = "visible";
        }
    }
}

//Regista
function registred() {
    localStorage.email = document.querySelector("#email").value;
    localStorage.pass = document.querySelector("#pass").value;
    alert("Utilizador Registado");
    window.location="login.html";

}

//Consultas
function consulta() {
    alert("Enviada com sucesso!");
    window.location="PrincipalNovo.html";
}

//Dúvidas
function duvidas() {
    alert("Enviada com sucesso!");
    window.location="PrincipalNovo.html";
}



