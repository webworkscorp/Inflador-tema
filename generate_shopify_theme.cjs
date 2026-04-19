const fs = require('fs');
const path = require('path');

const themeDir = 'shopify_theme_final';

// Configurar carpetas
const dirs = ['layout', 'templates', 'sections', 'assets', 'config'];
if (fs.existsSync(themeDir)) fs.rmSync(themeDir, { recursive: true, force: true });
fs.mkdirSync(themeDir);
dirs.forEach(d => fs.mkdirSync(path.join(themeDir, d)));

// Extraer CSS
const htmlContent = fs.readFileSync('NovaHogarCR_LandingPage_Estatica.html', 'utf-8');
const styleMatch = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/);
const cssContent = styleMatch ? styleMatch[1] : '';
fs.writeFileSync(path.join(themeDir, 'assets', 'styles.css'), cssContent);

// layout/theme.liquid
fs.writeFileSync(path.join(themeDir, 'layout', 'theme.liquid'), `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title }}</title>
    {{ content_for_header }}
    {{ 'styles.css' | asset_url | stylesheet_tag }}
  </head>
  <body class="min-h-screen bg-white max-w-lg mx-auto shadow-2xl relative pb-24">
    {% section 'header' %}
    <main role="main" id="MainContent">
      {{ content_for_layout }}
    </main>
    {% section 'footer' %}
    {{ 'script.js' | asset_url | script_tag }}
  </body>
</html>`);

// templates/index.json
fs.writeFileSync(path.join(themeDir, 'templates', 'index.json'), JSON.stringify({
  "layout": "theme",
  "sections": {},
  "order": []
}, null, 2));

// templates/product.json
fs.writeFileSync(path.join(themeDir, 'templates', 'product.json'), JSON.stringify({
  "layout": "theme",
  "sections": {
    "main": {
      "type": "main-product",
      "settings": {}
    }
  },
  "order": ["main"]
}, null, 2));

// sections/header.liquid
fs.writeFileSync(path.join(themeDir, 'sections', 'header.liquid'), `
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
  <div class="px-4 h-16 flex items-center justify-between">
    <div class="flex items-center">
      <h1 class="text-xl font-extrabold tracking-tighter text-primary font-display">
        NovaHogar<span class="text-secondary">CR</span>
      </h1>
    </div>
    <div class="flex items-center gap-4">
      <a href="/cart" class="relative p-2 text-primary hover:text-secondary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        {% if cart.item_count > 0 %}
          <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
            {{ cart.item_count }}
          </span>
        {% endif %}
      </a>
    </div>
  </div>
</header>
{% schema %}
{
  "name": "Header",
  "settings": []
}
{% endschema %}
`);

// sections/footer.liquid
fs.writeFileSync(path.join(themeDir, 'sections', 'footer.liquid'), `
<footer class="bg-gray-900 text-white pt-12 pb-8 px-6 mt-12 rounded-t-3xl">
  <div class="max-w-md mx-auto space-y-8">
    <div class="text-center space-y-4">
      <h3 class="text-2xl font-extrabold tracking-tighter font-display">
        NovaHogar<span class="text-gray-400">CR</span>
      </h3>
      <p class="text-gray-400 text-sm">Innovación y calidad para tu hogar y tu camino.</p>
    </div>
    <form method="post" action="/contact#contact_form" class="space-y-3">
      <input type="hidden" name="form_type" value="customer">
      <h4 class="text-sm font-bold uppercase tracking-wider text-gray-300 text-center">Únete a nuestra Newsletter</h4>
      <div class="flex gap-2">
        <input type="email" name="contact[email]" placeholder="Tu mejor email..." class="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-500" required>
        <button type="submit" class="bg-white text-black px-4 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
          Suscribirme
        </button>
      </div>
    </form>
    <div class="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
      <p class="text-gray-500 text-xs font-medium tracking-wide">© {{ 'now' | date: "%Y" }} NovaHogar CR. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
{% schema %}
{
  "name": "Footer",
  "settings": []
}
{% endschema %}
`);

