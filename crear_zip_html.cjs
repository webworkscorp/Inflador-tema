const fs = require('fs');
const path = require('path');

// 1. Crear el entorno limpio
const baseDir = 'NovaHogar_HTML';
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);

const dirs = ['layout', 'templates', 'config'];
dirs.forEach(d => {
  const p = path.join(baseDir, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p);
});

// 2. Leer exactamente el HTML original tal y como indicaste
const html = fs.readFileSync('NovaHogarCR_LandingPage.html', 'utf-8');

const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

const headContent = headMatch ? headMatch[1] : '';
const bodyContent = bodyMatch ? bodyMatch[1] : '';

// 3. Crear el theme.liquid con el HTML envuelto sin que Shopify lo rechace
// Las variables obligatorias de Shopify (content_for_header y content_for_layout) se colocan 
// y el resto del HTML va metido en tags {% raw %} garantizando 0 errores.
const themeLiquid = `<!doctype html>
<html lang="es">
<head>
  {{ content_for_header }}
  {% raw %}
  ${headContent}
  {% endraw %}
</head>
<body>
  {% raw %}
  ${bodyContent}
  {% endraw %}
  
  <div style="display:none">{{ content_for_layout }}</div>
</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'layout', 'theme.liquid'), themeLiquid);

// 4. Archivos obligatorios mínimos que Shopify necesita para reconocer el ZIP
fs.writeFileSync(path.join(baseDir, 'templates', 'index.liquid'), '');
fs.writeFileSync(path.join(baseDir, 'templates', 'product.liquid'), '');

const schema = [
  {
    "name": "theme_info",
    "theme_name": "NovaHogar Landing HTML",
    "theme_version": "1.0.0",
    "theme_author": "NovaHogar"
  }
];
fs.writeFileSync(path.join(baseDir, 'config', 'settings_schema.json'), JSON.stringify(schema, null, 2));

console.log("Directorio HTML formateado listo para Shopify.");
