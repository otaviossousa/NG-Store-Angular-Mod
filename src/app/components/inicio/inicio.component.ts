import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{

  public produtos: Produto[] = [];

  constructor(private _produtoService:ProdutoService){}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto =>{
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.nome,
              item.pasta,
              item.preco,
              item.desconto,
              item.foto
            );
          }
        )
      }
    )
  }
}