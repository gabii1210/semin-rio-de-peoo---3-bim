export class Mesa {
    private id_Mesa: int;
    private numero: number;
    private disponibilidade: boolean = true;
    private pedidos: Pedido[] = [];

    constuctor(id_Mesa:int, numero: number, disponibilidade: boolean) {
        this.id_Mesa = int;
        this.numero = numero;
        this.disponibilidade = disponibilidade;
    }
     registrar_pedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
        console.log(`Pedido registrado para a mesa ${this.numero}.`);
    }
}
}
