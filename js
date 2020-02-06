function enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

};

function cadastro() {
    alert("Cadastrado com sucesso!");
};

function editar() {
    var x;
    var r = confirm("TEM CERTEZA QUE DESEJA ALTERAR?");
    if (r == true) {
        x = "Cadastro Alterado!";
    }
    else {
        x = "Cadastro não Alterado";
    }
    document.getElementById("demo").innerHTML = x;
};


function excluir() {
    var x;
    var r = confirm("TEM CERTEZA QUE DESEJA EXCLUIR?");
    if (r == true) {
        x = "Cadastro Excluído!";
    }
    else {
        x = "Cadastro não excluído";
    }
    document.getElementById("demo").innerHTML = x;
}
