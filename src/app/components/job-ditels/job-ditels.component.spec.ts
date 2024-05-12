import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDitelsComponent } from './job-ditels.component';

describe('JobDitelsComponent', () => {
  let component: JobDitelsComponent;
  let fixture: ComponentFixture<JobDitelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDitelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDitelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
