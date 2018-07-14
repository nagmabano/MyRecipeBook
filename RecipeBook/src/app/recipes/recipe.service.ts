import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    //recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Fry','A super tasty chicken dish.',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=800&q=85',
        [
            (new Ingredient('Chicken',1)),
            (new Ingredient('sauce',1)),
        ]),
        new Recipe('Momos','Yum Momos for hungry Tummy',
        'http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg',
        [
            (new Ingredient('Maida', 1/2)),
            (new Ingredient('veggies',2))
        ]),
        
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}