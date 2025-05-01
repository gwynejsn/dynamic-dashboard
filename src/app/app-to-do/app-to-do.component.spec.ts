import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToDoComponent } from './app-to-do.component';

describe('AppToDoComponent', () => {
  let component: AppToDoComponent;
  let fixture: ComponentFixture<AppToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppToDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
