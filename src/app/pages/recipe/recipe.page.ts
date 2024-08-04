import { Component, OnInit } from '@angular/core';
import { ModalController, SearchbarCustomEvent, ToastController } from '@ionic/angular';
import { Recipe } from '@models';
import { RecipeService } from '@services';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@Component({
  selector: 'mango-recipe',
  templateUrl: 'recipe.page.html',
})
export class RecipePage implements OnInit {

  public recipes$!: Observable<Recipe[]>;

  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  public constructor(
    private modalController: ModalController,
    private recipeService: RecipeService,
    private toastController: ToastController,
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

  public async openDetail(recipe: Recipe): Promise<void> {
    const modal = await this.modalController.create({
      component: RecipeDetailComponent,
      componentProps: { recipe },
    });

    modal.present();

    await modal.onWillDismiss();
  }

  public async add(recipe: Recipe, event: Event): Promise<void> {
    event.stopPropagation();

    const toast = await this.toastController.create({
      message: `Added ${recipe.name} to list`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  };
}
