import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NodeModel } from '../../models/node.model';
import { NodeHelperService } from '../../services/node-helper.service';
@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.scss'],
})
export class ChildNodeComponent implements OnInit {
  @Input('node') node!: NodeModel;
  @Output('removeEvent') removeEvent: EventEmitter<any> = new EventEmitter();
  constructor(private helperService: NodeHelperService) {}
  ngOnInit(): void {}
  addNode(): void {
    if (!this.node.children) {
      this.node.children = [];
    }
    this.node.children.push({
      id: this.helperService.getUniqueId(),
      type: 'unset',
    });
  }
  updateNodeType(type: 'unset' | 'folder' | 'file' | null): void {
    this.node.type = type;
  }
  updateNodeName(value: string): void {
    if (value && value.trim()) {
      this.node.name = value.trim();
    }
  }
  removeNode(): void {
    this.removeEvent.emit(this.node.id);
  }
  removeChildNode(event: any): void {
    if (!this.node.children) {
      this.node.children = [];
    }
    this.node.children = this.node.children.filter(
      (child) => child.id !== event
    );
  }
}
