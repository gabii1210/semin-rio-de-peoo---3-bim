export class Mesa {
    private numero:number
    private disponibilidade: boolean=true;

    constuctor(disponibilidade:boolean) {
        this.disponibilidade = disponibilidade;
    }
}