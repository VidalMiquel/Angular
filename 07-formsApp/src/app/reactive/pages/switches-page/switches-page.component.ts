import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {


  public myForm: FormGroup = new FormGroup({
    gender: new FormControl('M', Validators.required),
    wantNotifications: new FormControl(true, Validators.required),
    termsAndConditions: new FormControl(false, Validators.requiredTrue),
  });

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  ngOnInit(): void {
    this.myForm.reset( this.person )
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  //ngSubmit
  onSave() {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
  }


}
