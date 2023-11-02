//showed my guess at insert, not ready to think of recursive solution yet,
//need to study more on recursion. Looked at and documented code form solution
//in find, and the code makes sense. we do a first commmit and revisit


class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
  
     
    insert(val) { // don't understand solutions while(true), while
        // what is true? when I tried using it I got an infinite loop
        
        //my original thought process
        const node = new Node(val);
        console.log(node)

        if(this.root === null) {
            this.root = node
            return this;
        }
        console.log(this.root)

        if(val >= this.root){
            this.right = node
        } else if(val < this.root) {
            this.left = node
        }
        

        
    }
  
    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
  
    insertRecursively(val) {
        //need to understand recursion better before attempting or looking at
       
    }
  
    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */
  
    find(val) { // studying solution
        let current = this.root;
        let isFound =  false;

        //if val strictly equals our current root value, 
        //we found the value which is the root
        if(val === current.val) return current;

        //why current? if value is not found
        while(current && !isFound) { //i think we are traversing to look
           //if what we pass in is < the current root
           //move root to the left, we are looking left
            if(val < current.val){
                current = current.left
            } //if opposite look to right
            else if(val > current.val){
                current = current.right;
            } else {
                //otherwise we found what we were looking for!
                isFound = true;
            }
        }
        //if not found we return undefined
        if(!isFound) return undefined;
        return current;  //otherwise we return the val we found
    }
  
    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */
  
    findRecursively(val) {
  
    }
  
    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */
  
    dfsPreOrder() {
  
    }
  
    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */
  
    dfsInOrder() {
  
    }
  
    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */
  
    dfsPostOrder() {
  
    }
  
    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */
  
    bfs() {
  
    }
  
    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */
  
    remove(val) {
  
    }
  
    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */
  
    isBalanced() {
  
    }
  
    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */
  
    findSecondHighest() {
      
    }
  }

//   const tree = new BinarySearchTree('myRoot')
// //   const tree2 = new BinarySearchTree()
//   tree.insert('test')
// //   tree2.insert('newRoot')
//   console.log(tree)
// //   console.log(tree2)

const tree = new BinarySearchTree(10)
tree.insert(11)
tree.insert(8)

console.log(tree)

module.exports = BinarySearchTree;
