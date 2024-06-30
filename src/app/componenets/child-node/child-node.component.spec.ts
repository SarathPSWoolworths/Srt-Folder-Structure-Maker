import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNodeComponent } from './child-node.component';

describe('ChildNodeComponent', () => {
  let component: ChildNodeComponent;
  let fixture: ComponentFixture<ChildNodeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildNodeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ChildNodeComponent);
    component = fixture.componentInstance;
    component.node = {
      id: 1234567,
      type: 'folder',
      name: 'test1',
      children: [],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add unset node', () => {
    component.node = {
      id: 1234567,
      type: 'folder',
      name: 'test1',
      children: undefined,
    };
    component.addUnsetNode();
    expect(component.node.children).toBeDefined();
    if (component.node.children) {
      expect(component.node.children[0].type).toEqual('unset');
    }
  });

  it('should update node type', () => {
    component.node = {
      id: 1234567,
      type: 'unset',
      name: 'test1',
      children: undefined,
    };
    component.updateNodeType('file');
    expect(component.node.type).toEqual('file');
  });

  it('should update node name', () => {
    component.node = {
      id: 1234567,
      type: 'file',
      name: undefined,
      children: undefined,
    };
    component.updateNodeName('test1');
    expect(component.node.name).toEqual('test1');
  });

  it('should call remove node emit', () => {
    spyOn(component.removeEvent, 'emit');
    component.removeThisNode();
    expect(component.removeEvent.emit).toHaveBeenCalledWith(
      jasmine.any(Number)
    );
  });

  it('should remove node of child', () => {
    component.node = {
      id: 456,
      type: 'folder',
      name: 'test1',
      children: [
        {
          id: 123,
          type: 'file',
          name: undefined,
          children: undefined,
        },
      ],
    };
    component.removeNodeEvent(123);
    expect(component.node.children?.length).toBe(0);
  });
});
