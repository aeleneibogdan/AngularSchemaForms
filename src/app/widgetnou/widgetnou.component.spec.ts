import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetnouComponent } from './widgetnou.component';

describe('WidgetnouComponent', () => {
  let component: WidgetnouComponent;
  let fixture: ComponentFixture<WidgetnouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetnouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetnouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
