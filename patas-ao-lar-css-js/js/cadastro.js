function obterGrupoCampo(
    campo
) {

    return campo.closest(
        "p"
    );

}


function removerErro(
    campo
) {

    campo.classList.remove(
        "campo-erro"
    );


    const grupo =
        obterGrupoCampo(
            campo
        );


    if (!grupo) {

        return;

    }


    const mensagem =
        grupo.querySelector(
            `.mensagem-erro[data-campo="${campo.id}"]`
        );


    if (mensagem) {

        mensagem.remove();

    }

}


function mostrarErro(
    campo,
    mensagem
) {

    removerErro(
        campo
    );


    campo.classList.remove(
        "campo-sucesso"
    );


    campo.classList.add(
        "campo-erro"
    );


    const grupo =
        obterGrupoCampo(
            campo
        );


    if (!grupo) {

        return;

    }


    const aviso =
        document.createElement(
            "small"
        );


    aviso.className =
        "mensagem-erro";


    aviso.dataset.campo =
        campo.id;


    aviso.textContent =
        mensagem;


    grupo.appendChild(
        aviso
    );

}


function obterMensagemErro(
    campo
) {

    if (
        campo.validity.valueMissing
    ) {

        if (
            campo.type === "checkbox"
        ) {

            return "Você deve confirmar esta opção.";

        }


        return "Este campo é obrigatório.";

    }


    if (
        campo.validity.typeMismatch
    ) {

        if (
            campo.type === "email"
        ) {

            return "Digite um endereço de e-mail válido.";

        }


        return "Informe um valor em formato válido.";

    }


    if (
        campo.validity.patternMismatch
    ) {

        if (
            campo.id === "cpf"
        ) {

            return "Digite o CPF no formato 000.000.000-00.";

        }


        if (
            campo.id === "telefone"
        ) {

            return "Digite o telefone no formato (00) 00000-0000.";

        }


        if (
            campo.id === "cep"
        ) {

            return "Digite o CEP no formato 00000-000.";

        }


        return "O formato informado não é válido.";

    }


    if (
        campo.validity.tooShort
    ) {

        if (
            campo.id === "senha" ||
            campo.id === "confirmar-senha"
        ) {

            return "A senha deve possuir pelo menos 8 caracteres.";

        }


        if (
            campo.id === "usuario"
        ) {

            return "O usuário deve possuir pelo menos 4 caracteres.";

        }


        if (
            campo.id === "nome"
        ) {

            return "Informe pelo menos 3 caracteres.";

        }


        return "O conteúdo informado é muito curto.";

    }


    if (
        campo.validity.rangeUnderflow
    ) {

        return "A data informada está abaixo do limite permitido.";

    }


    if (
        campo.validity.rangeOverflow
    ) {

        return "A data não pode ser posterior à data atual.";

    }


    return "Verifique o valor informado.";

}


function validarSenhas() {

    const senha =
        document.getElementById(
            "senha"
        );


    const confirmar =
        document.getElementById(
            "confirmar-senha"
        );


    if (
        !senha ||
        !confirmar
    ) {

        return true;

    }


    if (
        confirmar.value !== "" &&
        senha.value !==
        confirmar.value
    ) {

        confirmar.setCustomValidity(
            "As senhas não são iguais."
        );


        return false;

    }


    confirmar.setCustomValidity(
        ""
    );


    return true;

}


function validarCampo(
    campo
) {

    removerErro(
        campo
    );


    campo.classList.remove(
        "campo-sucesso"
    );


    if (
        !campo.required &&
        campo.value === ""
    ) {

        return true;

    }


    if (
        campo.id ===
        "confirmar-senha"
    ) {

        validarSenhas();

    }


    if (
        !campo.checkValidity()
    ) {

        let mensagem =
            obterMensagemErro(
                campo
            );


        if (
            campo.id ===
                "confirmar-senha" &&
            campo.validity.customError
        ) {

            mensagem =
                "As senhas informadas não são iguais.";

        }


        mostrarErro(
            campo,
            mensagem
        );


        return false;

    }


    campo.classList.add(
        "campo-sucesso"
    );


    return true;

}


function mascaraCpf(
    campo
) {

    let valor =
        campo.value.replace(
            /\D/g,
            ""
        );


    valor =
        valor.slice(
            0,
            11
        );


    valor =
        valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


    valor =
        valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


    valor =
        valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );


    campo.value =
        valor;

}


function mascaraTelefone(
    campo
) {

    let valor =
        campo.value.replace(
            /\D/g,
            ""
        );


    valor =
        valor.slice(
            0,
            11
        );


    if (
        valor.length > 2
    ) {

        valor =
            "(" +
            valor.substring(
                0,
                2
            ) +
            ") " +
            valor.substring(2);

    }


    if (
        valor.length > 10
    ) {

        valor =
            valor.replace(
                /(\d{5})(\d{4})$/,
                "$1-$2"
            );

    }


    campo.value =
        valor;

}


