import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConParametrosComponent } from './componente-con-parametros.component';

describe('ComponenteConParametrosComponent', () => {
  let component: ComponenteConParametrosComponent;
  let fixture: ComponentFixture<ComponenteConParametrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteConParametrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteConParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
