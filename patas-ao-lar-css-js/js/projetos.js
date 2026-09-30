import {
    carregarInteresses,
    salvarInteresses
} from "./storage.js";

import {
    configurarDatas,
    obterMomentoAtual,
    formatarMomento
} from "./datas.js";


const animais = [

    {
        nome: "Thor",
        especie: "Cachorro",
        idade: "2 anos",
        sexo: "Macho",

        descricao:
            "Thor é um cachorro muito brincalhão, carinhoso e gosta de companhia.",

        status:
            "Disponível para adoção",

        classeStatus:
            "badge-sucesso"
    },

    {
        nome: "Luna",
        especie: "Gato",
        idade: "1 ano",
        sexo: "Fêmea",

        descricao:
            "Luna é uma gata tranquila, carinhosa e muito curiosa.",

        status:
            "Disponível para adoção",

        classeStatus:
            "badge-sucesso"
    },

    {
        nome: "Bob",
        especie: "Cachorro",
        idade: "3 anos",
        sexo: "Macho",

        descricao:
            "Bob é um cachorro dócil que adora brincar e passear.",

        status:
            "Prioridade de adoção",

        classeStatus:
            "badge-aviso"
    }

];


function criarCardAnimal(
    animal
) {

    return `
        <article class="card-animal">

            <h3>
                ${animal.nome}
            </h3>

            <span
                class="badge ${animal.classeStatus}"
            >
                ${animal.status}
            </span>

            <p>
                <strong>Espécie:</strong>
                ${animal.especie}
            </p>

            <p>
                <strong>Idade:</strong>
                ${animal.idade}
            </p>

            <p>
                <strong>Sexo:</strong>
                ${animal.sexo}
            </p>

            <p class="descricao-animal">
                ${animal.descricao}
            </p>

            <button
                type="button"
                class="botao-adotar"
                data-animal="${animal.nome}"
            >
                Quero adotar
            </button>

        </article>
    `;

}


function renderizarAnimais() {

    const lista =
        document.getElementById(
            "lista-animais"
        );


    if (!lista) {

        return;

    }


    lista.innerHTML =
        animais
            .map(
                criarCardAnimal
            )
            .join("");

}


function registrarInteresse(
    nomeAnimal
) {

    const interesses =
        carregarInteresses();


    const momento =
        obterMomentoAtual();


    interesses.push({

        animal:
            nomeAnimal,

        registradoEm:
            momento.registradoEm,

        data:
            momento.data,

        hora:
            momento.hora

    });


    salvarInteresses(
        interesses
    );


    renderizarHistorico();

}


function criarItemHistorico(
    interesse
) {

    const momento =
        formatarMomento(
            interesse
        );


    const hora =
        momento.hora
            ? ` às ${momento.hora}`
            : "";


    return `
        <li class="item-interesse">

            <strong>
                ${interesse.animal}
            </strong>

            <span>
                Interesse registrado em
                ${momento.data}${hora}
            </span>

        </li>
    `;

}


function renderizarHistorico() {

    const lista =
        document.getElementById(
            "lista-interesses"
        );


    if (!lista) {

        return;

    }


    const interesses =
        carregarInteresses();


    if (
        interesses.length === 0
    ) {

        lista.innerHTML = `
            <li class="historico-vazio">
                Nenhum interesse registrado neste navegador.
            </li>
        `;

        return;

    }


    lista.innerHTML =
        interesses
            .slice()
            .reverse()
            .map(
                criarItemHistorico
            )
            .join("");

}


function mostrarToast(
    elemento
) {

    elemento.classList.add(
        "toast-visivel"
    );


    setTimeout(
        function () {

            elemento.classList.remove(
                "toast-visivel"
            );

        },
        3500
    );

}


export function inicializarProjetos() {

    configurarDatas();


    let animalSelecionado =
        "";


    /*
       Se estamos em projetos.html,
       os elementos já existem no HTML.
    */

    renderizarAnimais();

    renderizarHistorico();


    /*
       Se estamos na SPA, os elementos
       só existirão depois da rota
       /adocao ser renderizada.
    */

    document.addEventListener(
        "spa:rota-renderizada",
        function (evento) {

            if (
                evento.detail.rota ===
                "/adocao"
            ) {

                renderizarAnimais();

                renderizarHistorico();

            }

        }
    );


    document.addEventListener(
        "click",
        function (evento) {

            const botaoAdotar =
                evento.target.closest(
                    ".botao-adotar"
                );


            if (botaoAdotar) {

                animalSelecionado =
                    botaoAdotar.dataset.animal;


                const modal =
                    document.getElementById(
                        "modal-adocao"
                    );


                const mensagem =
                    document.getElementById(
                        "mensagem-modal"
                    );


                if (
                    modal &&
                    mensagem
                ) {

                    mensagem.textContent =
                        "Você deseja registrar interesse na adoção de " +
                        animalSelecionado +
                        "?";


                    modal.showModal();

                }


                return;

            }


            if (
                evento.target.id ===
                "fechar-modal"
            ) {

                const modal =
                    document.getElementById(
                        "modal-adocao"
                    );


                if (modal) {

                    modal.close();

                }


                return;

            }


            if (
                evento.target.id ===
                "confirmar-adocao"
            ) {

                if (
                    !animalSelecionado
                ) {

                    return;

                }


                const modal =
                    document.getElementById(
                        "modal-adocao"
                    );


                const toast =
                    document.getElementById(
                        "toast-adocao"
                    );


                registrarInteresse(
                    animalSelecionado
                );


                if (modal) {

                    modal.close();

                }


                if (toast) {

                    toast.textContent =
                        "Interesse na adoção de " +
                        animalSelecionado +
                        " registrado com sucesso!";


                    mostrarToast(
                        toast
                    );

                }


                animalSelecionado =
                    "";

            }

        }
    );

}