import {
    inicializarMenu
} from "./menu.js";

import {
    inicializarProjetos
} from "./projetos.js";

import {
    inicializarCadastro
} from "./cadastro.js";

import {
    inicializarRouter
} from "./router.js";


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const pagina =
            document.body.dataset.page;


        /* Menu existe nas três páginas */

        inicializarMenu();


        /* =================================
           SPA PRINCIPAL
        ================================= */

        if (pagina === "spa") {

            inicializarProjetos();

            inicializarCadastro();

            inicializarRouter();

            return;

        }


        /* =================================
           PROJETOS.HTML
        ================================= */

        if (
            pagina === "projetos"
        ) {

            inicializarProjetos();

            return;

        }


        /* =================================
           CADASTRO.HTML
        ================================= */

        if (
            pagina === "cadastro"
        ) {

            inicializarCadastro();

        }

    }
);