class PessoaJuridica extends Pessoa {
    constructor(nome, dataNascimento, idade, cnpj) {
        super(nome, dataNascimento, idade);
        this._cnpj = cnpj;
        this._nome + "Jurídica";
    }
    get cnpj() {
        return this._cnpj;
    }
    get nome() {
        return this._nome;
    }
}
