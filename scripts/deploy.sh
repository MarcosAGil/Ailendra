#!/bin/bash

# 🚀 AiLendra Deploy Script
# Este script automatiza el proceso de build para deployment

echo "🚀 Iniciando deploy de AiLendra Portfolio..."
echo "=================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "frontend/package.json" ]; then
    echo "❌ Error: No se encuentra frontend/package.json"
    echo "   Ejecuta este script desde la raíz del proyecto"
    exit 1
fi

# Navegar a frontend
cd frontend

echo "📦 Instalando dependencias..."
yarn install

if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias"
    exit 1
fi

echo "🔨 Creando build de producción..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Error en el build"
    exit 1
fi

echo "✅ Build completado exitosamente!"
echo "=================================="
echo "📁 Archivos listos en: frontend/build/"
echo ""
echo "📋 PRÓXIMOS PASOS PARA ONE.COM:"
echo "1. Ve a tu panel de One.com"
echo "2. Accede al Administrador de archivos"
echo "3. Navega a public_html/"
echo "4. Sube TODO el contenido de frontend/build/"
echo "5. Crea el archivo .htaccess (ver README.md)"
echo ""
echo "🌐 Tu sitio estará disponible en tu dominio"
echo "✨ ¡Deployment listo!"

# Crear archivo de instrucciones
cat > build-instructions.txt << EOF
INSTRUCCIONES DE DEPLOYMENT - AiLendra Portfolio
===============================================

Fecha del build: $(date)

ARCHIVOS GENERADOS:
- Ubicación: frontend/build/
- Contiene: index.html, CSS, JS, imágenes, etc.

PASOS PARA ONE.COM:
1. Accede a one.com y tu panel de control
2. Ve a "Mi Página Web" → "Administrador de archivos"
3. Navega a la carpeta public_html/
4. ELIMINA archivos existentes (opcional)
5. SUBE todo el CONTENIDO de frontend/build/ 
   (NO la carpeta build, sino lo que está dentro)
6. Crea archivo .htaccess con el contenido del README.md
7. ¡Listo! Tu sitio estará en línea

MANTENIMIENTO:
- Para cambiar imágenes: edita frontend/src/components.js
- Para cambiar testimonios: línea ~650 en components.js  
- Para cambiar servicios: línea ~550 en components.js
- Después de cambios: ejecuta este script nuevamente

CONTACTO:
- Documentación completa: README.md
- Soporte: info@ailendra.com
EOF

echo ""
echo "📝 Instrucciones guardadas en: build-instructions.txt"