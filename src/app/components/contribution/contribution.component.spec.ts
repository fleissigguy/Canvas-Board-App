import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionComponent } from './contribution.component';
import { FooterComponent } from '../footer/footer.component';

describe('ContributionComponent', () => {
  let component: ContributionComponent;
  let fixture: ComponentFixture<ContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionComponent, FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
