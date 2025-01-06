import { Prato } from "./Prato";
export class Pedido {
    id_Pedido = int,
    quantidade= number;
    itens: Prato [] = [];

    constructor(id_Pedido: int, quantidade: number, itens: Prato []){
        this.id_Pedido = int;
        this.quantidade = number:
        this.itens = itens;
    }

    calcular_conta():void{
        let total = 0 
        this.itens.forEach (prato => {
            total += (prato.preco * pedido.quantidade); 
        });
        return total;
    }
}
