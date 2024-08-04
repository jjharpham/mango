export class Ingredient {
  public id: string;
  public name: string;
  public unit?: string;
  public pluralUnit?: string;

  public constructor(
    ingredient: Partial<Ingredient>,
  ) {
    this.id = ingredient.id!;
    this.name = ingredient.name!;
    this.unit = ingredient.unit;
    this.pluralUnit = ingredient.unit;
  }

  public getQuantityText(quantity: number): string {
    if (!this.unit) {
      return quantity.toString();
    }

    const suffix = this.pluralUnit && quantity > 1
      ? this.pluralUnit
      : this.unit;

    return `${quantity}${suffix}`;
  }
}