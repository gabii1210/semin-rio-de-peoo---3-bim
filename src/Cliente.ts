import { Garcom } from "./Garcom"
import { Mesa } from "./Mesa"
import { Pedido } from "./Pedido"

export class Cliente{
    private nome:string
    private telefone:number
    private pedido:Pedido
    private mesa:Mesa
    private garcom: Garcom

    constructor(nome: string, telefone:number, pedido: Pedido, mesa: Mesa, garcom: Garcom){
        this.telefone = telefone;
        this.pedido = pedido;
        this.mesa = mesa;
        this.garcom = garcom;
    }

    fazer_pedido():void{

    }

    reservar_mesa():void{

    }

    chamar_garcom():void{
        
    }
}
