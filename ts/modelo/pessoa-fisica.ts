class PessoaFisica extends Pessoa {

    private _cpf: string;

    constructor(nome: string, dataNascimento: Date , idade: number, cpf: string) {
        super(nome, dataNascimento , idade);
        this._cpf = cpf;
        this._nome + "Física"

    }

    get cpf(): string {
        return this._cpf;
    }

    get nome() {
        return this._nome;
    }


}

