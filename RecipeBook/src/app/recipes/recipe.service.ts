import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService{
    
    recipeChanged = new Subject<Recipe[]>();

    //recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Fry','A super tasty chicken dish.',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=800&q=85',
        [
            (new Ingredient('Chicken',1)),
            (new Ingredient('sauce',1)),
        ]),
        new Recipe('Momos','Yum Momos for hungry Tummy',
        'https://www.whatsuplife.in/noida/blog/wp-content/uploads/2017/02/Kalpak-Restaurant-Cafe-1.jpg',
        [
            (new Ingredient('Maida', 1/2)),
            (new Ingredient('veggies',2))
        ]),
        new Recipe('Mutton Curry','Mutton dipped in a creamy gravy',
        'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_mutton_Curry_recipe_edited1.JPG',
        [
            (new Ingredient('onion', 20)),
            (new Ingredient('ginger',3)),
            (new Ingredient('garlic',13))
        ])

        
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }

}