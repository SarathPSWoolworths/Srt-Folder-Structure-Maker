import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../node.model';
import { NodeActionService } from '../node-action.service';


@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.scss']
})
export class ChildNodeComponent implements OnInit {
  @Input('node') node!: TreeNode;
  @Input('showMenu') showMenu: boolean = false;
  constructor(private service: NodeActionService) { }
  ngOnInit(): void {
  }
  public addNode = (name: string, type: 'file' | 'folder') => {
    if (!name) {
      return;
    }
    this.node.nodes.push({
      id: this.service.getUniqueId(),
      type: type,
      name: name,
      nodes: []
    });
  }
  public removeChildNode = (node: TreeNode) => {
    this.node.nodes = this.node.nodes.filter((_node) => node.id == _node.id);
  }

}
