var dmt = "%&%";
function enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

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
    limpaBanco()
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

var dmt = "%&%"

function salvarBanco(matricula, nome, email, cargo, dataAd) {

    matriculas = window.sessionStorage.getItem("mats");
    flag = false;
    //checa se matricula já está cadastrada
    //se estiver, avisa e nao cadastra
    if (matriculas != null) {
        MatriculasArray = matriculas.split(dmt);
        MatriculasArray.forEach(tmpMat => {
            if (tmpMat == matricula) {
                flag = true;
            }
        });
    }
    if (flag === true) {
        alert("Matricula ja cadastrada")

    } else {

        //Cria um token com as infos do funcionario
        Token = nome + dmt + email + dmt + cargo + dmt + dataAd

        //Salva os valores no session Storage usando a sua matricula como chave
        window.sessionStorage.setItem(matricula, Token);

        //Pega a lista de todas as matriculas
        matriculas = window.sessionStorage.getItem("mats");

        //Checa se existe alguma matricula ja cadastrada
        //Se não houver, crie utilizando a matricula atual
        if (matriculas === null) {
            window.sessionStorage.setItem("mats", matricula + dmt);
            matriculas = window.sessionStorage.getItem("mats");

            //Se a matricula já existe
        } else {
            matriculas = matriculas + dmt + matricula;
            window.sessionStorage.setItem("mats", matriculas);
        }

        alert("Cadastro realizado")
    }

}

function carregarBanco(matricula) {
    token = window.sessionStorage.getItem(matricula);

    if (token === null) {
        return null;
    } else {
        dados = token.split(dmt)
        return dados;

    }
}

function todasMatriculas() {

    matriculas = window.sessionStorage.getItem("mats");
    if (matriculas === null) {
        return matriculas
    }

    return matriculas.split(dmt)
}

function limpaBanco() {
    window.sessionStorage.clear()
}

function deletaBanco(matricula) {
    token = window.sessionStorage.getItem(matricula);

    if (token === null) {
        return null;

    } else {
        matriculas = window.sessionStorage.getItem("mats");
        matriculas = matriculas.split(dmt);

        flag = false;
        for (let i = 0; i < matriculas.length; i++) {
            if (i === matriculas[i]) {
                matriculas.splice(i, 1);
                flag = true;
                break;
            }
        }

        tokenMatriculas = "";
        for (let i = 0; i < matriculas.length; i++) {
            tokenMatriculas = tokenMatriculas + matriculas[i] + dmt;
        }

        window.sessionStorage.setItem("mats", tokenMatriculas)
        window.sessionStorage.removeItem(matricula)
        return flag;
    }


}
