class Pessoa{
    protected _nome: string;
    private _dataNascimento: Date;
    private _idade   : number;

    constructor(nome: string, dataNascimento: Date, idade: number){
        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._idade = idade;
    }


    get nome(){
        return this._nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    get idade(){
        return this._idade;
    }

    set idade(idade: number){
        this._idade = idade;
    }


  

    
}