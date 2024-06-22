import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootNodeComponent } from './root-node.component';

describe('RootNodeComponent', () => {
  let component: RootNodeComponent;
  let fixture: ComponentFixture<RootNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RootNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
