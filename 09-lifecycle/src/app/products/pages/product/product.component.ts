import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice:number = 10;

  //Used to inicialize properties; WE MUST NOT HANDLE REQUEST.
  constructor(){
    console.log('constructor called')
  }

  //First HTTP request/web sokets listeners/timers...
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  //Used if we need to be aware of property input changes.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  //When component detects changes. They are hardly ever used.
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  //When component detects changes. They are hardly ever used.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  //When component detects changes. They are hardly ever used.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  //When component detects changes. They are hardly ever used.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  //When component detects changes. They are hardly ever used.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  //Destroy ngOnInit elements.
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  public increasePrice(){
    this.currentPrice ++;
  }
}
