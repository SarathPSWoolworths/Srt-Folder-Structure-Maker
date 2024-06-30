import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootNodeComponent } from './root-node.component';

describe('RootNodeComponent', () => {
  let component: RootNodeComponent;
  let fixture: ComponentFixture<RootNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RootNodeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(RootNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add node', () => {
    var l1 = component.nodes.length;
    component.addNode();
    var l2 = component.nodes.length;
    expect(l2).toBeGreaterThan(l1);
  });

  it('should remove node', () => {
    component.nodes = [];
    component.addNode();
    var id = component.nodes[0].id;
    var l1 = component.nodes.length;
    expect(component.removeNode(id));
    var l2 = component.nodes.length;
    expect(l2).toBeLessThan(l1);
  });
});
