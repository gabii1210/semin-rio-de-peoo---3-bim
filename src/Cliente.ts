import { Garcom } from "./Garcom"
import { Mesa } from "./Mesa"
import { Pedido } from "./Pedido"

export class Cliente{
    private nome:string
    private telefone:string
    private pedido:Pedido
    private mesa:Mesa
    private garcom: Garcom

    constructor(){}

    fazer_pedido():void{

    }

    reservar_mesa():void{

    }

    chamar_garcom():void{
        
    }
}