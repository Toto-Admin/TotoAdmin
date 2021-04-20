import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgDetailsComponent } from './knowledg-details.component';

describe('KnowledgDetailsComponent', () => {
  let component: KnowledgDetailsComponent;
  let fixture: ComponentFixture<KnowledgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