function mascaraCep(
    campo
) {

    let valor =
        campo.value.replace(
            /\D/g,
            ""
        );


    valor =
        valor.slice(
            0,
            8
        );


    valor =
        valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );


    campo.value =
        valor;

}


function configurarDataNascimento() {

    const nascimento =
        document.getElementById(
            "nascimento"
        );


    if (!nascimento) {

        return;

    }


    const hoje =
        new Date();


    const ano =
        hoje.getFullYear();


    const mes =
        String(
            hoje.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const dia =
        String(
            hoje.getDate()
        ).padStart(
            2,
            "0"
        );


    nascimento.max =
        `${ano}-${mes}-${dia}`;


    nascimento.min =
        "1900-01-01";

}


export function inicializarCadastro() {

    /*
       Necessário para cadastro.html.
       Na SPA será executado novamente
       quando a rota aparecer.
    */

    configurarDataNascimento();


    document.addEventListener(
        "input",
        function (evento) {

            const campo =
                evento.target;


            if (
                !campo.matches(
                    "#form-cadastro input, #form-cadastro select"
                )
            ) {

                return;

            }


            if (
                campo.id === "cpf"
            ) {

                mascaraCpf(
                    campo
                );

            }


            if (
                campo.id === "telefone"
            ) {

                mascaraTelefone(
                    campo
                );

            }


            if (
                campo.id === "cep"
            ) {

                mascaraCep(
                    campo
                );

            }


            if (
                campo.id === "senha" ||
                campo.id === "confirmar-senha"
            ) {

                validarSenhas();


                const confirmar =
                    document.getElementById(
                        "confirmar-senha"
                    );


                if (
                    confirmar &&
                    confirmar.value !== ""
                ) {

                    validarCampo(
                        confirmar
                    );

                }

            }


            if (
                campo.value !== "" ||
                campo.classList.contains(
                    "campo-erro"
                )
            ) {

                validarCampo(
                    campo
                );

            }


            const formulario =
                document.getElementById(
                    "form-cadastro"
                );


            const alerta =
                document.getElementById(
                    "alerta-formulario"
                );


            if (
                formulario &&
                alerta &&
                formulario.checkValidity()
            ) {

                alerta.hidden =
                    true;

            }

        }
    );


    document.addEventListener(
        "change",
        function (evento) {

            const campo =
                evento.target;


            if (
                campo.matches(
                    "#form-cadastro input, #form-cadastro select"
                )
            ) {

                validarCampo(
                    campo
                );

            }

        }
    );


    document.addEventListener(
        "focusout",
        function (evento) {

            const campo =
                evento.target;


            if (
                campo.matches(
                    "#form-cadastro input, #form-cadastro select"
                )
            ) {

                validarCampo(
                    campo
                );

            }

        }
    );


    document.addEventListener(
        "submit",
        function (evento) {

            if (
                evento.target.id !==
                "form-cadastro"
            ) {

                return;

            }


            evento.preventDefault();


            const formulario =
                evento.target;


            const alerta =
                document.getElementById(
                    "alerta-formulario"
                );


            const toast =
                document.getElementById(
                    "toast-cadastro"
                );


            validarSenhas();


            const campos =
                formulario.querySelectorAll(
                    "input, select"
                );


            let formularioValido =
                true;


            campos.forEach(
                function (campo) {

                    if (
                        !validarCampo(
                            campo
                        )
                    ) {

                        formularioValido =
                            false;

                    }

                }
            );


            if (
                !formularioValido ||
                !formulario.checkValidity()
            ) {

                if (alerta) {

                    alerta.hidden =
                        false;

                }


                const primeiroErro =
                    formulario.querySelector(
                        ".campo-erro"
                    );


                if (primeiroErro) {

                    primeiroErro.focus();

                }


                return;

            }


            if (alerta) {

                alerta.hidden =
                    true;

            }


            if (toast) {

                toast.classList.add(
                    "toast-visivel"
                );


                setTimeout(
                    function () {

                        toast.classList.remove(
                            "toast-visivel"
                        );

                    },
                    3500
                );

            }


            formulario.reset();


            campos.forEach(
                function (campo) {

                    removerErro(
                        campo
                    );


                    campo.classList.remove(
                        "campo-sucesso",
                        "campo-erro"
                    );

                }
            );

        }
    );


    document.addEventListener(
        "reset",
        function (evento) {

            if (
                evento.target.id !==
                "form-cadastro"
            ) {

                return;

            }


            const formulario =
                evento.target;


            const alerta =
                document.getElementById(
                    "alerta-formulario"
                );


            formulario
                .querySelectorAll(
                    "input, select"
                )
                .forEach(
                    function (campo) {

                        removerErro(
                            campo
                        );


                        campo.classList.remove(
                            "campo-erro",
                            "campo-sucesso"
                        );

                    }
                );


            if (alerta) {

                alerta.hidden =
                    true;

            }

        }
    );


    document.addEventListener(
        "spa:rota-renderizada",
        function (evento) {

            if (
                evento.detail.rota ===
                "/cadastro"
            ) {

                configurarDataNascimento();

            }

        }
    );

}