import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, SearchbarCustomEvent, SearchbarInputEventDetail } from '@ionic/angular';
import { Recipe } from '@models';
import { RecipeService } from '@services';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'mango-recipe',
  templateUrl: 'recipe.page.html',
})
export class RecipePage implements OnInit {

  @ViewChild(IonModal) public modal!: IonModal;

  public recipes$!: Observable<Recipe[]>;

  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  public constructor(
    private recipeService: RecipeService,
  ) {}

  public ngOnInit(): void {
    this.recipes$ = combineLatest({
      recipes: this.recipeService.get$(),
      search: this.search$,
    }).pipe(
      map(({ recipes, search }) => recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(search))),
    );
  };

  public handleInput(event: SearchbarCustomEvent): void {
    this.search$.next(event.target.value?.toLocaleLowerCase() ?? '');
  }

  public close(): void {
    this.modal.dismiss();
  }
}
