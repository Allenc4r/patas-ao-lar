export const paginas = {

    "/inicio": `
        <section id="inicio">

            <h2>
                Bem-vindo à Patas ao Lar
            </h2>

            <figure>

                <img
                    src="../imagens/caes-gatos-adocao.jpg.png"
                    alt="Cão e gato resgatados pela ONG Patas ao Lar aguardando adoção"
                >

                <figcaption>
                    Animais resgatados aguardando
                    uma nova família.
                </figcaption>

            </figure>

            <p>
                A Patas ao Lar é uma ONG dedicada ao
                resgate, cuidado e adoção responsável
                de cães e gatos em situação de abandono.
            </p>

            <p>
                Nosso objetivo é proporcionar uma nova
                oportunidade para animais que precisam
                de cuidado, proteção e uma família.
            </p>

        </section>
    `,


    "/quem-somos": `
        <section id="quem-somos">

            <h2>
                Quem Somos
            </h2>

            <p>
                Somos uma organização sem fins lucrativos
                formada por voluntários que trabalham
                no resgate e cuidado de cães e gatos
                abandonados.
            </p>

            <p>
                Os animais resgatados recebem alimentação,
                atendimento veterinário e abrigo temporário
                enquanto aguardam por uma adoção responsável.
            </p>

        </section>
    `,


    "/adocao": `
        <section id="adocao">

            <h2>
                Animais para Adoção
            </h2>

            <p>
                Conheça alguns dos nossos amigos que
                estão procurando um novo lar.
            </p>

            <div
                id="lista-animais"
                class="lista-animais"
                aria-live="polite"
            ></div>


            <section
                class="historico-adocoes"
                aria-labelledby="titulo-historico"
            >

                <h3 id="titulo-historico">
                    Histórico de interesses
                </h3>

                <p>
                    Os interesses registrados neste
                    navegador permanecem disponíveis
                    mesmo após fechar a página.
                </p>

                <ul
                    id="lista-interesses"
                    class="lista-interesses"
                ></ul>

            </section>


            <dialog
                id="modal-adocao"
                class="modal-feedback"
                aria-labelledby="titulo-modal"
            >

                <div class="conteudo-modal">

                    <h2 id="titulo-modal">
                        Interesse em adoção
                    </h2>

                    <p id="mensagem-modal">
                        Você deseja iniciar o processo
                        de adoção?
                    </p>

                    <div class="acoes-modal">

                        <button
                            type="button"
                            id="confirmar-adocao"
                        >
                            Confirmar interesse
                        </button>

                        <button
                            type="button"
                            id="fechar-modal"
                            class="botao-secundario"
                        >
                            Cancelar
                        </button>

                    </div>

                </div>

            </dialog>


            <div
                id="toast-adocao"
                class="toast toast-sucesso"
                role="status"
                aria-live="polite"
                aria-atomic="true"
            >
                Interesse registrado com sucesso!
            </div>

        </section>
    `,


    "/como-ajudar": `
        <section id="como-ajudar">

            <h2>
                Como Ajudar
            </h2>

            <p>
                Existem diferentes maneiras de contribuir
                com o trabalho realizado pela ONG
                Patas ao Lar.
            </p>


            <article>

                <h3>
                    Doações
                </h3>

                <span class="badge badge-info">
                    Apoie nossa causa
                </span>

                <p>
                    As doações são fundamentais para
                    garantir alimentação, medicamentos
                    e atendimento aos animais.
                </p>

                <ul>
                    <li>Doação de ração.</li>
                    <li>Doação de medicamentos.</li>
                    <li>Materiais de higiene.</li>
                    <li>Produtos para os animais.</li>
                    <li>Contribuições financeiras.</li>
                </ul>

            </article>


            <article>

                <h3>
                    Voluntariado
                </h3>

                <span class="badge badge-info">
                    Seja voluntário
                </span>

                <p>
                    Os voluntários possuem papel fundamental
                    no funcionamento da Patas ao Lar.
                </p>

                <ul>
                    <li>Auxiliar nos cuidados dos animais.</li>
                    <li>Participar de feiras de adoção.</li>
                    <li>Divulgar animais disponíveis.</li>
                    <li>Ajudar em campanhas.</li>
                    <li>Oferecer lar temporário.</li>
                </ul>

            </article>

        </section>
    `,


    "/contato": `
        <section id="contato">

            <h2>
                Entre em Contato
            </h2>

            <p>
                Entre em contato para saber mais
                sobre adoção, doações e voluntariado.
            </p>

            <address>

                <p>
                    <strong>E-mail:</strong>

                    <a href="mailto:contato@patasaolar.org">
                        contato@patasaolar.org
                    </a>
                </p>

                <p>
                    <strong>Telefone:</strong>

                    <a href="tel:+5583999999999">
                        (83) 99999-9999
                    </a>
                </p>

            </address>

        </section>
    `,


    "/cadastro": `
        <section id="cadastro">

            <h2>
                Cadastro de Usuário
            </h2>

            <p>
                Preencha seus dados para realizar
                seu cadastro na plataforma da
                ONG Patas ao Lar.
            </p>


            <div
                id="alerta-formulario"
                class="alerta alerta-erro"
                role="alert"
                hidden
            >
                Existem informações que precisam
                ser corrigidas no formulário.
            </div>


            <form
                id="form-cadastro"
                action="#"
                method="post"
                novalidate
            >

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>

                    <p>

                        <label for="nome">
                            Nome completo:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            autocomplete="name"
                            minlength="3"
                            maxlength="100"
                            required
                        >

                    </p>

                    <p>

                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            inputmode="numeric"
                            maxlength="14"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            required
                        >

                    </p>

                    <p>

                        <label for="nascimento">
                            Data de nascimento:
                        </label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            autocomplete="bday"
                            required
                        >

                    </p>

                </fieldset>


                <fieldset>

                    <legend>
                        Dados de contato
                    </legend>

                    <p>

                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            autocomplete="email"
                            required
                        >

                    </p>

                    <p>

                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            autocomplete="tel"
                            placeholder="(00) 00000-0000"
                            maxlength="15"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            required
                        >

                    </p>

                </fieldset>


                <fieldset>

                    <legend>
                        Endereço
                    </legend>

                    <p>

                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            autocomplete="postal-code"
                            placeholder="00000-000"
                            maxlength="9"
                            pattern="[0-9]{5}-[0-9]{3}"
                            required
                        >

                    </p>

                    <p>

                        <label for="endereco">
                            Endereço:
                        </label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            autocomplete="address-line1"
                            required
                        >

                    </p>

                    <p>

                        <label for="numero">
                            Número:
                        </label>

                        <input
                            type="text"
                            id="numero"
                            name="numero"
                            required
                        >

                    </p>

                    <p>

                        <label for="complemento">
                            Complemento:
                        </label>

                        <input
                            type="text"
                            id="complemento"
                            name="complemento"
                        >

                    </p>

                    <p>

                        <label for="bairro">
                            Bairro:
                        </label>

                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            required
                        >

                    </p>

                    <p>

                        <label for="cidade">
                            Cidade:
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            autocomplete="address-level2"
                            required
                        >

                    </p>

                    <p>

                        <label for="estado">
                            Estado:
                        </label>

                        <select
                            id="estado"
                            name="estado"
                            autocomplete="address-level1"
                            required
                        >

                            <option value="">
                                Selecione um estado
                            </option>

                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>

                        </select>

                    </p>

                </fieldset>


                <fieldset>

                    <legend>
                        Dados de acesso
                    </legend>

                    <p>

                        <label for="usuario">
                            Nome de usuário:
                        </label>

                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            autocomplete="username"
                            minlength="4"
                            required
                        >

                    </p>

                    <p>

                        <label for="senha">
                            Senha:
                        </label>

                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            autocomplete="new-password"
                            minlength="8"
                            required
                        >

                    </p>

                    <p>

                        <label for="confirmar-senha">
                            Confirmar senha:
                        </label>

                        <input
                            type="password"
                            id="confirmar-senha"
                            name="confirmar-senha"
                            autocomplete="new-password"
                            minlength="8"
                            required
                        >

                    </p>

                </fieldset>


                <fieldset>

                    <legend>
                        Confirmação do cadastro
                    </legend>

                    <p class="grupo-checkbox">

                        <input
                            type="checkbox"
                            id="termos"
                            name="termos"
                            required
                        >

                        <label for="termos">
                            Confirmo que os dados
                            informados estão corretos.
                        </label>

                    </p>

                </fieldset>


                <p class="acoes-formulario">

                    <button type="submit">
                        Realizar cadastro
                    </button>

                    <button type="reset">
                        Limpar formulário
                    </button>

                </p>

            </form>


            <div
                id="toast-cadastro"
                class="toast toast-sucesso"
                role="status"
                aria-live="polite"
            >
                Cadastro realizado com sucesso!
            </div>

        </section>
    `

};


export const titulos = {

    "/inicio":
        "Patas ao Lar",

    "/quem-somos":
        "Quem Somos - Patas ao Lar",

    "/adocao":
        "Adoção - Patas ao Lar",

    "/como-ajudar":
        "Como Ajudar - Patas ao Lar",

    "/contato":
        "Contato - Patas ao Lar",

    "/cadastro":
        "Cadastro - Patas ao Lar"

};