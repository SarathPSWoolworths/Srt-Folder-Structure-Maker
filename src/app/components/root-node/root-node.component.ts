import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../node.model';
import { NodeActionService } from '../node-action.service';


@Component({
  selector: 'app-root-node',
  templateUrl: './root-node.component.html',
  styleUrls: ['./root-node.component.scss']
})
export class RootNodeComponent implements OnInit {

  constructor(private service: NodeActionService) { }
  public showMenu: boolean = false;
  public nodes: TreeNode[] = [];
  ngOnInit(): void {
  }
  /**
  * to create a root node folder
  * @returns void
  */
  public createRootNode = () => {
    this.nodes.push({
      id: this.service.getUniqueId(),
      type: 'folder',
      name: 'Root',
      nodes: []
    });
  }
}
