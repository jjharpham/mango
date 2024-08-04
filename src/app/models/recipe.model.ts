export class Recipe {
  public id: string;
  public name: string;
  public ingredients: Record<string, number> = {};
  public tags: string[] = [];

  public constructor(
    recipe: Partial<Recipe>,
  ) {
    this.id = recipe.id!
    this.name = recipe.name!
    this.ingredients = recipe.ingredients ?? {};
    this.tags = recipe.tags ?? [];
  }

  public get ingredientIds() {
    return Object.keys(this.ingredients);
  }
}