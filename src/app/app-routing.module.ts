import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'recipe',
    loadChildren: () => import('./pages/recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./pages/ingredient/ingredient.module').then(m => m.IngredientModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
