import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShoppingListPage } from './shopping-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListPage,
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ShoppingListPage]
})
export class ShoppingListModule {}
