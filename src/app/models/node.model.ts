export interface TreeNode {
    id: number;
    name: string
    type: 'folder' | 'file'
    nodes: TreeNode[]
}