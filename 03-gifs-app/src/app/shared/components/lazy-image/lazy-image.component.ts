import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');

  }

}
