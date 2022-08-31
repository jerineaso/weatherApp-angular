import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAppDataComponent } from './weather-app-data.component';

describe('WeatherAppDataComponent', () => {
  let component: WeatherAppDataComponent;
  let fixture: ComponentFixture<WeatherAppDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAppDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAppDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
