import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IngredientService } from '@services';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'mango-ingredient-list',
  templateUrl: 'ingredient-list.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class IngredientListComponent {

  @Input() public ingredients: Record<string, number> = {};

  public ingredients$: Observable<KeyValue<string, string>[]> = this.ingredientService.get$()
    .pipe(
      map(allIngredients => allIngredients
        .filter(x => Object.keys(this.ingredients).includes(x.id))
        .map(x => ({key: x.name, value: x.getQuantityText(this.ingredients[x.id])}))
      ),
    );

  public missing$: Observable<number> = this.ingredients$
    .pipe(
      map(x => Object.keys(this.ingredients).length - x.length),
    );

  public constructor(
    private ingredientService: IngredientService,
  ) {}
}