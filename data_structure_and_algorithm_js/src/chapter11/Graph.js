class Vertex {
  constructor (label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
  }
}
class Graph {
  constructor (v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];
    for (let i = 0; i < v; i ++) {
      this.adj[i] = [''];
      this.marked[i] = false; 
    }
  }
  addEdge (v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges ++;
  }
  dfs (v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
      console.log(`Visited vertex: ${v}`);
    }
    for (let i = 0; i < this.adj[v].length; i ++) {
      if (this.adj[v][i] !== '' && !this.marked[this.adj[v][i]]) {
        this.dfs(this.adj[v][i]);
      }
    }
  }
  bfs (s) {
    let queue = [];
    queue.push(s);
    while (queue.length) {
      let v = queue.shift();
      if (v !== undefined) {
        console.log(`Visited vertex: ${v}`);
      }
      for (let i = 0; i < this.adj[v].length; i ++) {
        let w = this.adj[v][i];
        if (w !== '' && !this.marked[w]) {
          this.marked[w] = true;
          this.edgeTo[w] = v;
          queue.push(w);
        }
        
      }
    }
  }
  topSort () {
    let stack = [];
    let visited = [];
    for (let i = 0; i < this.vertices; i ++) {
      visited[i] = false;
    }
    for (let i = 0; i < this.vertices; i ++) {
      if (visited[i] === false) {
        this.topSortHelper(i, visited, stack);
      }
    }
    for (let i = 0; i < stack.length; i ++) {
      if (stack[i] !== undefined && stack[i] !== false) {
        console.log(this.vertexList[stack[i]]);
      }
    }
  }
  topSortHelper (v, visited, stack) {
    visited[v] = true;
    for (let i = 0; i < this.adj[v].length; i ++) {
      let w = this.adj[v][i];
      if (w !== '' && !visited[w]) {
        this.topSortHelper(w, visited, stack);
      }
    }
    stack.push(v);
  }
  pathTo (v) {
    let source = 0;
    if (!this.hasPathTo(v)) {
      return [];
    }
    let path = [];
    for (let i = v; i !== source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(source);
    return path;
  }
  hasPathTo (v) {
    return this.marked[v];
  }
  // showGraph () {
  //   for (let i = 0; i < this.vertices; i ++) {
  //     let str = `${i} -> `;
  //     for (let j = 0; j < this.vertices; j ++) {
  //       if (this.adj[i][j] !== undefined) {
  //         str += `${this.adj[i][j]} `
  //       }
  //     }
  //     console.log(str);
  //   }
  // }
  showGraph () {
    let visited = [];
    for (let i = 0; i < this.vertices; i ++) {
      let str = `${this.vertexList[i]} -> `;
      visited.push(this.vertexList[i]);
      for (let j = 0; j < this.vertices; j ++) {
        if (this.adj[i][j] !== '') {
          if (visited.indexOf(this.vertexList[j]) < 0) {
            str += `${this.vertexList[j]} `;
          }
        }
      }
      console.log(str);
      visited.pop();
    }
  }
}

// g = new Graph(5);

// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// g.bfs(0);
// g.showGraph();
// // g.dfs(1);

// let paths = g.pathTo(4);
// let str = '';
// while (paths.length) {
//   if (paths.length > 1) {
//     str += `${paths.pop()} - `;
//   } else {
//     str += paths.pop();
//   }
// }
// console.log(str);




g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating Systems', 'Algorithms'];

g.showGraph();
g.topSort();