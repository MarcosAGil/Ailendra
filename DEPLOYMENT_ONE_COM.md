# 🌐 Guía de Deployment One.com - AiLendra Portfolio

Tutorial paso a paso para subir tu landing page a One.com de forma fácil y rápida.

## 📋 Preparación Previa

### ✅ Checklist Antes de Empezar
- [ ] Tienes una cuenta activa en One.com
- [ ] Tu dominio está configurado y activo
- [ ] Has ejecutado `yarn build` exitosamente
- [ ] Tienes los archivos en `frontend/build/`

## 🚀 Método 1: Upload Manual (Recomendado)

### Paso 1: Preparar los Archivos

```bash
# En tu computadora
cd frontend
yarn build
```

Verifica que tienes estos archivos en `frontend/build/`:
```
build/
├── index.html
├── favicon.ico
├── manifest.json
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── ...otros archivos
```

### Paso 2: Acceder a One.com

1. **Ve a one.com** → Inicia sesión
2. **Panel de Control** → "Mi Página Web"
3. **Administrador de Archivos** → Click en "Acceder"

### Paso 3: Navegar a la Carpeta Correcta

En el administrador de archivos:
1. **Busca la carpeta** `public_html` o `www`
2. **Entra** a esa carpeta (esta es la raíz de tu sitio)
3. **Opcional:** Elimina archivos existentes

### Paso 4: Subir Archivos

**⚠️ IMPORTANTE:** Sube el **CONTENIDO** de `build/`, NO la carpeta `build` misma.

1. **Selecciona TODOS los archivos** dentro de `frontend/build/`
   - `index.html`
   - `favicon.ico`
   - `manifest.json`
   - Carpeta `static/`
   - Cualquier otro archivo

2. **Arrastra y suelta** o usa "Subir archivos"

3. **Mantén la estructura** exacta de carpetas

### Paso 5: Crear .htaccess

En la raíz de `public_html`, crea un archivo llamado `.htaccess`:

```apache
# Gzip compression para mejor performance
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

# Cache para mejor performance
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
```

### Paso 6: Verificar

1. **Ve a tu dominio** en el navegador
2. **Verifica que carga** correctamente
3. **Testa la navegación** entre secciones
4. **Comprueba** que las imágenes cargan

## 🔌 Método 2: FTP (Alternativo)

### Configuración FTP One.com

1. **Panel One.com** → "FTP y archivos"
2. **Anota los datos:**
   - Servidor FTP: `tu-dominio.com` o IP
   - Usuario: tu usuario FTP
   - Contraseña: tu contraseña FTP
   - Puerto: 21 (normal) o 22 (SFTP)

### Cliente FTP Recomendado: FileZilla

1. **Descarga FileZilla** (gratis)
2. **Conecta** con tus datos de One.com
3. **Navega** a `public_html/` en el servidor
4. **Sube** todo el contenido de `frontend/build/`

### Configuración FileZilla
```
Host: ftp.tu-dominio.com
Usuario: tu-usuario-ftp
Contraseña: tu-contraseña
Puerto: 21
```

## 🛠️ Configuración Avanzada

### SSL/HTTPS (Recomendado)

En el panel de One.com:
1. **Ve a** "SSL/TLS"
2. **Activa** "Let's Encrypt" (gratis)
3. **Espera** a que se configure (puede tardar hasta 24h)

### Compresión GZIP

Ya incluida en el `.htaccess` de arriba. Mejora la velocidad de carga.

### Cache del Navegador

También incluido en `.htaccess`. Los archivos se cachean automáticamente.

## 📱 Verificación Post-Deployment

### ✅ Checklist de Verificación

- [ ] **Homepage carga** correctamente
- [ ] **Navegación** funciona entre secciones
- [ ] **Imágenes** se muestran todas
- [ ] **Animaciones** funcionan suavemente
- [ ] **Botones** de contacto funcionan
- [ ] **Enlaces** a redes sociales abren
- [ ] **Responsive** se ve bien en móvil
- [ ] **Velocidad** de carga aceptable

### 🔍 Herramientas de Testing

- **Google PageSpeed**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
- **Mobile-Friendly Test**: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)

## 🆘 Solución de Problemas Comunes

### ❌ "Página no encontrada" en rutas

**Problema:** Navegación interna no funciona  
**Solución:** Verifica que tienes el archivo `.htaccess` correcto

### ❌ Imágenes no cargan

**Problema:** Imágenes rotas  
**Solución:** 
1. Verifica URLs de imágenes en `components.js`
2. Asegúrate que son https://
3. Prueba las URLs en el navegador

### ❌ CSS no se aplica

**Problema:** Estilos no funcionan  
**Solución:**
1. Hard refresh (Ctrl+F5)
2. Verifica que subiste la carpeta `static/`
3. Comprueba la consola del navegador (F12)

### ❌ Sitio muy lento

**Problema:** Carga lenta  
**Solución:**
1. Optimiza imágenes (menos de 500KB)
2. Verifica que el `.htaccess` esté configurado
3. Usa formato WebP para imágenes

### ❌ No se ven cambios

**Problema:** Cambios no aparecen  
**Solución:**
1. Hard refresh del navegador
2. Limpia cache del navegador
3. Verifica que subiste los archivos nuevos

## 🔄 Actualizaciones Futuras

### Proceso de Actualización

1. **Haz cambios** en `components.js`
2. **Ejecuta build:** `yarn build`
3. **Sube archivos nuevos** a One.com
4. **Reemplaza** solo los archivos cambiados
5. **Verifica** en el navegador

### Backup Recomendado

Antes de actualizaciones importantes:
1. **Descarga** archivos actuales de One.com
2. **Guarda backup** en tu computadora
3. **Anota** la fecha y cambios realizados

## 📊 Monitoring y Analytics

### Google Analytics (Opcional)

En `frontend/public/index.html` añade:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_GA_ID');
</script>
```

## 📞 Soporte One.com

- **Ayuda One.com**: [help.one.com](https://help.one.com)
- **Chat soporte**: Disponible en tu panel
- **Documentación FTP**: En el panel de One.com

---

## ✅ ¡Deployment Completado!

Tu landing page AiLendra ya está en línea y lista para convertir visitantes en clientes. 

**Próximos pasos recomendados:**
1. **Comparte** tu nuevo sitio
2. **Configura** Google Analytics
3. **Optimiza** SEO con meta tags
4. **Monitorea** performance

¡Disfruta de tu nueva landing page profesional! 🚀