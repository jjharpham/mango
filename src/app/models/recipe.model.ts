export interface Recipe {
  id: string,
  name: string,
  ingredients: Record<string, number>,
  tags: string[],
}