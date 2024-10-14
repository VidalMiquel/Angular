import { Component } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})


export class DynamicPageComponent{

  public myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    favoriteGames: new FormArray([
      new FormControl('Metal Gear', Validators.required), // Correctly initialize with FormControl
      new FormControl('Death Stranding', Validators.required) // Add another control for a game (e.g., Death Stranding)
    ]),
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
  onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }


  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


  isValidFieldInArray( formArray: FormArray, index: number ) {
    return formArray.controls[index].errors
        && formArray.controls[index].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return "Este campo es requerido";
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`; // Use backticks for template literals
      }
    }
    return null;
  }

  onDeleteFavorite(index:number):void{
    this.favoriteGames.removeAt(index);
  }


}
