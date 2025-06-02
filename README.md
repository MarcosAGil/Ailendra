# 🚀 AiLendra - Portfolio Landing Page

Una landing page súper profesional creada con React, Framer Motion y TailwindCSS, diseñada para convertir visitantes en clientes a través de experiencias visuales impactantes.

## 📋 Tabla de Contenidos

- [🎯 Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [📦 Dependencias](#-dependencias)
- [⚡ Instalación Rápida](#-instalación-rápida)
- [🌐 Deployment en One.com](#-deployment-en-onecom)
- [✏️ Mantenimiento Fácil](#️-mantenimiento-fácil)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Personalización](#-personalización)
- [🔧 Troubleshooting](#-troubleshooting)
- [📞 Soporte](#-soporte)

## 🎯 Características

### ✨ Diseño y UX
- **Hero Section** épico con animaciones Matrix y partículas flotantes
- **Galería Portfolio Interactiva** con 6 categorías que se abren como carpetas
- **Microanimaciones** fluidas inspiradas en Apple, Stripe, Linear
- **Responsive Design** perfecto en todos los dispositivos
- **Tema oscuro** con acentos cyan-azul profesional

### 🚀 Funcionalidades
- **Navegación suave** con scroll automático
- **Modal Gallery** con navegación por thumbnails
- **Formularios de contacto** múltiples
- **Animaciones Framer Motion** de alta calidad
- **SEO optimizado** para búsquedas
- **Performance A+** con lazy loading

### 💼 Secciones
1. **Hero** - Propuesta de valor principal
2. **Portfolio** - Galería interactiva de 6 categorías
3. **Servicios** - Cards detallados con hover effects
4. **Testimonios** - Reviews con ratings y avatares
5. **Contacto** - CTAs estratégicos para conversión

## 🛠️ Tecnologías

### Frontend
- **React 19.0.0** - Biblioteca principal
- **Framer Motion 12.15.0** - Animaciones profesionales
- **TailwindCSS 3.4.17** - Styling utility-first
- **Lucide React 0.511.0** - Iconos modernos
- **Headless UI 2.2.4** - Componentes accesibles

### Build Tools
- **React Scripts 5.0.1** - Build y development
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - CSS compatibility

### Development
- **ESLint 9.23.0** - Code quality
- **Node.js** - Runtime environment
- **Yarn** - Package manager

## 📦 Dependencias

### Dependencias de Producción
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.5.1",
  "react-scripts": "5.0.1",
  "framer-motion": "12.15.0",
  "lucide-react": "0.511.0",
  "@headlessui/react": "2.2.4",
  "axios": "^1.8.4"
}
```

### Dependencias de Desarrollo
```json
{
  "tailwindcss": "^3.4.17",
  "postcss": "^8.4.49",
  "autoprefixer": "^10.4.20",
  "eslint": "9.23.0",
  "@eslint/js": "9.23.0",
  "eslint-plugin-react": "7.37.4",
  "eslint-plugin-jsx-a11y": "6.10.2",
  "eslint-plugin-import": "2.31.0",
  "globals": "15.15.0"
}
```

## ⚡ Instalación Rápida

### Prerequisitos
- **Node.js** 16+ [Descargar aquí](https://nodejs.org/)
- **Yarn** package manager [Instalar aquí](https://yarnpkg.com/getting-started/install)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes git
   git clone tu-repo-url
   cd ailendra-portfolio
   
   # O descargar y extraer ZIP
   ```

2. **Instalar dependencias**
   ```bash
   cd frontend
   yarn install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   yarn start
   ```
   
   La aplicación se abrirá en `http://localhost:3000`

4. **Crear build de producción**
   ```bash
   yarn build
   ```
   
   Los archivos listos para producción estarán en la carpeta `build/`

## 🌐 Deployment en One.com

### Opción A: Upload Manual (Recomendado)

#### Paso 1: Preparar los archivos
```bash
cd frontend
yarn build
```

#### Paso 2: Acceder a One.com
1. Ve a [one.com](https://www.one.com)
2. Inicia sesión en tu cuenta
3. Ve a **"Mi Página Web" → "Administrador de archivos"**

#### Paso 3: Subir archivos
1. **Navega a la carpeta public_html** (o la carpeta raíz de tu dominio)
2. **Elimina archivos existentes** si los hay (opcional)
3. **Sube TODO el contenido** de la carpeta `frontend/build/`
   - Selecciona todos los archivos y carpetas dentro de `build/`
   - NO subas la carpeta `build` en sí, sino su contenido
4. **Mantén la estructura** exacta de carpetas

#### Paso 4: Configurar .htaccess
Crea un archivo `.htaccess` en la raíz con este contenido:
```apache
# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# React Router fallback
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### Opción B: FTP Upload

#### Configuración FTP
1. **Obtén credenciales FTP** desde tu panel de One.com
2. **Usa un cliente FTP** como FileZilla
3. **Conecta** con los datos de One.com
4. **Sube** todo el contenido de `frontend/build/` a `public_html/`

## ✏️ Mantenimiento Fácil

### 🖼️ Cambiar Imágenes del Portfolio

Las imágenes están definidas en `/frontend/src/components.js` en la sección `portfolioCategories`.

**Ubicación:** Línea ~250 aproximadamente
```javascript
const portfolioCategories = [
  {
    id: 1,
    title: "E-commerce & Fotografía",
    description: "Imágenes hiperrealistas de producto",
    mainImage: "TU_NUEVA_IMAGEN_AQUÍ", // Cambiar esta URL
    images: [
      "IMAGEN_1_GALERÍA",
      "IMAGEN_2_GALERÍA", 
      "IMAGEN_3_GALERÍA"
    ],
    // ...
  }
]
```

**Pasos para cambiar:**
1. Abre `/frontend/src/components.js`
2. Busca `portfolioCategories`
3. Reemplaza las URLs por tus imágenes
4. Ejecuta `yarn build`
5. Sube los nuevos archivos a One.com

### 💬 Cambiar Testimonios

**Ubicación:** Línea ~650 aproximadamente en `TestimonialsSection`
```javascript
const testimonials = [
  {
    name: "Nuevo Cliente",
    role: "Su Cargo",
    avatar: "URL_DEL_AVATAR",
    content: "Su testimonio aquí...",
    rating: 5,
    company: "Su Empresa"
  }
  // ...
]
```

### 📝 Cambiar Servicios

**Ubicación:** Línea ~550 aproximadamente en `ServicesSection`
```javascript
const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Tu Nuevo Servicio",
    description: "Descripción del servicio",
    features: [
      "Característica 1",
      "Característica 2", 
      "Característica 3"
    ],
    color: "from-purple-500 to-pink-500"
  }
]
```

### ✉️ Cambiar Información de Contacto

**Ubicación:** Línea ~800 aproximadamente en `ContactSection`
```javascript
// Busca estas líneas y modifica:
href="mailto:TU_EMAIL@dominio.com"
href="https://t.me/TU_TELEGRAM"
href="https://TU_ENLACE_CALENDARIO"
```

### 🏷️ Cambiar Marca y Colores

**Ubicación:** Multiple ubicaciones
```javascript
// Cambiar nombre de marca (buscar "AiLendra")
<span className="bg-gradient-to-r from-cyan-400 to-blue-500">
  TU_MARCA
</span>

// Cambiar tagline principal
"El Futuro de la TU_INDUSTRIA, Hoy."
```

## 📁 Estructura del Proyecto

```
ailendra-portfolio/
├── frontend/                  # Aplicación React
│   ├── public/               # Archivos públicos
│   │   ├── index.html       # HTML base
│   │   ├── favicon.ico      # Icono del sitio
│   │   └── manifest.json    # PWA manifest
│   ├── src/                 # Código fuente
│   │   ├── components.js    # 🎯 ARCHIVO PRINCIPAL - Todos los componentes
│   │   ├── App.js          # Componente raíz
│   │   ├── App.css         # Estilos personalizados
│   │   └── index.js        # Punto de entrada
│   ├── package.json        # Dependencias y scripts
│   ├── tailwind.config.js  # Configuración TailwindCSS
│   ├── postcss.config.js   # Configuración PostCSS
│   └── .env               # Variables de entorno
├── scripts/              # Scripts de utilidad
├── tests/               # Tests automatizados
└── README.md           # 📖 Esta documentación
```

### 🎯 Archivo Clave para Edición

**`/frontend/src/components.js`** - Contiene TODOS los componentes:
- `HeroSection` - Sección principal
- `PortfolioGallery` - Galería interactiva
- `ServicesSection` - Servicios oferecidos
- `TestimonialsSection` - Testimonios de clientes
- `ContactSection` - Información de contacto
- `Navigation` - Menú de navegación
- `Footer` - Pie de página

## 🎨 Personalización

### Cambiar Colores del Tema

En `/frontend/src/components.js`, busca y reemplaza:
```javascript
// Colores primarios
from-cyan-400 to-blue-500    // Cambiar por tus colores
from-cyan-500 to-blue-600    // CTAs principales

// Colores de servicios
from-purple-500 to-pink-500  // Servicio 1
from-blue-500 to-cyan-500    // Servicio 2
from-green-500 to-emerald-500 // Servicio 3
from-orange-500 to-red-500   // Servicio 4
```

### Personalizar Animaciones

Las animaciones están configuradas con Framer Motion:
```javascript
// Velocidad de animaciones
transition={{ duration: 0.8 }}        // Más lento: 1.2, Más rápido: 0.4

// Tipo de animación
transition={{ ease: "easeOut" }}       // También: "easeIn", "linear"

// Delay entre elementos
delay: index * 0.1                     // Cambiar 0.1 por 0.2 para más delay
```

### Añadir Nuevas Secciones

1. Crea el componente en `/frontend/src/components.js`
2. Añádelo al componente principal `Portfolio`
3. Actualiza la navegación en `Navigation`

## 🔧 Troubleshooting

### Problema: La página no carga en One.com
**Solución:**
1. Verifica que subiste el **contenido** de `build/`, no la carpeta
2. Asegúrate de tener el archivo `.htaccess` correcto
3. Verifica que el archivo `index.html` esté en la raíz

### Problema: Las imágenes no cargan
**Solución:**
1. Verifica que las URLs de imágenes sean válidas
2. Usa URLs completas (https://...)
3. Comprueba que las imágenes sean accesibles públicamente

### Problema: Errores al hacer build
**Solución:**
```bash
# Limpiar cache y reinstalar
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Problema: Navegación no funciona
**Solución:**
- Asegúrate de tener el archivo `.htaccess` con las reglas de React Router

### Problema: Animaciones lentas
**Solución:**
1. Reduce la duración de las animaciones
2. Simplifica efectos complejos
3. Optimiza imágenes (compresión)

## 📊 Scripts Disponibles

```bash
# Desarrollo
yarn start          # Iniciar servidor de desarrollo
yarn build          # Crear build de producción
yarn test           # Ejecutar tests
yarn eject          # Ejectar configuración (¡CUIDADO!)

# Utilidades
yarn lint           # Verificar código
yarn format         # Formatear código
yarn analyze        # Analizar bundle size
```

## 🚀 Deploy Script Automatizado

Crea un archivo `deploy.sh` para automatizar:

```bash
#!/bin/bash
echo "🚀 Iniciando deploy de AiLendra..."

# Build del proyecto
cd frontend
yarn build

echo "✅ Build completado"
echo "📁 Archivos listos en frontend/build/"
echo "🌐 Sube el contenido de build/ a tu hosting"
echo "✨ ¡Deployment completo!"
```

## 🔒 Variables de Entorno

Si necesitas configurar variables:

```env
# frontend/.env
REACT_APP_SITE_URL=https://tu-dominio.com
REACT_APP_CONTACT_EMAIL=tu-email@dominio.com
REACT_APP_TELEGRAM=tu_telegram
REACT_APP_GOOGLE_ANALYTICS=GA_TRACKING_ID
```

## 📈 SEO y Performance

### Meta Tags
Edita `/frontend/public/index.html`:
```html
<title>AiLendra - Soluciones IA para tu Negocio</title>
<meta name="description" content="Implementa soluciones con IA que transforman tu marca en una potencia creativa, de marketing y de ventas.">
<meta name="keywords" content="IA, Inteligencia Artificial, Marketing Digital, E-commerce">
```

### Open Graph
```html
<meta property="og:title" content="AiLendra - El Futuro de la Creación Digital">
<meta property="og:description" content="Soluciones innovadoras con IA">
<meta property="og:image" content="https://tu-dominio.com/og-image.jpg">
<meta property="og:url" content="https://tu-dominio.com">
```

## 📞 Soporte

### Contacto de Desarrollo
- **Email**: desarrollo@ailendra.com
- **Telegram**: @ai_lendra
- **Documentación**: Este README.md

### Recursos Útiles
- [React Docs](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)
- [One.com Help](https://help.one.com/)

### Backup y Versionado
1. **Siempre haz backup** antes de cambios importantes
2. **Guarda versiones** de tu código
3. **Testa localmente** antes de subir a producción

---

## 🎉 ¡Felicidades!

Tu landing page AiLendra está lista para generar conversiones. Con esta documentación, podrás mantener y actualizar tu sitio sin problemas.

**¿Necesitas ayuda?** Consulta este README o contacta al equipo de desarrollo.

---

*Creado con ❤️ para transformar el futuro digital*