import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string = "miquel";
  public nameUpper:string = "MIQUEL";
  public fullName:string = "MiQuEl";
  public customDate: Date = new Date();
}
