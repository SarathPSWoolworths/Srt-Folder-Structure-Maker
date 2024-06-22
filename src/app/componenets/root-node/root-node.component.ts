import { Component, OnInit } from '@angular/core';
import { NodeActionService } from '../../services/node-action.service';
import { TreeNode } from '../../models/node.model';

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

  /**
    * to check if it has child node(s)
    * @param node 
    * @returns  boolean
   */
  public hasChildNodes = (node: TreeNode): boolean => {
    return node?.nodes?.length > 0;
  }
  /**
   * to check if node created
   * @param nodes 
   * @returns  boolean
  */
  public isNodeAdded = (nodes: TreeNode[]): boolean => {
    return nodes?.length > 0;
  }
}
