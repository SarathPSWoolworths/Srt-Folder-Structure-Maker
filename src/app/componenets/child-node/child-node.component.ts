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
  /**
   * to add a unset node to child
   */
  addUnsetNode(): void {
    if (!this.node.children) {
      this.node.children = [];
    }
    this.node.children.push({
      id: this.helperService.getUniqueId(),
      type: 'unset',
    });
  }
  /**
   * to update node type
   * @param type should be 'folder' or 'file'
   */
  updateNodeType(type: 'file' | 'folder'): void {
    this.node.type = type;
  }
  /**
   * to update the file/folder name
   * @param value should be string without white spaces
   */
  updateNodeName(value: string): void {
    value = value.trim();
    if (value) {
      this.node.name = value;
    }
  }
  /**
   * to callthe remove event of the parent node
   */
  removeNode(): void {
    this.removeEvent.emit(this.node.id);
  }
  /**
   * to filter out all the child nodes
   * @param event
   */
  removeChildNode(event: any): void {
    if (!this.node.children) {
      this.node.children = [];
    }
    this.node.children = this.node.children.filter(
      (child) => child.id !== event
    );
  }
}
