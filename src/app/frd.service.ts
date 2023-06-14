//*********************************************/
//? FRD - Firebase Realtime Database;
//? connecting with rtdb to get/set recipes etc.
//*********************************************/

import { Injectable } from '@angular/core';
import { Database, set, ref, update, child, getDatabase, onValue, DataSnapshot, get } from '@angular/fire/database';
import { BreadComponentsService } from './services/bread-components.service';
import { RecipeIngredients } from './recipe-ingredients';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FrdService {

  constructor(private database: Database, private breadComponentService: BreadComponentsService) { }


  addRecipeToDatabase(title: string) {

    const dbRef = ref(getDatabase());
    const recipeID: string = this.generateRecipeID();

    //* check if recipe exists in rtdb
    get(child(dbRef, `recipes/${recipeID}`)).then((snapshot: DataSnapshot) => {

      //* ID duplicated
      if (snapshot.exists()) {
        console.warn(`Recipe ID (${snapshot.val().ID}) already exists, generating new one...`);
        this.addRecipeToDatabase(title);
        return;
      }

      //* ID is not duplicated
      console.log(`Creating new recipe (ID: #${recipeID})...`);
      set(ref(this.database, 'recipes/' + recipeID), {
        ID: recipeID,
        timestamp: this.getTimestamp(),
        title: title,
        recipe: this.breadComponentService.getRecipeIngredients(),
        weights: {
          ingredients: this.breadComponentService.getIngredientsWeights(),
          ferments: this.breadComponentService.getFermentsWeights(),
          mainDough: this.breadComponentService.getMainDoughWeights()
        }
      }).then(() => {
        //TODO: switch alert with popup
        alert('Created recipe #' + recipeID);
      });
      return;
    }).catch((error: Error) => {
      console.error(error);
    })
  }

  
  private getTimestamp(): number { 
    return Date.now();
  }
  

  counter = 0; //!
  private generateRecipeID(): string {
    
    //TODO: REMOVE
    //!REMEMBER! just for duplicates testing --
    this.counter++;
    if(this.counter % 3 == 0) return "ug3to0";
    //!----------------------------------------


    const firstIDPart: number = (Math.random() * 46656) | 0;
    const secondIDPart: number = (Math.random() * 46656) | 0;
    const generatedID: string = ("000" + firstIDPart.toString(36)).slice(-3) + ("000" + secondIDPart.toString(36)).slice(-3);
    return generatedID;
  }


  
  getRecipe(id: string): Observable<any> {

    const dbRef = ref(getDatabase());

    return new Observable(subscriber => {
      get(child(dbRef, `recipes/${id}`)).then((snapshot: DataSnapshot) => {
        if (snapshot.exists()) {
          const recipeFromRTDB: any = snapshot.val();
          subscriber.next(recipeFromRTDB);
          return
        }

      }).catch((error: Error) => {
        subscriber.error(error);
      })
    })
  }
}
