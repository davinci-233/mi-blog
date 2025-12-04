// ===========================
// FUNCIONES PRINCIPALES
// ===========================

// Marcar el enlace activo en la navegación
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Suavizar scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===========================
// VISUALIZACIÓN DE GRAFOS
// ===========================

// Clase para dibujar grafos en canvas
class GraphVisualizer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.nodes = [];
        this.edges = [];
    }

    drawGraph(nodes, edges, nodeRadius = 20, nodeColor = '#2563eb', edgeColor = '#1f2937') {
        if (!this.canvas) return;

        // Limpiar canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Dibujar aristas
        edges.forEach(edge => {
            const from = nodes[edge.from];
            const to = nodes[edge.to];
            this.drawEdge(from, to, edgeColor, edge.weight);
        });

        // Dibujar nodos
        nodes.forEach((node, index) => {
            this.drawNode(node.x, node.y, nodeRadius, nodeColor, index);
        });
    }

    drawNode(x, y, radius, color, label) {
        // Dibujar círculo
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();

        // Dibujar borde
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Dibujar etiqueta
        this.ctx.fillStyle = '#fff';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(label, x, y);
    }

    drawEdge(from, to, color, weight = null) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(from.x, from.y);
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();

        // Si tiene peso, dibujarlo en el medio
        if (weight) {
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            this.ctx.fillStyle = '#f59e0b';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(weight, midX, midY - 10);
        }
    }

    highlightNode(index, highlightColor = '#10b981') {
        if (this.nodes[index]) {
            const node = this.nodes[index];
            this.ctx.fillStyle = highlightColor;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, 22, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
}

// ===========================
// ALGORITMO BFS
// ===========================

class BFSVisualizer {
    constructor(canvasId) {
        this.visualizer = new GraphVisualizer(canvasId);
        this.graph = null;
        this.visited = [];
        this.queue = [];
        this.animationId = null;
    }

    initializeBFS(adjacencyList, startNode) {
        this.graph = adjacencyList;
        this.visited = Array(Object.keys(adjacencyList).length).fill(false);
        this.queue = [startNode];
        this.visited[startNode] = true;
    }

    async runBFS(adjacencyList, startNode, nodes, edges) {
        this.initializeBFS(adjacencyList, startNode);
        const visitOrder = [];

        while (this.queue.length > 0) {
            const node = this.queue.shift();
            visitOrder.push(node);

            // Redibujar grafo destacando nodo visitado
            this.visualizer.drawGraph(nodes, edges);
            this.visualizer.ctx.fillStyle = '#10b981';
            this.visualizer.ctx.beginPath();
            this.visualizer.ctx.arc(nodes[node].x, nodes[node].y, 22, 0, 2 * Math.PI);
            this.visualizer.ctx.fill();

            await this.sleep(800);

            // Explorar vecinos
            if (adjacencyList[node]) {
                for (let neighbor of adjacencyList[node]) {
                    if (!this.visited[neighbor]) {
                        this.visited[neighbor] = true;
                        this.queue.push(neighbor);
                    }
                }
            }
        }

        return visitOrder;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ===========================
// ALGORITMO DFS
// ===========================

class DFSVisualizer {
    constructor(canvasId) {
        this.visualizer = new GraphVisualizer(canvasId);
        this.graph = null;
        this.visited = [];
    }

    async runDFS(adjacencyList, startNode, nodes, edges) {
        this.graph = adjacencyList;
        this.visited = Array(Object.keys(adjacencyList).length).fill(false);
        const visitOrder = [];

        await this.dfsRecursive(startNode, adjacencyList, visitOrder, nodes, edges);

        return visitOrder;
    }

    async dfsRecursive(node, adjacencyList, visitOrder, nodes, edges) {
        this.visited[node] = true;
        visitOrder.push(node);

        // Redibujar grafo destacando nodo visitado
        this.visualizer.drawGraph(nodes, edges);
        this.visualizer.ctx.fillStyle = '#f59e0b';
        this.visualizer.ctx.beginPath();
        this.visualizer.ctx.arc(nodes[node].x, nodes[node].y, 22, 0, 2 * Math.PI);
        this.visualizer.ctx.fill();

        await this.sleep(800);

        // Explorar vecinos
        if (adjacencyList[node]) {
            for (let neighbor of adjacencyList[node]) {
                if (!this.visited[neighbor]) {
                    await this.dfsRecursive(neighbor, adjacencyList, visitOrder, nodes, edges);
                }
            }
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ===========================
// EXPORTAR PARA USO EN POSTS
// ===========================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GraphVisualizer, BFSVisualizer, DFSVisualizer };
}
