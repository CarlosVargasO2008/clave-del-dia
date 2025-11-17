# Configurar Despliegue en GitHub Pages

Tu app se desplegará automáticamente en GitHub Pages de forma **totalmente gratis**. Sigue estos pasos:

## Paso 1: Habilita GitHub Pages en tu Repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/CarlosVargasO2008/clave-del-dia`
2. Click en **Settings** (Configuración)
3. En el menú izquierdo, ve a **Pages**
4. Bajo "Build and deployment":
   - **Source**: Selecciona `Deploy from a branch`
   - **Branch**: Selecciona `gh-pages` y `/root`
5. Espera 1-2 minutos a que se despliegue

## Paso 2: Tu App Estará en Vivo

Después de habilitar GitHub Pages, tu app estará disponible en:

```
https://carlosvargaso2008.github.io/clave-del-dia/
```

## Paso 3: Despliegue Automático

Cada vez que hagas **push** a la rama `main` de GitHub, tu app se actualizará automáticamente.

El workflow de GitHub Actions (`/.github/workflows/deploy.yml`):

- ✅ Construye tu app
- ✅ La sube a la rama `gh-pages`
- ✅ GitHub Pages la publica automáticamente

## Notas Importantes

- **Primera vez**: Puede tomar 1-2 minutos para que aparezca el sitio
- **Actualizaciones**: Los cambios posteriores se verán en ~1 minuto
- **Sin costo**: GitHub Pages es completamente gratis
- **Dominio personalizado**: Puedes configurar un dominio personalizado en GitHub Pages settings si lo deseas

¡Listo! Tu app estará en vivo 🚀
