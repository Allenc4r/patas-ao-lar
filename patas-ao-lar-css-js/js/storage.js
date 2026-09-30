const CHAVE_INTERESSES =
    "interessesAdocao";

const CHAVE_ULTIMA_ROTA =
    "ultimaRota";


export function carregarInteresses() {

    try {

        const dados =
            localStorage.getItem(
                CHAVE_INTERESSES
            );


        if (!dados) {

            return [];

        }


        const resultado =
            JSON.parse(
                dados
            );


        if (
            !Array.isArray(
                resultado
            )
        ) {

            return [];

        }


        return resultado;

    } catch (erro) {

        console.warn(
            "Não foi possível recuperar os interesses.",
            erro
        );

        return [];

    }

}


export function salvarInteresses(
    interesses
) {

    try {

        localStorage.setItem(
            CHAVE_INTERESSES,
            JSON.stringify(
                interesses
            )
        );

    } catch (erro) {

        console.warn(
            "Não foi possível salvar os interesses.",
            erro
        );

    }

}


export function salvarUltimaRota(
    rota
) {

    try {

        localStorage.setItem(
            CHAVE_ULTIMA_ROTA,
            rota
        );

    } catch (erro) {

        console.warn(
            "Não foi possível salvar a última rota.",
            erro
        );

    }

}


export function carregarUltimaRota() {

    try {

        return localStorage.getItem(
            CHAVE_ULTIMA_ROTA
        );

    } catch (erro) {

        console.warn(
            "Não foi possível recuperar a última rota.",
            erro
        );

        return null;

    }

}