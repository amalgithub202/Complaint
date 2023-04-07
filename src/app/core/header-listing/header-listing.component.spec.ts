import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListingComponent } from './header-listing.component';

describe('HeaderListingComponent', () => {
  let component: HeaderListingComponent;
  let fixture: ComponentFixture<HeaderListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
