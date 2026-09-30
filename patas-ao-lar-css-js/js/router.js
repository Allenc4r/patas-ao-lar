import {
    paginas,
    titulos
} from "./views.js";

import {
    salvarUltimaRota,
    carregarUltimaRota
} from "./storage.js";


function obterRota() {

    const hash =
        window.location.hash;


    if (!hash) {

        return "/inicio";

    }


    return hash.replace(
        "#",
        ""
    );

}


function atualizarLinkAtivo(
    rota
) {

    const links =
        document.querySelectorAll(
            "a[data-link]"
        );


    links.forEach(
        function (link) {

            link.removeAttribute(
                "aria-current"
            );


            const destino =
                link.getAttribute(
                    "href"
                );


            if (
                destino ===
                "#" + rota
            ) {

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }

        }
    );

}


function renderizarRota() {

    const app =
        document.getElementById(
            "app"
        );


    if (!app) {

        return;

    }


    const rota =
        obterRota();


    if (!paginas[rota]) {

        app.innerHTML = `
            <section>

                <h2>
                    Página não encontrada
                </h2>

                <p>
                    A página solicitada não existe.
                </p>

                <a
                    href="#/inicio"
                    data-link
                >
                    Voltar ao início
                </a>

            </section>
        `;


        document.title =
            "Página não encontrada - Patas ao Lar";


        atualizarLinkAtivo(
            rota
        );


        return;

    }


    app.innerHTML =
        paginas[rota];


    document.title =
        titulos[rota] ||
        "Patas ao Lar";


    atualizarLinkAtivo(
        rota
    );


    salvarUltimaRota(
        rota
    );


    document.dispatchEvent(
        new CustomEvent(
            "spa:rota-renderizada",
            {
                detail: {
                    rota:
                        rota
                }
            }
        )
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function tratarCliqueNavegacao(
    evento
) {

    const link =
        evento.target.closest(
            "a[data-link]"
        );


    if (!link) {

        return;

    }


    evento.preventDefault();


    const destino =
        link.getAttribute(
            "href"
        );


    if (!destino) {

        return;

    }


    if (
        window.location.hash ===
        destino
    ) {

        renderizarRota();

        return;

    }


    window.location.hash =
        destino;

}


export function inicializarRouter() {

    document.addEventListener(
        "click",
        tratarCliqueNavegacao
    );


    window.addEventListener(
        "hashchange",
        renderizarRota
    );


    if (
        !window.location.hash
    ) {

        const ultimaRota =
            carregarUltimaRota();


        if (
            ultimaRota &&
            paginas[ultimaRota]
        ) {

            history.replaceState(
                null,
                "",
                "#" + ultimaRota
            );

        } else {

            history.replaceState(
                null,
                "",
                "#/inicio"
            );

        }

    }


    renderizarRota();

}