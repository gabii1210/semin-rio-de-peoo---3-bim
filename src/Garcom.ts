export class Garcom{
    private nome:string
    private disponibilidade:boolean=true
    private taxa:number

    constructor(nome: string, disponibilidade: boolean, taxa: number){ 
        this id_cliente= int
        this.nome = nome;
        this.disponibilidade = disponibilidade;
        this.taxa = taxa;
    }
    
    receber_pedido(pedido: Pedido, mesa: Mesa): void {
        console.log(`Garçom ${this.nome} recebeu o pedido para a mesa ${mesa.numero}.`);
    }
}
}
