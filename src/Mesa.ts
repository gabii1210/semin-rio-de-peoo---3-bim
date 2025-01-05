export class Mesa {
    private numero: number
    private disponibilidade: boolean = true;
    private pedidos: Pedido[] = [];

    constuctor(numero: number, disponibilidade: boolean) {
        this.numero = numero;
        this.disponibilidade = disponibilidade;
    }
     registrar_pedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
        console.log(`Pedido registrado para a mesa ${this.numero}.`);
    }
}
}
