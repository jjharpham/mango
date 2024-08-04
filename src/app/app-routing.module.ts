import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientPage, RecipePage, ShoppingListPage } from '@pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'recipe',
    component: RecipePage,
  },
  {
    path: 'list',
    component: ShoppingListPage,
  },
  {
    path: 'ingredient',
    component: IngredientPage,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
