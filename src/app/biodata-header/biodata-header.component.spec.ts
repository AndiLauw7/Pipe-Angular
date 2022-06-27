// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataHeaderComponent } from './biodata-header.component';
import { from } from 'rxjs';

describe('BiodataHeaderComponent', () => {
  let component: BiodataHeaderComponent;
  let fixture: ComponentFixture<BiodataHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiodataHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BiodataHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
