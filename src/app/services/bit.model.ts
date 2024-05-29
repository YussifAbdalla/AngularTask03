export interface IBit {
   id: string, 
   name: string, 
   taste: string, 
   ingredients: IIngredient[]
 }
 
export interface IIngredient {
    name: string, 
    quantity: string, 
    id: string
 }