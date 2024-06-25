import { Component, OnInit } from '@angular/core';
import { NodeHelperService } from '../../services/node-helper.service';
import { NodeModel } from '../../models/node.model';

@Component({
  selector: 'app-root-node',
  templateUrl: './root-node.component.html',
  styleUrls: ['./root-node.component.scss'],
})
export class RootNodeComponent implements OnInit {
  nodes: NodeModel[] = [];

  constructor(private helperService: NodeHelperService) {}

  ngOnInit(): void {}

  /**
   * to add root node
   * */
  addNode(): void {
    this.nodes.push({
      id: this.helperService.getUniqueId(),
      type: 'folder',
    });
  }

  /**
   * to filter out all the child nodes
   * @param event
   */
  removeChildNode(event: any): void {
    this.nodes = this.nodes.filter((node) => node.id !== event);
  }
}
