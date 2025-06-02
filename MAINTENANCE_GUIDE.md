# 🛠️ Guía de Mantenimiento - AiLendra Portfolio

Esta guía te ayudará a realizar cambios comunes en tu landing page de forma súper sencilla.

## 📋 Cambios Más Comunes

### 🖼️ 1. Cambiar Imágenes del Portfolio

**Archivo:** `/frontend/src/components.js`  
**Línea:** ~250 (buscar `portfolioCategories`)

```javascript
const portfolioCategories = [
  {
    id: 1,
    title: "E-commerce & Fotografía",
    description: "Imágenes hiperrealistas de producto",
    mainImage: "https://tu-nueva-imagen.jpg", // 👈 CAMBIAR AQUÍ
    images: [
      "https://imagen-1.jpg", // 👈 GALERÍA IMAGEN 1
      "https://imagen-2.jpg", // 👈 GALERÍA IMAGEN 2
      "https://imagen-3.jpg"  // 👈 GALERÍA IMAGEN 3
    ],
    services: ["Servicio 1", "Servicio 2", "Servicio 3"]
  },
  // ... más categorías
]
```

**Pasos:**
1. Abre `/frontend/src/components.js`
2. Busca `portfolioCategories`
3. Reemplaza las URLs de `mainImage` e `images`
4. Guarda el archivo
5. Ejecuta `./scripts/deploy.sh`
6. Sube los nuevos archivos a One.com

### 💬 2. Cambiar Testimonios

**Archivo:** `/frontend/src/components.js`  
**Línea:** ~650 (buscar `testimonials`)

```javascript
const testimonials = [
  {
    name: "María González", // 👈 NOMBRE DEL CLIENTE
    role: "CEO, TechStart", // 👈 CARGO Y EMPRESA
    avatar: "https://url-del-avatar.jpg", // 👈 FOTO DEL CLIENTE
    content: "AiLendra transformó completamente...", // 👈 TESTIMONIO
    rating: 5, // 👈 ESTRELLAS (1-5)
    company: "TechStart" // 👈 EMPRESA
  },
  // ... más testimonios
]
```

**Para añadir un nuevo testimonio:**
```javascript
{
  name: "Tu Nuevo Cliente",
  role: "Su Cargo, Su Empresa", 
  avatar: "https://foto-cliente.jpg",
  content: "Aquí va el testimonio completo del cliente...",
  rating: 5,
  company: "Nombre Empresa"
},
```

### 📧 3. Cambiar Información de Contacto

**Archivo:** `/frontend/src/components.js`  
**Línea:** ~800 (buscar `ContactSection`)

```javascript
// Buscar y cambiar estas líneas:

// Email
href="mailto:info@ailendra.com" // 👈 TU EMAIL

// Telegram  
href="https://t.me/ai_lendra" // 👈 TU TELEGRAM

// Enlaces sociales
href="https://www.youtube.com/@MarcosA_Gil" // 👈 TU YOUTUBE
href="https://x.com/MarcosA_Gil" // 👈 TU TWITTER
href="https://www.instagram.com/ai.lendra/" // 👈 TU INSTAGRAM
```

### 💼 4. Cambiar Servicios

**Archivo:** `/frontend/src/components.js`  
**Línea:** ~550 (buscar `services`)

```javascript
const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Tu Nuevo Servicio", // 👈 TÍTULO DEL SERVICIO
    description: "Descripción breve del servicio", // 👈 DESCRIPCIÓN
    features: [
      "Característica 1 del servicio", // 👈 BENEFICIOS
      "Característica 2 del servicio",
      "Característica 3 del servicio"
    ],
    color: "from-purple-500 to-pink-500" // 👈 COLORES
  },
  // ... más servicios
]
```

### 🎨 5. Cambiar Textos Principales

**Hero Section** (línea ~100):
```javascript
// Título principal
"El Futuro de la Creación Digital, Hoy." // 👈 CAMBIAR

// Subtítulo
"Implementa un ecosistema de soluciones con..." // 👈 CAMBIAR

// Botones
"DESCUBRIR MI POTENCIAL" // 👈 CAMBIAR
"SESIÓN ESTRATÉGICA GRATIS" // 👈 CAMBIAR
```

### 🏷️ 6. Cambiar Nombre de Marca

Buscar y reemplazar todas las ocurrencias de `AiLendra` por tu marca:

```javascript
// Buscar en todo el archivo:
"AiLendra" → "TuMarca"
```

## 🚀 Proceso de Actualización

### Después de Hacer Cambios:

1. **Guarda el archivo** `components.js`
2. **Ejecuta el script de deploy:**
   ```bash
   chmod +x scripts/deploy.sh
   ./scripts/deploy.sh
   ```
3. **Sube a One.com:**
   - Ve al administrador de archivos
   - Sube el contenido de `frontend/build/`
4. **Verifica los cambios** en tu dominio

## 📝 Plantillas Rápidas

### Nuevo Testimonio
```javascript
{
  name: "Nombre Cliente",
  role: "Cargo, Empresa",
  avatar: "https://imagen-cliente.jpg",
  content: "Testimonio del cliente sobre tu trabajo...",
  rating: 5,
  company: "Empresa"
},
```

### Nueva Categoría Portfolio
```javascript
{
  id: 7, // Siguiente número
  title: "Título de la Categoría",
  description: "Descripción breve",
  mainImage: "https://imagen-principal.jpg",
  images: [
    "https://imagen1.jpg",
    "https://imagen2.jpg", 
    "https://imagen3.jpg"
  ],
  services: ["Servicio 1", "Servicio 2", "Servicio 3"]
},
```

### Nuevo Servicio
```javascript
{
  icon: <Zap className="w-8 h-8" />, // Cambiar icono
  title: "Nombre del Servicio",
  description: "Qué ofreces en este servicio",
  features: [
    "Beneficio específico 1",
    "Beneficio específico 2",
    "Beneficio específico 3"
  ],
  color: "from-green-500 to-blue-500" // Colores del gradiente
},
```

## 🎯 Tips de Mantenimiento

### ✅ Mejores Prácticas
- **Siempre haz backup** antes de cambios importantes
- **Testa localmente** antes de subir (`yarn start`)
- **Usa imágenes optimizadas** (menos de 500KB)
- **Mantén URLs de imágenes accesibles** públicamente

### 🖼️ Optimización de Imágenes
- **Tamaño recomendado:** 1200x800px para portfolio
- **Formato:** JPG o WebP
- **Peso:** Menos de 500KB por imagen
- **Herramientas:** TinyPNG, ImageOptim

### 🔍 URLs de Imágenes
- Usa servicios como **Unsplash**, **Pexels** o **tu hosting**
- URLs deben ser **https://**
- Verifica que las imágenes **se vean públicamente**

## 🆘 Solución de Problemas

### La página no muestra cambios
1. Haz "hard refresh" (Ctrl+F5)
2. Verifica que subiste los archivos correctos
3. Comprueba la consola del navegador (F12)

### Las imágenes no cargan
1. Verifica que las URLs sean válidas
2. Abre las URLs en una pestaña nueva
3. Asegúrate que sean https://

### Error al hacer build
```bash
cd frontend
rm -rf node_modules
yarn install
yarn build
```

---

## 📞 ¿Necesitas Ayuda?

- **README completo:** `/README.md`
- **Email:** info@ailendra.com
- **Telegram:** @ai_lendra

¡Tu landing page está lista para brillar! 🌟