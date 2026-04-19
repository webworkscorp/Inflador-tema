import fs from 'fs';
import path from 'path';

// Read the single HTML file
const htmlContent = fs.readFileSync('NovaHogarCR_LandingPage.html', 'utf-8');

// Extract head and body
const headMatch = htmlContent.match(/<head>([\s\S]*?)<\/head>/i);
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

// For Liquid, we MUST wrap React/JS minified code in {% raw %} so the `{{` and `}}` patterns 
// do not crash Shopify's template parser.
const extractedHead = headMatch ? headMatch[1] : '';
const extractedBody = bodyMatch ? bodyMatch[1] : '';

const rawHtmlContent = `
{% raw %}
  ${extractedHead}
  ${extractedBody}
{% endraw %}
`;

const sectionContent = `
{% comment %}
  NovaHogar CR Landing Page Section
  (Includes Raw HTML+JS+CSS to prevent Liquid syntax conflicts)
{% endcomment %}

<div class="novahogar-landing-container">
  ${rawHtmlContent}
</div>

<style>
  .novahogar-landing-container {
    all: initial;
    display: block;
    width: 100%;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  }
  .novahogar-landing-container * {
    box-sizing: border-box;
  }
</style>

{% schema %}
{
  "name": "NovaHogar Landing",
  "tag": "section",
  "class": "novahogar-landing-section",
  "settings": [],
  "presets": [
    {
      "name": "NovaHogar Landing"
    }
  ]
}
{% endschema %}
`;

// Define Shopify folder structure
const baseDir = 'shopify_theme';
const dirs = ['layout', 'sections', 'templates', 'config', 'assets', 'snippets', 'locales'];

if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);
dirs.forEach(dir => {
  const p = path.join(baseDir, dir);
  if (!fs.existsSync(p)) fs.mkdirSync(p);
});

// Layout theme.liquid
const themeLiquid = `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title }}</title>
    {{ content_for_header }}
  </head>
  <body>
    {{ content_for_layout }}
  </body>
</html>`;
fs.writeFileSync(path.join(baseDir, 'layout', 'theme.liquid'), themeLiquid);

// Sections
fs.writeFileSync(path.join(baseDir, 'sections', 'novahogar-landing.liquid'), sectionContent);

// Minimal index.json
const indexJson = {
  "sections": {
    "main": { "type": "novahogar-landing", "settings": {} }
  },
  "order": ["main"]
};
// Add product.json so it can be assigned to the product directly in Shopify
const productJson = { ...indexJson };

fs.writeFileSync(path.join(baseDir, 'templates', 'index.json'), JSON.stringify(indexJson, null, 2));
fs.writeFileSync(path.join(baseDir, 'templates', 'product.json'), JSON.stringify(productJson, null, 2));

// configs
fs.writeFileSync(path.join(baseDir, 'config', 'settings_schema.json'), JSON.stringify([{"name": "theme_info","theme_name": "NovaHogar CR"}], null, 2));
fs.writeFileSync(path.join(baseDir, 'config', 'settings_data.json'), JSON.stringify({"current": {}}, null, 2));

console.log('Regenerated shopify templates with raw tags.');
