import { Ingredient } from './../../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  itemForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editingItemIndex: number;
  editedItem: Ingredient;
/*   @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; */

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.itemForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.min(0), Validators.required]),
    });
    this.subscription = this._shoppingListService.startedEditin.subscribe(
      (index: number) => {
        this.editingItemIndex = index;
        this.editMode = true;
        this.editedItem = this._shoppingListService.getIngredient(index);
        this.itemForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
    });
  }

  ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  onSubmit() {
   /*  const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this._shoppingListService.setIngredient(newIngredient);
  */
      const name = this.itemForm.get('name').value;
      const amount = +this.itemForm.get('amount').value; // This number have to be custed from string to number
      if (this.editMode) {
        this._shoppingListService.updateIngredient(this.editingItemIndex, new Ingredient(name, amount));
      }else {
        this._shoppingListService.setIngredient(new Ingredient(name, amount));
      }
      this.editMode = false;
      this.itemForm.reset();
  }

  onResetForm() {
    this.editMode = false;
    this.itemForm.reset();
  }

  onDelete() {
    this._shoppingListService.deleteIngredient(this.editingItemIndex);
    this.onResetForm();
  }

}
