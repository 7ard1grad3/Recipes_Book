import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  constructor(private _activated_route: ActivatedRoute) { }

  ngOnInit() {
    this._activated_route.params.subscribe(
      (_params: Params) => {
        this.id = +_params['id'];
        this.editMode = _params['id'] != null;
        console.log(this.editMode);
      }
    );
  }

}
