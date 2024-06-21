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
  constructor(private service: NodeActionService) { }
  public showMenu: boolean = false;
  ngOnInit(): void {
  }
  /**
   * to add a node to the root
   * @param name of the node
   * @param type of the node
   * @returns void
  */
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
  /**
   * to remove all children node of the given node, which will remove all the nodes under it.
   * @param node 
   * @returns void
   */
  public removeChildNode = (node: TreeNode) => {
    this.node.nodes = this.node.nodes.filter((_node) => node.id == _node.id);
  }

  /**
   * to check if child node is a folder
   * @param node 
   * @returns boolean
  */
  public isFolder = (node: TreeNode): boolean => {
    return node.type == 'folder';
  }
  /**
     * to check if child node is a file
     * @param node 
     * @returns boolean
    */
  public isFile = (node: TreeNode): boolean => {
    return node.type == 'file';
  }
  /**
     * to check if it has child node(s)
     * @param node 
     * @returns  boolean
    */
  public hasChildNodes = (node: TreeNode): boolean => {
    return node?.nodes?.length > 0;
  }

}
