import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhappywithproviderComponent } from './unhappywithprovider.component';

describe('UnhappywithproviderComponent', () => {
  let component: UnhappywithproviderComponent;
  let fixture: ComponentFixture<UnhappywithproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnhappywithproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhappywithproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
