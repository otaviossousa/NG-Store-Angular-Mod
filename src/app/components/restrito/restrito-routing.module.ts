import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { RestritoComponent } from './restrito.component';
import { GuardGuard } from 'src/app/guard.guard';

const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard] },
            { path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard] },
            { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard] }
        ]
    },

    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule],
})
export class RestritoRoutingModule {
}
