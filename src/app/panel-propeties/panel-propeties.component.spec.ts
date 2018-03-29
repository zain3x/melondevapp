import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPropetiesComponent } from './panel-propeties.component';

describe('PanelPropetiesComponent', () => {
  let component: PanelPropetiesComponent;
  let fixture: ComponentFixture<PanelPropetiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPropetiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPropetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
