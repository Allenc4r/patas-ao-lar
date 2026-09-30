export function configurarDatas() {

    if (
        window.dayjs
    ) {

        window.dayjs.locale(
            "pt-br"
        );

    }

}


export function obterMomentoAtual() {

    if (
        window.dayjs
    ) {

        const agora =
            window.dayjs();


        return {

            registradoEm:
                agora.toISOString(),

            data:
                agora.format(
                    "DD/MM/YYYY"
                ),

            hora:
                agora.format(
                    "HH:mm"
                )

        };

    }


    const agora =
        new Date();


    return {

        registradoEm:
            agora.toISOString(),

        data:
            agora.toLocaleDateString(
                "pt-BR"
            ),

        hora:
            agora.toLocaleTimeString(
                "pt-BR",
                {
                    hour:
                        "2-digit",

                    minute:
                        "2-digit"
                }
            )

    };

}


export function formatarMomento(
    interesse
) {

    if (
        interesse.registradoEm &&
        window.dayjs
    ) {

        const momento =
            window.dayjs(
                interesse.registradoEm
            );


        if (
            momento.isValid()
        ) {

            return {

                data:
                    momento.format(
                        "DD/MM/YYYY"
                    ),

                hora:
                    momento.format(
                        "HH:mm"
                    )

            };

        }

    }


    return {

        data:
            interesse.data ||
            "Data não disponível",

        hora:
            interesse.hora ||
            ""

    };

}