import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price:number = 0;
  public interval$?: Subscription;

  //Used if we need to be aware of property input changes.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('priceComponent - ngOnChanges called: ', changes);
  }

  //Destroy ngOnInit elements.
  ngOnDestroy(): void {
    console.log('priceComponent - ngOnDestry called:');
    this.interval$?.unsubscribe()
  }

  //First HTTP request/web sokets listeners/timers...
  ngOnInit(): void {
    console.log('priceComponent - ngOnInit called');
    this.interval$ = interval(1000).subscribe(value => console.log(`tick: ${value}`));

  }




}