// sections/main-product.liquid
fs.writeFileSync(path.join(themeDir, 'sections', 'main-product.liquid'), `
<div class="bg-black text-white text-xs font-bold uppercase tracking-wider py-2 overflow-hidden whitespace-nowrap">
  <div class="inline-block animate-[marquee_20s_linear_infinite]">
    <span>&nbsp;🔥 ENVÍO GRATIS A TODO EL PAÍS 🔥 PAGO CONTRA ENTREGA 🔥 STOCK LIMITADO 🔥 PAGO CONTRA ENTREGA 🔥 ENVÍO GRATIS A TODO EL PAÍS 🔥</span>
  </div>
</div>

<div class="gallery bg-white pb-6">
  <div class="relative aspect-square w-full bg-gray-50 overflow-hidden">
    <img id="main-product-image" class="w-full h-full object-cover" src="{{ product.featured_image | image_url: width: 800 }}" alt="{{ product.title | escape }}">
  </div>
  <div class="flex gap-2 overflow-x-auto px-4 py-3 snap-x scrollbar-hide">
    {% for image in product.images %}
      <div class="gallery-thumbnail relative w-20 h-20 flex-shrink-0 snap-start cursor-pointer rounded-xl overflow-hidden border-2 border-transparent hover:border-black transition-all" data-src="{{ image | image_url: width: 800 }}">
        <img src="{{ image | image_url: width: 200 }}" class="w-full h-full object-cover" alt="{{ image.alt | escape }}">
      </div>
    {% endfor %}
  </div>
</div>

<div class="px-5 py-4 bg-white">
  <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-wide mb-4 ring-1 ring-red-100">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
    Top Ventas
  </div>
  
  <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 mb-3 leading-tight font-display">
    {{ product.title }}
  </h1>

  <div class="flex items-center gap-3 mb-6">
    <div class="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100">
      <span class="text-sm font-bold text-yellow-700">4.8</span>
      <div class="flex text-yellow-400">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      </div>
    </div>
    <span class="text-sm font-medium text-gray-500 underline decoration-gray-300 underline-offset-4">+2,500 clientes satisfechos</span>
  </div>

  <div class="px-4 py-4 border-t border-b border-gray-100 bg-gray-50 rounded-xl mb-6">
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <div class="mt-0.5 text-xl leading-none flex-shrink-0">🏎️</div>
        <p class="text-base leading-relaxed text-gray-800">Infla en minutos, donde sea que estés</p>
      </li>
      <li class="flex items-start gap-3">
        <div class="mt-0.5 text-xl leading-none flex-shrink-0">🎯</div>
        <p class="text-base leading-relaxed text-gray-800">Presión exacta, sin pasarte ni un PSI</p>
      </li>
      <li class="flex items-start gap-3">
        <div class="mt-0.5 text-xl leading-none flex-shrink-0">👜</div>
        <p class="text-base leading-relaxed text-gray-800">Cabe en tu guantera, siempre listo</p>
      </li>
      <li class="flex items-start gap-3">
        <div class="mt-0.5 text-xl leading-none flex-shrink-0">🔌</div>
        <p class="text-base leading-relaxed text-gray-800">Compatible con todo lo que necesites inflar</p>
      </li>
    </ul>
  </div>

  <div class="text-base text-gray-600 leading-relaxed mb-6">
    {{ product.description }}
  </div>

  <div class="mt-8 space-y-4">
    <div class="border border-border rounded-2xl overflow-hidden bg-white">
      <button class="accordion-button w-full px-5 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
        <span class="font-bold text-[15px] text-primary">¿Cómo se usa?</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion-icon w-5 h-5 text-gray-400 transition-transform duration-300"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="accordion-content hidden px-5 py-4 text-sm text-secondary bg-white border-t border-border">
        Configuras la presión deseada, conectas la manguera y presionas iniciar. El inflador se detendrá automáticamente.
      </div>
    </div>
    <div class="border border-border rounded-2xl overflow-hidden bg-white">
      <button class="accordion-button w-full px-5 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
        <span class="font-bold text-[15px] text-primary">Especificaciones</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion-icon w-5 h-5 text-gray-400 transition-transform duration-300"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="accordion-content hidden px-5 py-4 text-sm text-secondary bg-white border-t border-border">
        Batería de larga duración, carga Tipo C, pantalla digital LED, linterna integrada de emergencia.
      </div>
    </div>
  </div>
</div>

<div class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-5 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] transform-gpu w-full">
  <form action="/cart/add" method="post" enctype="multipart/form-data" class="max-w-md mx-auto flex items-center justify-between gap-4">
    <input type="hidden" name="id" value="{{ product.variants.first.id }}">
    <div class="flex flex-col">
      <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Precio Especial</span>
      <div class="flex items-baseline gap-2">
        <span class="text-3xl font-extrabold text-primary font-display tracking-tight">{{ product.price | money }}</span>
        {% if product.compare_at_price > product.price %}
          <span class="text-sm font-medium text-gray-400 line-through">{{ product.compare_at_price | money }}</span>
        {% endif %}
      </div>
    </div>
    <button type="submit" class="flex-1 bg-black text-white px-2 py-4 rounded-xl font-bold text-[15px] shadow-xl shadow-black/20 hover:bg-gray-900 transition-all duration-200 uppercase tracking-wide text-center">
      Comprar Ahora
    </button>
  </form>
</div>
{% schema %}
{
  "name": "Product Main",
  "settings": []
}
{% endschema %}
`);

// assets/script.js
fs.writeFileSync(path.join(themeDir, 'assets', 'script.js'), `
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion-button');
  accordions.forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  const thumbnails = document.querySelectorAll('.gallery-thumbnail');
  const mainImage = document.getElementById('main-product-image');
  if(thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        mainImage.src = this.getAttribute('data-src');
        thumbnails.forEach(t => t.classList.remove('border-black'));
        this.classList.add('border-black');
      });
    });
  }
});
`);

// config/settings_schema.json
fs.writeFileSync(path.join(themeDir, 'config', 'settings_schema.json'), JSON.stringify([
  {
    "name": "theme_info",
    "theme_name": "NovaHogar Landing Shopify",
    "theme_author": "NovaHogar",
    "theme_version": "1.0.0",
    "theme_documentation_url": "https://shopify.com",
    "theme_support_url": "https://shopify.com"
  }
], null, 2));

// config/settings_data.json
fs.writeFileSync(path.join(themeDir, 'config', 'settings_data.json'), JSON.stringify({
  "current": {}
}, null, 2));

console.log("Done");
