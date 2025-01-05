export class Prato {
    private quantidade:number
    private nome:string
    private preco:number

    constructor(quantidade: number, nome: string, preco: number){
        this.quantidade = quantidade;
        this.nome = nome; 
        this.preco= preco;
    }  
}
