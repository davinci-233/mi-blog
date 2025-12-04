# 📊 Blog Técnico: Estructura de Datos Grafos

Un blog interactivo dedicado a explicar los fundamentos y conceptos clave de la estructura de datos **Grafos**.

## 📋 Contenido

El blog incluye tres artículos principales que cubren los aspectos fundamentales de los grafos:

### Post 1: Introducción a los Grafos
- **Definición de Grafo**: ¿Qué es un grafo?
- **Conceptos Clave**: Nodos (Vértices), Aristas (Ejes), Pesos
- **Tipos de Grafos**: 
  - Grafos No Dirigidos
  - Grafos Dirigidos (Dígrafos)
  - Grafos Ponderados
  - Grafos Cíclicos vs Acíclicos
- **Aplicaciones Prácticas**: Redes sociales, mapas, sistemas de recomendación, etc.
- **Diagrama Visual**: SVG interactivo mostrando un grafo no dirigido con 5 nodos

### Post 2: Representación de Grafos
- **Lista de Adyacencia**:
  - Estructura y ventajas (O(V + E) espacio)
  - Desventajas (consulta de arista)
  - Implementación en JavaScript
  - Ejemplo visual
- **Matriz de Adyacencia**:
  - Estructura y ventajas (O(1) consulta)
  - Desventajas (O(V²) espacio)
  - Implementación en JavaScript
  - Tabla visual interactiva
- **Comparación Completa**: Tabla de comparación entre ambas representaciones
- **Recomendaciones**: Cuándo usar cada una

### Post 3: Algoritmos Fundamentales de Recorrido
- **Búsqueda en Amplitud (BFS)**:
  - Características y complejidad (O(V + E))
  - Algoritmo paso a paso
  - Implementación completa en JavaScript
  - Aplicaciones: camino más corto, distancia mínima
- **Búsqueda en Profundidad (DFS)**:
  - Características y complejidad (O(V + E))
  - Implementación recursiva e iterativa
  - Aplicaciones: detección de ciclos, topological sorting
- **Comparación BFS vs DFS**: Tabla comparativa
- **Simulador Interactivo**: Visualización en tiempo real de ambos algoritmos

## 🎨 Características Técnicas

- **HTML5 Semántico**: Estructura clara y accesible
- **CSS3 Responsivo**: Diseño adaptable a dispositivos móviles y de escritorio
- **JavaScript Vanilla**: Interactividad sin dependencias externas
- **SVG Graphics**: Diagramas vectoriales limpios y escalables
- **Canvas API**: Visualización interactiva de algoritmos

## 🗂️ Estructura del Proyecto

```
blog-grafos/
├── index.html          # Página de inicio del blog
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── main.js         # Scripts interactivos
├── posts/
│   ├── post1.html      # Introducción a Grafos
│   ├── post2.html      # Representación de Grafos
│   └── post3.html      # Algoritmos BFS y DFS
├── assets/             # Recursos (imágenes, etc.)
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git

```

## 🚀 Cómo Usar

1. **Clone o descargar el repositorio**:
   ```bash
   git clone https://github.com/davidvargas/blog-grafos.git
   cd blog-grafos
   ```

2. **Abrir en el navegador**:
   - Abra `index.html` directamente en su navegador web
   - O use un servidor local (recomendado):
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con Live Server en VS Code
   Instale la extensión Live Server y haga click derecho en index.html
   ```

3. **Navegar por los artículos**:
   - Desde la página de inicio, puede acceder a los tres artículos
   - Cada artículo tiene navegación al siguiente/anterior

## 📚 Temas Cubiertos

### Fundamentos
- ✅ Definición y conceptos básicos
- ✅ Nodos y aristas
- ✅ Tipos de grafos
- ✅ Aplicaciones reales

### Implementación
- ✅ Lista de Adyacencia
- ✅ Matriz de Adyacencia
- ✅ Comparación de eficiencia
- ✅ Código JavaScript funcional

### Algoritmos
- ✅ BFS (Breadth-First Search)
- ✅ DFS (Depth-First Search)
- ✅ Visualización interactiva
- ✅ Casos de uso

## 🎯 Casos de Uso en el Mundo Real

Los grafos son fundamentales en:
- **Redes Sociales**: Modelar conexiones entre usuarios
- **Sistemas GPS**: Encontrar rutas óptimas
- **Recomendaciones**: Sugerir productos basado en conexiones
- **Compiladores**: Analizar dependencias
- **Biología**: Modelar redes de proteínas
- **Logística**: Optimizar cadenas de suministro

## 🛠️ Tecnologías Usadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo y animaciones
- **JavaScript (ES6+)**: Interactividad y lógica
- **SVG**: Gráficos vectoriales
- **Canvas API**: Visualización de algoritmos
- **Git**: Control de versiones

## 📱 Responsividad

El blog está completamente optimizado para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 🖥️ Pantallas de escritorio (1200px+)

## 🎨 Diseño

- **Paleta de Colores**:
  - Azul primario: `#2563eb`
  - Azul oscuro: `#1e40af`
  - Naranja/Ámbar: `#f59e0b`
  - Verde (éxito): `#10b981`
  
- **Tipografía**: Segoe UI, sans-serif
- **Iconografía**: Emojis para facilidad visual

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**David Vargas**

- GitHub: [@davidvargas](https://github.com/davidvargas)
- Fecha de creación: 2025

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el blog:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o sugerencias, puedes contactar a través de GitHub.

---

## 🎓 Recursos Adicionales

Para profundizar más en grafos y algoritmos:
- [Introduction to Algorithms - MIT](https://mitpress.mit.edu/)
- [Graph Theory - Basic Concepts](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
- [Visualizing Algorithms](https://bost.ocks.org/mike/algorithms/)

---

**Última actualización**: Diciembre 2025

Disfruta aprendiendo sobre grafos! 📚
