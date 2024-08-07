export class Produto {
    id: number = 0;
    nome: string = '';
    preco: number = 0;
    desconto: number = 0;
    foto: string = '';

    constructor(id: number, nome: string, preco: number,desconto: number, foto: string) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.foto = foto;
    }
}	