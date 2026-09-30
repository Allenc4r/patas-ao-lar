export function inicializarMenu() {

    const botaoMenu =
        document.querySelector(
            ".menu-hamburguer"
        );


    const menuPrincipal =
        document.getElementById(
            "menu-principal"
        );


    const textoMenu =
        document.querySelector(
            ".menu-hamburguer .somente-leitor"
        );


    const botaoSubmenu =
        document.querySelector(
            ".submenu-toggle"
        );


    const itemSubmenu =
        document.querySelector(
            ".tem-submenu"
        );


    if (
        !botaoMenu ||
        !menuPrincipal ||
        !botaoSubmenu ||
        !itemSubmenu
    ) {

        return;

    }


    function fecharMenuMobile() {

        menuPrincipal.classList.remove(
            "menu-aberto"
        );


        botaoMenu.classList.remove(
            "ativo"
        );


        botaoMenu.setAttribute(
            "aria-expanded",
            "false"
        );


        itemSubmenu.classList.remove(
            "submenu-aberto"
        );


        botaoSubmenu.setAttribute(
            "aria-expanded",
            "false"
        );


        if (textoMenu) {

            textoMenu.textContent =
                "Abrir menu";

        }

    }


    botaoMenu.addEventListener(
        "click",
        function () {

            const aberto =
                botaoMenu.getAttribute(
                    "aria-expanded"
                ) === "true";


            botaoMenu.setAttribute(
                "aria-expanded",
                String(!aberto)
            );


            menuPrincipal.classList.toggle(
                "menu-aberto"
            );


            botaoMenu.classList.toggle(
                "ativo"
            );


            if (textoMenu) {

                textoMenu.textContent =
                    aberto
                        ? "Abrir menu"
                        : "Fechar menu";

            }

        }
    );


    botaoSubmenu.addEventListener(
        "click",
        function () {

            if (
                window.innerWidth >= 768
            ) {

                return;

            }


            const aberto =
                botaoSubmenu.getAttribute(
                    "aria-expanded"
                ) === "true";


            botaoSubmenu.setAttribute(
                "aria-expanded",
                String(!aberto)
            );


            itemSubmenu.classList.toggle(
                "submenu-aberto"
            );

        }
    );


    /*
       Fecha menu mobile ao clicar
       em qualquer link.
    */

    menuPrincipal.addEventListener(
        "click",
        function (evento) {

            if (
                evento.target.closest("a") &&
                window.innerWidth < 768
            ) {

                fecharMenuMobile();

            }

        }
    );


    document.addEventListener(
        "spa:rota-renderizada",
        function () {

            if (
                window.innerWidth < 768
            ) {

                fecharMenuMobile();

            }

        }
    );


    const desktop =
        window.matchMedia(
            "(min-width: 768px)"
        );


    desktop.addEventListener(
        "change",
        function (evento) {

            if (
                evento.matches
            ) {

                fecharMenuMobile();

            }

        }
    );

}