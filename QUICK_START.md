# ⚡ Quick Start - AiLendra Portfolio

Guía súper rápida para tener tu landing page online en menos de 30 minutos.

## 🚀 Pasos Rápidos

### 1. Preparar (5 minutos)
```bash
cd frontend
yarn install
yarn build
```

### 2. Subir a One.com (15 minutos)
1. **One.com** → "Mi Página Web" → "Administrador de archivos"
2. **Entra** a `public_html/`
3. **Sube TODO** el contenido de `frontend/build/`
4. **Crea** archivo `.htaccess` (copiar de `/frontend/.htaccess`)

### 3. Verificar (5 minutos)
- **Abre** tu dominio
- **Verifica** que todo carga
- **Testa** navegación y galería

## 🛠️ Cambios Comunes

### Cambiar Imágenes Portfolio
**Archivo:** `/frontend/src/components.js` línea ~250
```javascript
mainImage: "https://tu-nueva-imagen.jpg"
```

### Cambiar Testimonios  
**Archivo:** `/frontend/src/components.js` línea ~650
```javascript
{
  name: "Nuevo Cliente",
  content: "Su testimonio aquí..."
}
```

### Cambiar Contacto
**Archivo:** `/frontend/src/components.js` línea ~800
```javascript
href="mailto:tu-email@dominio.com"
```

## 🔄 Actualizar Sitio
```bash
# Después de cambios
yarn build
# Subir contenido de build/ a One.com
```

## 📞 Ayuda Rápida
- **Manual completo:** `README.md`
- **Mantenimiento:** `MAINTENANCE_GUIDE.md`
- **Deployment:** `DEPLOYMENT_ONE_COM.md`

¡En 30 minutos tendrás tu landing page profesional online! 🎉