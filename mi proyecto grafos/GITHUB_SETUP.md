# 🚀 Instrucciones para Publicar en GitHub

Este archivo contiene las instrucciones para subir el blog técnico sobre Grafos a GitHub.

## Pasos para Crear el Repositorio en GitHub

### 1. Crear el Repositorio en GitHub

1. Ve a [https://github.com/new](https://github.com/new)
2. Llena los siguientes detalles:
   - **Repository name**: `blog-grafos`
   - **Description**: `Blog Técnico dedicado a la estructura de datos Grafos`
   - **Visibility**: Selecciona "Public" (para que sea accesible)
   - **Initialize repository**: NO marques ninguna opción (ya tenemos archivos locales)

3. Haz clic en "Create repository"

### 2. Conectar el Repositorio Local con GitHub

Después de crear el repositorio en GitHub, copiarás la URL HTTPS o SSH. Luego ejecuta:

```bash
# Opción 1: Usando HTTPS (más fácil, pero requiere token de acceso)
git remote add origin https://github.com/davidvargas/blog-grafos.git
git branch -M main
git push -u origin main

# Opción 2: Usando SSH (requiere configurar SSH keys)
git remote add origin git@github.com:davidvargas/blog-grafos.git
git branch -M main
git push -u origin main
```

**Nota**: Si el nombre del repositorio es diferente, reemplaza `blog-grafos` con el nombre correcto.

### 3. Crear Token de Acceso Personal (si usas HTTPS)

1. Ve a [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Haz clic en "Generate new token"
3. Selecciona los permisos: `repo`, `workflow`
4. Copia el token generado
5. Cuando git te pida contraseña, pega el token

## Estructura del Repositorio en GitHub

El repositorio contendrá:

```
blog-grafos/
├── index.html          # Página de inicio
├── css/
│   └── styles.css      # Estilos
├── js/
│   └── main.js         # Scripts
├── posts/
│   ├── post1.html
│   ├── post2.html
│   └── post3.html
├── assets/             # Carpeta para recursos
├── README.md           # Documentación
└── .gitignore          # Archivos ignorados
```

## Configurar GitHub Pages

Para hacer que el blog sea accesible en línea:

1. Ve a las **Settings** del repositorio
2. En la sección **Pages** (lateral izquierdo):
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona "main" (o "master")
   - **Folder**: Selecciona "/ (root)"
3. Haz clic en "Save"

El blog estará disponible en: `https://davidvargas.github.io/blog-grafos/`

## Comandos Git Útiles

```bash
# Ver el estado del repositorio
git status

# Ver el historial de commits
git log --oneline

# Agregar cambios y hacer commit
git add .
git commit -m "Descripción del cambio"

# Subir cambios a GitHub
git push origin main

# Descargar cambios de GitHub
git pull origin main

# Ver configuración remota
git remote -v
```

## Mantener el Blog Actualizado

Después de realizar cambios locales:

```bash
# 1. Agregar cambios
git add .

# 2. Crear commit
git commit -m "Descripción del cambio"

# 3. Subir a GitHub
git push origin main
```

Los cambios se reflejarán en el blog publicado (con un pequeño delay).

## Solucionar Problemas Comunes

### "fatal: could not read Username"
- Asegúrate de tener un token de acceso personal en lugar de contraseña
- En Windows, puedes guardar las credenciales:
  ```bash
  git config --global credential.helper wincred
  ```

### "Permission denied (publickey)"
- Configura SSH keys correctamente
- O usa HTTPS en lugar de SSH

### Los cambios no se reflejan en GitHub Pages
- Espera 5-10 minutos
- Verifica que el branch sea "main" en Settings > Pages
- Asegúrate que el archivo `index.html` está en la raíz

## ¡Hecho!

Tu blog técnico sobre Grafos está ahora publicado en GitHub y accesible en línea. 

- 📍 Repositorio: `https://github.com/davidvargas/blog-grafos`
- 🌐 Blog en vivo: `https://davidvargas.github.io/blog-grafos/`

---

Para más información sobre GitHub Pages: [https://pages.github.com/](https://pages.github.com/)
