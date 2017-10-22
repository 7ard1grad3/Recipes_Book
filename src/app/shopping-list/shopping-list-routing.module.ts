import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth-guard.service';
const routes: Routes = [
    { path: 'shopping_list', component: ShoppingListComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {}
