import { Prato } from "./Prato";
export class Pedido {
    itens: Prato [] = [];

    constructor(itens: Prato []){
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
