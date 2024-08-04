import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recipe } from '@models';

@Component({
  selector: 'mango-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent {
  @Input() public recipe: Recipe = null!;

  public constructor(
    private modalController: ModalController,
  ) {}

  public close(): void {
    this.modalController.dismiss();
  }
}