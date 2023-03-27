class PessoaFisica extends Pessoa {
    constructor(nome, dataNascimento, idade, cpf) {
        super(nome, dataNascimento, idade);
        this._cpf = cpf;
        this._nome + "Física";
    }
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome;
    }
}
