class PessoaJuridica extends Pessoa{
    private _cnpj: string;

    constructor(nome: string, dataNascimento:Date, idade: number, cnpj: string) {
        super(nome, dataNascimento, idade);
        this._cnpj = cnpj;
        this._nome + "Jurídica"
        

    }

    get cnpj(): string {
        return this._cnpj;
    }

    get nome() {
        return this._nome;
    }

}