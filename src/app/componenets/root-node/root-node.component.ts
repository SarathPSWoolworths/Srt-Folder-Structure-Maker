import { Component, OnInit } from '@angular/core';
import { NodeHelperService } from '../../services/node-helper.service';
import { NodeModel } from '../../models/node.model';

@Component({
  selector: 'root-node',
  templateUrl: './root-node.component.html',
  styleUrls: ['./root-node.component.scss'],
})
export class RootNodeComponent implements OnInit {
  nodes: NodeModel[] = [];

  constructor(private helperService: NodeHelperService) {}

  ngOnInit(): void {}

  /**
   * to add folder to root node
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
  removeNode(event: any): void {
    if (this.nodes) {
      this.nodes = this.nodes.filter((node) => node.id !== event);
    }
  }
}
