import fs from 'fs';
import path from 'path';

// Read the single HTML file
const htmlContent = fs.readFileSync('NovaHogarCR_LandingPage.html', 'utf-8');

// Define Shopify folder structure
const baseDir = 'shopify_theme';
const dirs = [
  'layout',
  'sections',
  'templates',
  'config',
  'assets',
  'snippets',
  'locales'
];

// Create directories
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);
dirs.forEach(dir => {
  const p = path.join(baseDir, dir);
  if (!fs.existsSync(p)) fs.mkdirSync(p);
});

// 1. Create layout/theme.liquid (Minimal)
const themeLiquid = `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="canonical" href="{{ canonical_url }}">
    <link rel="preconnect" href="https://cdn.shopify.com" crossorigin>

    <title>{{ page_title }}</title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {{ content_for_header }}
  </head>

  <body>
    <main role="main" id="MainContent">
      {{ content_for_layout }}
    </main>
  </body>
</html>`;
fs.writeFileSync(path.join(baseDir, 'layout', 'theme.liquid'), themeLiquid);

// 2. Create sections/novahogar-landing.liquid
// We wrap the HTML content. 
// Note: We strip the outer <html> and <head> tags if we want it to be a section, 
// BUT for a full landing page we often use 'layout none'.
// However, to make it a valid Shopify Section that can be added to any page:
const landingSection = `
{% comment %}
  NovaHogar CR Landing Page Section
  This section contains the full React application bundled into a single file.
{% endcomment %}

<div class="novahogar-landing-wrapper">
  ${htmlContent}
</div>

{% schema %}
{
  "name": "NovaHogar Landing",
  "settings": [],
  "presets": [
    {
      "name": "NovaHogar Landing"
    }
  ]
}
{% endschema %}
`;
// Actually, putting <!doctype html> inside a <div> is bad.
// I will extract the head content and body content.

const headMatch = htmlContent.match(/<head>([\s\S]*?)<\/head>/);
const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/);

const extractedHead = headMatch ? headMatch[1] : '';
const extractedBody = bodyMatch ? bodyMatch[1] : '';

const betterLandingSection = `
{% comment %}
  NovaHogar CR Landing Page Section
{% endcomment %}

<div class="novahogar-landing-container">
  ${extractedHead}
  ${extractedBody}
</div>

<style>
  /* Ensure the landing page takes control of its own container */
  .novahogar-landing-container {
    all: initial;
    display: block;
    width: 100%;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  }
  /* Fix for Shopify theme overrides */
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
fs.writeFileSync(path.join(baseDir, 'sections', 'novahogar-landing.liquid'), betterLandingSection);

// 3. Create templates/index.json
const indexJson = {
  "sections": {
    "main": {
      "type": "novahogar-landing",
      "settings": {}
    }
  },
  "order": [
    "main"
  ]
};
fs.writeFileSync(path.join(baseDir, 'templates', 'index.json'), JSON.stringify(indexJson, null, 2));

// 4. Create config/settings_schema.json
fs.writeFileSync(path.join(baseDir, 'config', 'settings_schema.json'), JSON.stringify([
  {
    "name": "theme_info",
    "theme_name": "NovaHogar CR Custom Landing",
    "theme_version": "1.0.0",
    "theme_author": "NovaHogar CR",
    "theme_documentation_url": "https://novahogarcr.myshopify.com",
    "theme_support_url": "https://novahogarcr.myshopify.com"
  }
], null, 2));

// 5. Create locales/en.default.json
fs.writeFileSync(path.join(baseDir, 'locales', 'en.default.json'), JSON.stringify({
  "general": {
    "password_page": {
      "login_form_heading": "Enter store using password:"
    }
  }
}, null, 2));

console.log('Shopify theme structure created successfully.');
