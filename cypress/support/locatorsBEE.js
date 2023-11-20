const locatorBEE = {
LOGIN: {
    USER: '#id-user-input',
    SENHA: '#id-password-input',
    BTN_LOGIN: '.login-buttons > .btn'
},
CAD_EMPRESA: {
    CODE_EMPRESA: 'input[placeholder="Informe o código da empresa (obrigatório)"]',
    RAZAO_SOCIAL: 'input[placeholder="Informe a razão social"]',
    NOME_EMPRESA: 'input[placeholder="Informe o nome da empresa (obrigatório)"]',
    CNPJ: 'input[placeholder="Informe o CNPJ (obrigatório)"]',
    INSCRI_ESTAD: 'input[placeholder="Informe a inscrição estadual (obrigatório)"]',
    CEP: 'input[placeholder="Informe o CEP (obrigatório)"]',
    RUA_ENDERECO: 'input[placeholder="Informe a rua"]',
    NUM_ENDERECO: 'input[placeholder="Informe o número"]',
    COMPLEMENTO: 'input[placeholder="Informe o complemento"]',
    BAIRRO: 'input[placeholder="Informe o bairro"]',
    CIDADE: 'input[placeholder="Informe a cidade"]',
    ESTADO: 'input[placeholder="Informe o estado"]',
    PAIS: 'input[placeholder="Informe o país"]',
    EMAIL: 'input[placeholder="Informe o e-mail"]',
    PHONE: 'input[placeholder="Informe o telefone"]',
    OBS: 'input[placeholder="Informe a observação"]',

    ABA_PARAMETROS: '//a[@class="nav-link"]/span[text()="Parâmetros"]',
    FRACIONADO_SIM: '//label[@for="fractionalQuantitytrue"]',
    FRACIONADO_NAO: '//label[@for="fractionalQuantityfalse"]',

    ABA_SEGURANCA: '//a[@class="nav-link"]/span[text()="Segurança"]',
    VAL_SENHA: '//input[@type="number" and @class="form-control m-b-5" and @value="30"]',
    BTN_CAD_EMPRESA: '//button[@class="btn btn-120 btn-primary p-5 m-5" and text()="Criar"]',
},
DELETE_EMPRESA: {
    BTN_ACOES: ':nth-child(2) > .rt-tr > [style="overflow: visible; align-self: center; flex: 100 0 auto; width: 100px; max-width: 100px;"] > [style="text-align: center;"] > .btn-group > .btn-xs',
    BTN_DELETE: ':nth-child(2) > .rt-tr > [style="overflow: visible; align-self: center; flex: 100 0 auto; width: 100px; max-width: 100px;"] > [style="text-align: center;"] > .btn-group > .dropdown-menu > :nth-child(4)',
    CAMPO_ALERTA: '//h2[contains(text(), "Você tem certeza?")]',
    BTN_CONFIRMA_DELETE: '.btn-danger'
},
CAD_FILIAL:{
    CODE_FILIAL: 'input[placeholder="Informe a filial (obrigatório)"]',
    NOME_FILIAL: 'input[placeholder="Informe o nome da filial (obrigatório)"]',
    SELECT_EMPRESA: 'div.css-5duvv3-control input',
    CNPJ: 'input[placeholder="Informe o CNPJ (obrigatório)"]',
    INSCRI_ESTAD: 'input[placeholder="Informe a inscrição estadual (obrigatório)"]',
    CEP: 'input[placeholder="Informe o CEP (obrigatório)"]',
    RUA_ENDERECO: 'input[placeholder="Informe a rua"]',
    NUM_ENDERECO: 'input[placeholder="Informe o número"]',
    COMPLEMENTO: 'input[placeholder="Informe o complemento"]',
    BAIRRO: 'input[placeholder="Informe o bairro"]',
    CIDADE: 'input[placeholder="Informe a cidade"]',
    ESTADO: 'input[placeholder="Informe o estado"]',
    PAIS: 'input[placeholder="Informe o país"]',
    EMAIL: 'input[placeholder="Informe o e-mail"]',
    PHONE: 'input[placeholder="Informe o telefone"]',
    OBS: 'input[placeholder="Informe a observação"]',

    ABA_GERAIS: ':nth-child(2) > .nav-link > .d-sm-block',

    ABA_RECEBIMENTO: ':nth-child(3) > .nav-link',

    ABA_SEPARACAO: ':nth-child(4) > .nav-link',
    CHECK_CORTE_CABO: '#customCheckusesCableCuttingPlan',

    ABA_DEPOSITOS: ':nth-child(5) > .nav-link',

},
MESSAGE: '.notification-message',
BTN_ADD: '.ml-auto > .btn',
}

export default locatorBEE;