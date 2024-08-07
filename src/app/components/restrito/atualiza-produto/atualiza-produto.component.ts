import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/components/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit{

  public produtoId: number = 0;
  public produto: Produto = new Produto(0,"",0,0,"");

  constructor(private _produtoService:ProdutoService, private _router: Router,
    private _activatedRoute:ActivatedRoute){
      this._activatedRoute.params.subscribe(params => this.produtoId = params['id']);
    }

    ngOnInit(): void {
      this.listarProduto();
    }

    listarProduto():void{
      this._produtoService.getProduto(this.produtoId).subscribe(
        (res: any) => {
          this.produto = new Produto(
            res[0].id,
            res[0].nome,
            res[0].preco,
            res[0].desconto,
            res[0].foto
          );
        }
      )
    }

    atualizar(id: number){
      this._produtoService.atualizarProduto(id,this.produto).subscribe(
        produto => {this.produto = new Produto(0,"",0,0,"")},
        err => {alert("Erro ao atualizar")}
      );

      this._router.navigate(["restrito/lista"]);
    }
  
}
