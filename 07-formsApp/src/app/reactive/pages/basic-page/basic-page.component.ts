import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'rtx5090',
  price: 2500,
  inStorage: 6
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {


  public myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    inStorage: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  isValidFiled(field: string): boolean | null {
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
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

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset({ price: 0, inStorage: 0 });
    console.log(this.myForm.value);
  }
}
