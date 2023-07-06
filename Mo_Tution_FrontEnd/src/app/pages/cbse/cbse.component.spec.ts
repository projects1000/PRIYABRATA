import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbseComponent } from './cbse.component';

describe('HomeComponent', () => {
  let component: CbseComponent;
  let fixture: ComponentFixture<CbseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
