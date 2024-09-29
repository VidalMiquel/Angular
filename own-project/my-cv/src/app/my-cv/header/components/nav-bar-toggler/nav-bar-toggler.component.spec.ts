import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarTogglerComponent } from './nav-bar-toggler.component';

describe('NavBarTogglerComponent', () => {
  let component: NavBarTogglerComponent;
  let fixture: ComponentFixture<NavBarTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarTogglerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
