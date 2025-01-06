import { Prato } from "./Prato";
export class Pedido {
    id_Pedido = int,
    itens: Prato [] = [];

    constructor(id_Pedido: int, itens: Prato []){
        this.id_Pedido = int;
        this.itens = itens;
    }

    calcular_conta():void{
        let total = 0 
        this.itens.forEach (prato => {
            total += prato.preco; 
        });
        return total;
    }
}
