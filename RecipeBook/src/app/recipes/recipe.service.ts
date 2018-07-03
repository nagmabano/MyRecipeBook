import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A test Recipe','Test recipe description',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=800&q=85'),
        new Recipe('A test Recipe1','Test recipe description1',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F01%2Fmain%2F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%3Fitok%3DMcbboinY&w=800&q=85'),
        
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}